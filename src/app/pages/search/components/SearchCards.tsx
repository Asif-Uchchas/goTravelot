
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
      <Link href={'/'}> 
      <div className="w-80 h-36 md:h-72 md:40 rounded relative group" style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}>
        <div className="text-white rounded-b-xl mt-3 py-6 px-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            <h5 className="text-xl font-semibold mb-2">{name}</h5>
        </div>
      </div>
      
      </Link> 
    </div>
  );
};

export default SearchCard;
