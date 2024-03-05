import React from "react";
import Link from "next/link";

interface SearchCardProps {
  id: number;
  imgUrl: string;
  name: string;
  description: string;
  reviewCount: number;
  rating: number;
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
  // Function to create star icons based on the rating
  const renderStars = (rating: number) => {
    const stars = [];
    const starCount = Math.round(rating) / 2; // Convert rating to a 5-star scale
    for (let i = 1; i <= 5; i++) {
      if (i <= starCount) {
        stars.push(
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-yellow-400 inline"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 1l1.875 5.782H18.75a.75.75 0 01.65 1.101l-4.313 5.656 1.938 5.954a.75.75 0 01-1.15.89L10 17.215l-5.875 3.569a.75.75 0 01-1.15-.89l1.938-5.954-4.313-5.656a.75.75 0 01.65-1.101H3.125L5 1h5zm0 2.875L8.125 7.5h-3.75L10 13.6l3.625-3.6h-3.75L10 3.876z"
              clipRule="evenodd"
            />
          </svg>
        );
      } else {
        stars.push(
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-300 inline"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 1l1.875 5.782H18.75a.75.75 0 01.65 1.101l-4.313 5.656 1.938 5.954a.75.75 0 01-1.15.89L10 17.215l-5.875 3.569a.75.75 0 01-1.15-.89l1.938-5.954-4.313-5.656a.75.75 0 01.65-1.101H3.125L5 1h5zm0 2.875L8.125 7.5h-3.75L10 13.6l3.625-3.6h-3.75L10 3.876z"
              clipRule="evenodd"
            />
          </svg>
        );
      }
    }
    return stars;
  };

  return (
    <div className="m-2">
      <Link href={`hotels/${id}`}>
        <div className="w-80 h-36 md:h-72 md:w-96 rounded relative group overflow-hidden transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 shadow-lg">
          <div
            className="w-full h-full rounded bg-center bg-cover relative"
            style={{ backgroundImage: `url(${imgUrl})` }}
          >
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 py-2 px-4">
              <h5 className="text-xl font-semibold text-white">{name}</h5>
              <div className="flex justify-between mt-2 text-white">
                <div className="flex items-center">
                  <span className="mr-1 ml-1">Rating: { rating}</span>
                  {renderStars(rating)}
                </div>
                <p className="text-sm md:text-base">Reviews: {reviewCount}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SearchCard;
