
import React from "react";
import Link from "next/link";
import Image from "next/image";

interface SearchCardProps {
  id: number;
  imgUrl: string;
  name: string;
  description:string;
  reviewCount:number;
  rating:number;
  tag: string[];
}

const SearchCard: React.FC<SearchCardProps> = ({
  id,
  imgUrl,
  name,
  description,
  reviewCount,
  rating,
  tag,
}) => {
  return (
    <div className="m-2">
      <Link href={'/'}> 
      <div>
        <div className="w-80 h-36 md:h-72 md:40 rounded relative group" style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}>
          <div className="text-white rounded-b-xl mt-3 py-6 px-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              <h5 className="text-xl font-semibold mb-2">{name}</h5>
          </div>
        </div>

        <div>
          <p>Ratings-{rating}</p>
          <p>Reviews-{reviewCount}</p>
          {/* <p>Description-{description}</p> */}
        </div>


      </div>
      
      </Link> 
    </div>
  );
};

export default SearchCard;
