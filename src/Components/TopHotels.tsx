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
        <p className="text-2xl font-semibold md:text-3xl lg:text-4xl">Top Hotels</p>
        <p className="text-lg md:text-lg lg:text-xl">Top rated hotels for travellers</p>
      </div>

      <div className="flex space-x-4 w-full py-5 overflow-x-scroll">
        {hotels.map((hotel) => (
          <div
            key={hotel.id}
            className="relative space-y-1 shrink-0 cursor-pointer justify content"
          >
            <Link href={`pages/hotels/${hotel.id}`}
              className="block relative">
              <img
                className="w-80 h-72 object-cover rounded-lg pb-2"
                src={hotel.image}
                alt={hotel.name}
              />

              {/* Updated positioning and styles for hotel name */}
              <ResponsiveComponentSwitcher
                desktopComponent={
                  <div className="absolute bottom-0 left-0 w-full">
                    <div className="bg-black bg-opacity-50">
                      <p className="text-white text-sm md:text-lg lg:text-xl p-2 truncate">
                        {hotel.name}
                      </p>
                    </div>
                  </div>
                }
                mobileComponent={
                  <div className="absolute bottom-0 left-0 w-full">
                    <div className="bg-black bg-opacity-50">
                      <p className="text-white text-sm md:text-lg lg:text-xl p-2 truncate">
                        {hotel.name}
                      </p>
                    </div>
                  </div>
                }
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopHotels;
