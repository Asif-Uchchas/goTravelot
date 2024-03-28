'use client'
import React, { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { hotelInfo } from "../../search/components/hotels";
import { Button } from "@nextui-org/react";

const HotelPage = () => {
  const retrieveId = usePathname();
  const retrievedId = retrieveId.split("/")[3];
  const id = Number(retrievedId) || null;
  const router = useRouter()

  const hotel = hotelInfo.find((h) => h.id === id);

  if (!id || !hotel) {
    return <div className="container mx-auto mt-20">Hotel not found!</div>;
  }

  const [isLoggedIn, setIsLoggedIn] = useState('false')

  const handleHotelBooking = () => {

    if (isLoggedIn) {
      
    }

    return router.push("/pages/booking")
  }

  return (
    <div className="container mx-auto mt-20">
      <div className="bg-white rounded-lg overflow-hidden shadow-md flex flex-wrap">
        <div className="w-full md:w-1/2">
          <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" />
        </div>
        <div className="p-6 w-full md:w-1/2">
          <h1 className="text-3xl font-semibold text-gray-800 mb-2">{hotel.name}</h1>
          <div className="flex items-center mb-4">
            <span className="text-gray-600">{hotel.reviewCount} reviews</span>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">{hotel.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-100 p-4 rounded-lg hover:shadow-lg transition duration-300">
              <p className="text-lg font-semibold text-gray-800">Location:</p>
              <p className="text-gray-600">{hotel.location}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg hover:shadow-lg transition duration-300">
              <p className="text-lg font-semibold text-gray-800">Distance from center:</p>
              <p className="text-gray-600">{hotel.distance}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg hover:shadow-lg transition duration-300">
              <p className="text-lg font-semibold text-gray-800">Sustainability:</p>
              <p className="text-gray-600">{hotel.sustainability}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg hover:shadow-lg transition duration-300">
              <p className="text-lg font-semibold text-gray-800">Property Features:</p>
              <p className="text-gray-600">{hotel.propertyFeatures}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg hover:shadow-lg transition duration-300">
              <p className="text-lg font-semibold text-gray-800">Room Type:</p>
              <p className="text-gray-600">{hotel.roomType}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg hover:shadow-lg transition duration-300">
              <p className="text-lg font-semibold text-gray-800">Original Price:</p>
              <p className="text-gray-600">{hotel.originalPrice}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg hover:shadow-lg transition duration-300">
              <p className="text-lg font-semibold text-gray-800">Current Price:</p>
              <p className="text-gray-600">{hotel.currentPrice}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg hover:shadow-lg transition duration-300">
              <p className="text-lg font-semibold text-gray-800">Taxes and Charges:</p>
              <p className="text-gray-600">{hotel.taxesAndCharges}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg hover:shadow-lg transition duration-300">
              <p className="text-lg font-semibold text-gray-800">Prepayment:</p>
              <p className="text-gray-600">{hotel.prepayment}</p>
            </div>
          </div>
          <div>
            <Button className="mt-4 block border bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleHotelBooking}>Book Now!</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelPage;
