"use client";
import React, { useState } from "react";
import SearchTags from "./SearchTags";
import SearchCard from "./SearchCards";

interface Hotel {
  id: number;
  name: string;
  image: string;
  tag: string[];
}

const hotelData: Hotel[] = [
  {
    id: 1,
    name: "Yelinberg1",
    image: "../rec.jpg",
    tag: ["All", "Yelinberg"],
  },
  {
    id: 2,
    name: "Yelinberg2",
    image: "../rec.jpg",
    tag: ["All", "Dhaka"],
  },
  {
    id: 3,
    name: "Yelinberg3",
    image: "../rec.jpg",
    tag: ["All", "Coastland"],
  },
  {
    id: 4,
    name: "Yelinberg4",
    image: "../rec.jpg",
    tag: ["All", "Yelinberg"],
  },
  {
    id: 5,
    name: "Yelinberg4",
    image: "../rec.jpg",
    tag: ["All", "Yelinberg"],
  },
  {
    id: 6,
    name: "Yelinberg3",
    image: "../rec.jpg",
    tag: ["All", "Coastland"],
  },
];

const SearchResults: React.FC = () => {
  const tags = [
    { name: 'All' },
    { name: 'Yelinberg' },
    { name: 'Dhaka' },
    { name: 'Coastland' },
    { name: 'Coand' },
  ];

  const [tag, setTag] = useState<string>("All");

  const filteredProjects = hotelData.filter((project) =>
    project.tag.includes(tag)
  );
  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  return (
    <div id='offers' className="w-screen h-auto  items-center justify-center p-10 " >    
       <div className=" flex relative flex-col  space-y-4">
            <p className=" text-2xl font-semibold md:text-3xl lg:text-4xl">
                Search Results
            </p>
            <p className=" text-lg md:text-lg lg:text-xl pb-4 ">
                1234
            </p>
      </div>
       <div className="flex">
      {/* Left: Filters Section */}
      <div className="hidden md:block w-1/8 mr-20">
         <p className=" text-md font-semibold md:text-md lg:text-md pb-4 ">
                Locations
            </p>
        <div className="grid md:grid-cols-1 items-start gap-2 text-white my-3 border rounded p-4 mb-10">
                {tags.map((tagObj) => (
                <SearchTags
                    key={tagObj.name}
                    name={tagObj.name}
                    onClick={() => handleTagChange(tagObj.name)}
                    isSelected={tag === tagObj.name}
                />
                ))}
            </div>

             <p className=" text-md font-semibold md:text-md lg:text-md pb-4 ">
                Price
             </p>
            <div className="grid md:grid-cols-1 items-start gap-2 text-white my-3 border rounded p-4 mb-10">
                {tags.map((tagObj) => (
                <SearchTags
                    key={tagObj.name}
                    name={tagObj.name}
                    onClick={() => handleTagChange(tagObj.name)}
                    isSelected={tag === tagObj.name}
                />
                ))}
            </div>

        {/* Add more filters as needed */}
      </div>

      {/* Right: Product Cards */}
      <div className="w-full md:w-3/4">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
        {filteredProjects.map((hotel) => (
                <SearchCard key={hotel.id} name={hotel.name} imgUrl={hotel.image} />
                ))}
        </div>
      </div>
    </div>







    </div>
  );
};

export default SearchResults;
