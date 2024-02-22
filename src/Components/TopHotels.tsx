"use client";
import React from "react";
import "swiper/css";
import ResponsiveComponentSwitcher from "./ResponsiveComponentSwitcher";

const TopHotels = () => {
  const imagesTop = [
    {
      src: "rec.jpg",
      alt: "Image 1",
      link: "",
      name: "Grand Plaza",
      rating: "*****",
    },
    {
      src: "rec.jpg",
      alt: "Image 2",
      link: "",
      name: "Grand Plaza",
      rating: "*****",
    },
    {
      src: "rec.jpg",
      alt: "Image 3",
      link: "",
      name: "Grand Plaza",
      rating: "*****",
    },
    {
      src: "rec.jpg",
      alt: "Image 4",
      link: "",
      name: "Grand Plaza",
      rating: "*****",
    },
    {
      src: "rec.jpg",
      alt: "Image 5",
      link: "",
      name: "Grand Plaza",
      rating: "*****",
    },
    {
      src: "rec.jpg",
      alt: "Image 6",
      link: "",
      name: "Grand Plaza",
      rating: "*****",
    },
  ];

  return (
    <div className="w-screen items-center justify-center p-10">
      
      <div className="pt-5">
        <p className="text-2xl font-semibold md:text-3xl lg:text-4xl">
          Top Hotels
        </p>
        <p className="text-lg md:text-lg lg:text-xl">
          Top rated hotels for travellers
        </p>
      </div>

      <div className="flex space-x-4 w-full py-5 overflow-x-scroll">
        {imagesTop.map((image) => (
          <div
            key={image.alt}
            className="relative space-y-1 shrink-0 cursor-pointer justify content "
          >
            <a href={image.link}>
              <img
                className="w-80 h-72 object-cover rounded-lg pb-2"
                src={image.src}
                alt=""
              />

              <ResponsiveComponentSwitcher
                desktopComponent={
                  <div className="absolute left-10 top-0 h-16 w-24  flex items-center justify-center font-semibold ">
                    <p className=" text-white text-sm md:text-lg lg:text-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                      Yelinberg
                    </p>
                  </div>
                }
                mobileComponent={
                  <p className=" font-bold text-black text-sm md:text-lg lg:text-xl ">
                    Yelinberg
                  </p>
                }
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopHotels;