'use client'
import React from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { hotelInfo } from "../../search/components/hotels";

const HotelPage = () => {


  const retrieveId = usePathname()
  const retrievedId = retrieveId.split("/")[3]

  const id = Number(retrievedId) || null;

  

  const hotel = hotelInfo.find((h) => h.id === id);

  if (!id) {
    return <div>Hotel not found!</div>;
  }

  if (!hotel) {
    return <div>Hotel not found!</div>;
  }

  return (
    <div className="container mx-auto mt-20">
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <img src={hotel.image} alt={hotel.name} className="w-full h-80 object-cover" />
      <div className="p-6">
        <h1 className="text-3xl font-semibold text-gray-800">{hotel.name}</h1>
        <div className="flex items-center mt-2">
          
          <span className="ml-2 text-gray-600">{hotel.reviewCount} reviews</span>
        </div>
        <p className="text-gray-700 mt-4 leading-relaxed">{hotel.description}</p>
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-800">Tags:</h3>
          <ul className="flex flex-wrap gap-2 mt-2">
            {hotel.tag.map((tag) => (
              <li key={tag} className="bg-gray-200 text-gray-800 py-1 px-2 rounded-lg">{tag}</li>
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-800">Additional Information:</h3>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div>
              <p className="text-gray-700 font-semibold">Location:</p>
              <p className="text-gray-600">{hotel.location}</p>
            </div>
            <div>
              <p className="text-gray-700 font-semibold">Distance from center:</p>
              <p className="text-gray-600">{hotel.distance}</p>
            </div>
            <div>
              <p className="text-gray-700 font-semibold">Sustainability:</p>
              <p className="text-gray-600">{hotel.sustainability}</p>
            </div>
            <div>
              <p className="text-gray-700 font-semibold">Property Features:</p>
              <p className="text-gray-600">{hotel.propertyFeatures}</p>
            </div>
            <div>
              <p className="text-gray-700 font-semibold">Room Type:</p>
              <p className="text-gray-600">{hotel.roomType}</p>
            </div>
            <div>
              <p className="text-gray-700 font-semibold">Original Price:</p>
              <p className="text-gray-600">{hotel.originalPrice}</p>
            </div>
            <div>
              <p className="text-gray-700 font-semibold">Current Price:</p>
              <p className="text-gray-600">{hotel.currentPrice}</p>
            </div>
            <div>
              <p className="text-gray-700 font-semibold">Taxes and Charges:</p>
              <p className="text-gray-600">{hotel.taxesAndCharges}</p>
            </div>
            <div>
              <p className="text-gray-700 font-semibold">Prepayment:</p>
              <p className="text-gray-600">{hotel.prepayment}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default HotelPage;
