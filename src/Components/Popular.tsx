"use client"
import React from 'react'
import { hotelInfo } from '@/app/pages/search/components/hotels'
import Link from 'next/link'
import Image from 'next/image'

const Popular = () => {

  const Dhaka = hotelInfo[0].placeImg
  const Mumbai = hotelInfo[34].placeImg
  const NewYork = hotelInfo[22].placeImg
  const Hawaii = hotelInfo[64].placeImg
  const Paris = hotelInfo[55].placeImg


    const imagesTop = [
        { src: Dhaka, alt: 'Dhaka'},
        { src: NewYork, alt: 'New York'},
      ];

      const imagesBottom = [
        { src: Mumbai, alt: 'Mumbai'},
        { src: Paris, alt: 'Paris'},
        { src: Hawaii, alt: 'Hawaii'},
      ];


  return (
    <div id='places' className="w-screen  items-center justify-center p-10 ">
      <div className=" flex relative flex-col  space-y-4">
        <p className=" text-2xl font-semibold md:text-3xl lg:text-4xl">
            Popular Destinations
        </p>
        <p className=" text-lg md:text-lg lg:text-xl">
        Most popular choices for travelers
        </p>

      </div>
     <div className=" flex relative flex-col  space-y-4">
     <div className="flex flex-col items-center justify-center">
      <div className="flex">
            {imagesTop.map((image) => (
                <div key={image.alt} className="relative mt-4 mr-4">
                    <Link href={`pages/search`}>
                  <img src={image.src} alt={image.alt} className={`rounded-md ${image.alt === "Dhaka" ? "w-[870px]  h-[450px]" : "w-[1000px]  h-[450px]"} `} />
                        <div  className="absolute  left-10 top-0 h-16 w-24 flex items-center justify-center font-semibold">
                            <p className=" text-white text-sm md:text-lg lg:text-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] 	">{image.alt}</p>
                        </div>
                        </Link>
                </div>
            ))}

      </div>

      <div className="flex mt-4">
      {imagesBottom.map((image) => (
        <div key={image.alt} className="relative  mr-4 ">
            <Link href={`pages/search`}>
                <img src={image.src} alt={image.alt} className="w-full h-full object-cover rounded-md" />

                    <div  className="absolute left-10 top-0 h-16 w-24  flex items-center justify-center font-semibold ">
                        <p className=" text-white text-sm md:text-lg lg:text-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">{image.alt}</p>
                    </div>
          </Link>
        </div>
      ))}
      </div>
    </div>

     </div>

    </div>
  )
}

export default Popular

// "use client";
// import React from "react";
// import { hotelInfo } from "@/app/pages/search/components/hotels";
// import Link from "next/link";

// const Popular = () => {
//   const Dhaka = hotelInfo[0].placeImg;
//   const Mumbai = hotelInfo[34].placeImg;
//   const NewYork = hotelInfo[22].placeImg;
//   const Hawaii = hotelInfo[64].placeImg;
//   const Paris = hotelInfo[55].placeImg;

//   const imagesTop = [
//     { src: Dhaka, alt: "Dhaka" },
//     { src: NewYork, alt: "New York" },
//   ];

//   const imagesBottom = [
//     { src: Mumbai, alt: "Mumbai" },
//     { src: Paris, alt: "Paris" },
//     { src: Hawaii, alt: "Hawaii" },
//   ];

//   return (
//     <div
//       id="places"
//       className="w-screen flex flex-col justify-center p-10"
//     >
//       <div className=" flex relative flex-col  space-y-4">
//         <p className=" text-2xl font-semibold md:text-3xl lg:text-4xl">
//           Popular Destinations
//         </p>
//         <p className=" text-lg md:text-lg lg:text-xl">
//           Most popular choices for travelers
//         </p>
//       </div>

//       <div className="flex flex-col md:flex-row md:justify-center space-y-4 md:space-x-4 md:space-y-0">
//         <div className="flex flex-wrap justify-center md:justify-start w-full md:w-auto space-y-4 md:space-y-0 md:space-x-4">
//           {imagesTop.map((image) => (
//             <div key={image.alt} className="relative w-64 h-64 md:w-64 md:h-64">
//               <Link href="/pages/search">
//                 <img
//                   src={image.src}
//                   alt={image.alt}
//                   className="w-full h-full rounded-md"
//                 />
//                 <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-70 rounded-md">
//                   <p className="text-white text-lg md:text-xl lg:text-2xl font-semibold">
//                     {image.alt}
//                   </p>
//                 </div>
//               </Link>
//             </div>
//           ))}
//         </div>

//         <div className="flex flex-wrap justify-center md:justify-start w-full md:w-auto space-y-4 md:space-y-0 md:space-x-4">
//           {imagesBottom.map((image) => (
//             <div key={image.alt} className="relative w-64 h-64 md:w-64 md:h-64">
//               <Link href="/pages/search">
//                 <img
//                   src={image.src}
//                   alt={image.alt}
//                   className="w-full h-full rounded-md"
//                 />
//                 <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-70 rounded-md">
//                   <p className="text-white text-lg md:text-xl lg:text-2xl font-semibold">
//                     {image.alt}
//                   </p>
//                 </div>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Popular;
