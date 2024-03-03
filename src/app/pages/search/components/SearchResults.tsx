"use client";
import React, { useState } from "react";
import SearchTags from "./SearchTags";
import SearchCard from "./SearchCards";
import { DropdownMenuCheckboxes } from "./TagDropdown";

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
                  <DropdownMenuCheckboxes tags={tags} onTagChange={handleTagChange} name="Location"/>
                </div>
            </div>

      </div>
       <div className="flex">

      {/* Right: Product Cards */}
      <div className="w-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4">
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
