
import React from "react";
import Link from "next/link";
import Image from "next/image";

interface SearchCardProps {
  imgUrl: string;
  name: string;
  
}

const SearchCard: React.FC<SearchCardProps> = ({
  imgUrl,
  name,
}) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-8">
        <h5 className="text-xl font-semibold mb-2">{name}</h5>
      </div>
    </div>
  );
};

export default SearchCard;
