'use client'
import React, { useEffect, useState } from "react";
import SearchCard from "./SearchCards";
import { DropdownMenuCheckboxes } from "./TagDropdown";
import { useRouter } from "next/navigation";
import { MdExpandMore } from "react-icons/md";
import { hotelInfo } from "./hotels";


const hotelData = hotelInfo

const SearchResults: React.FC = () => {
  const router = useRouter();

  const tags = [
    { name: "All" },
    { name: "Yelinberg" },
    { name: "Dhaka" },
    { name: "Mumbai" },
    { name: "New York" }
  ];
  const roomtags = [
    { name: "All" },
    { name: "1" },
    { name: "2" },
    { name: "3" },
    { name: "4" },
    { name: "5" },
  ];

  const [tag, setTag] = useState<string>("All");
  const [location, setLocation] = useState<string>("");

  const [showCount, setShowCount] = useState<number>(8); // Number of hotels to show initially
  const filteredProjects = hotelData.filter((project) =>
    project.tag.includes(tag)
  );
  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const handleShowMore = () => {
    setShowCount(showCount + 8); // Increase the number of shown hotels
  };

  return (
    <div className="w-screen h-auto items-center justify-center p-10">
      <div className="flex relative flex-col space-y-4">
        <p className="text-2xl font-semibold md:text-3xl lg:text-4xl">
          Search Results
        </p>

        <div className="flex">
          <p className="text-lg font-semibold md:text-xl lg:text-2xl mr-2 row-span-3">
            Filters:{" "}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-9 gap-2">
            <DropdownMenuCheckboxes
              tags={tags}
              onTagChange={handleTagChange}
              name="Location"
            />
            <DropdownMenuCheckboxes
              tags={tags}
              onTagChange={handleTagChange}
              name="Location"
            />
            <DropdownMenuCheckboxes
              tags={tags}
              onTagChange={handleTagChange}
              name="Location"
            />
            <DropdownMenuCheckboxes
              tags={roomtags}
              onTagChange={handleTagChange}
              name="Rooms"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        {/* Right: Product Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pl-10 ">
          {filteredProjects.slice(0, showCount).map((hotel) => (
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
        {showCount < filteredProjects.length && (
          <MdExpandMore 
            size={50}
            onClick={handleShowMore}
            className="mt-6 mb-2 text-whit bg-cyan-600 rounded-full p-2 hover:bg-amber-400 cursor-pointer text-2xl"
          />
        )}
      </div>
    </div>
  );
};

export default SearchResults;
