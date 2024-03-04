"use client";
import React, { useEffect, useState } from "react";
import SearchTags from "./SearchTags";
import SearchCard from "./SearchCards";
import { DropdownMenuCheckboxes } from "./TagDropdown";
import { useRouter } from "next/navigation";

interface Hotel {
  id: number;
  description:string;
  name: string;
  reviewCount:number;
  rating:number;
  image: string;
  tag: string[];
}

const hotelData: Hotel[] = [
  {
    id: 1,
    name: "Hotel Linkway",
    image: "https://cf.bstatic.com/xdata/images/hotel/square60/162282985.jpg?k=8442c7cc0bfdd20c0d7f92e11aa6dbf52e8b3836565582fb6514f212aa2778a8&o=",
    description:"Hotel Linkway.\n2 out of 5 stars.\n8.4 Very Good 304 reviews.\n‎Khar‬ • ‎4.6 km from center‬\n‎1.4 km from beach‬.\n Hotel room : Beds: 1 double or 2 twins.\n142 AED.\n+17 AED taxes and charges.\nFree cancellation.\nNo prepayment needed.",
    reviewCount:304,
    rating:8.4,
    tag: ["All", "Yelinberg","2"],
  },
  // {
  //   id: 2,
  //   name: "Yelinberg2",
  //   image: "../rec.jpg",
  //   tag: ["All", "Dhaka","3"],
  // },
  // {
  //   id: 3,
  //   name: "Yelinberg3",
  //   image: "../rec.jpg",
  //   tag: ["All", "Coastland","4"],
  // },
  // {
  //   id: 4,
  //   name: "Yelinberg4",
  //   image: "../rec.jpg",
  //   tag: ["All", "Yelinberg","1"],
  // },
  // {
  //   id: 5,
  //   name: "Yelinberg4",
  //   image: "../rec.jpg",
  //   tag: ["All", "Yelinberg","2"],
  // },
  // {
  //   id: 6,
  //   name: "Yelinberg3",
  //   image: "../rec.jpg",
  //   tag: ["All", "Coastland","3"],
  // },
];

const SearchResults: React.FC = () => {
  const router = useRouter();

  const tags = [
    { name: 'All' },
    { name: 'Yelinberg' },
    { name: 'Dhaka' },
    { name: 'Coastland' },
    { name: 'Coand' },
  ];
  const roomtags = [
    { name: 'All' },
    { name: '1' },
    { name: '2' },
    { name: '3' },
    { name: '4' },
    { name: '5' },
  ];

  const [tag, setTag] = useState<string>("All");
  const [location, setLocation] = useState<string>('');

  // useEffect(() => {
  //   const { query } = router;
  //   if (query.location) {
  //     setLocation(query.location as string);
  //   }
  // }, [router.query]);

  const filteredProjects = hotelData.filter((project) =>
    project.tag.includes(tag)
  );
  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  return (
    <div  className="w-screen h-auto  items-center justify-center p-10 " >    
       <div className=" flex relative flex-col  space-y-4">
            <p className=" text-2xl font-semibold md:text-3xl lg:text-4xl">
                Search Results
            </p>

            <div className="flex" >
                <p className=" text-lg font-semibold md:text-xl lg:text-2xl mr-2 row-span-3">Filters: </p>
                <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-9 gap-2">
                  <DropdownMenuCheckboxes tags={tags} onTagChange={handleTagChange} name="Location" />
                  <DropdownMenuCheckboxes tags={tags} onTagChange={handleTagChange} name="Location"/>
                  <DropdownMenuCheckboxes tags={tags} onTagChange={handleTagChange} name="Location" />
                  <DropdownMenuCheckboxes tags={roomtags} onTagChange={handleTagChange} name="Rooms"/>
                </div>
            </div>

      </div>
       <div className="flex">

      {/* Right: Product Cards */}
      <div className="w-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4">
        {filteredProjects.map((hotel) => (
                <SearchCard 
                key={hotel.id} 
                id={hotel.id}
                name={hotel.name} 
                imgUrl={hotel.image} 
                description={hotel.description}
                reviewCount={hotel.reviewCount}
                rating={hotel.rating}
                tag={hotel.tag}
                />
                ))}
        </div>
      </div>
     </div>
    </div>
  );
};

export default SearchResults;
