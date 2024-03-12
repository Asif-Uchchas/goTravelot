"use client";
import React from "react";
import "swiper/css";
import ResponsiveComponentSwitcher from "./ResponsiveComponentSwitcher";
import { hotelInfo } from "@/app/pages/search/components/hotels";
import Link from "next/link";

const TopHotels = () => {
  const hotels = hotelInfo.filter((hotel) => hotel.rating >= 8);

  return (
    <div className="w-screen items-center justify-center p-10" id="hotels">
      <div className="pt-5">
        <p className="text-2xl font-semibold md:text-3xl lg:text-4xl">
          Top Hotels
        </p>
        <p className="text-lg md:text-lg lg:text-xl">
          Top rated hotels for travellers
        </p>
      </div>

      <div className="flex space-x-4 w-full overflow-x-scroll overflow-hidden">
        {hotels.map((hotel) => (
          <div
            key={hotel.id}
            className="relative w-80 space-y-2 shrink-0 cursor-pointer"
          >
            <Link href={`pages/hotels/${hotel.id}`}>
              <img
                className="w-full h-48 object-cover rounded-lg"
                src={hotel.image}
                alt={hotel.name}
              />

              <div className="flex text-gray-700 mt-2 justify-between">
                <div>
                  <p className="font-medium mr-3">{hotel.name}</p>
                </div>
                <div className=" flex justify-start">
                  <span className="text-sm bg-[#E9B208] rounded-full px-3 py-1 text-white h-7">
                    {hotel.rating}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopHotels;
