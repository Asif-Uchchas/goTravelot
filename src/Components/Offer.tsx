"use client"
import React from 'react'
import Image from 'next/image'
import LocationSetter from './LocationSetter'

const Offer = () => {
  return (
    <div id='offers' className="w-screen h-auto  items-center justify-center p-10 " >    
      <div className=" flex relative flex-col  space-y-4">
        <p className=" text-2xl font-semibold md:text-3xl lg:text-4xl">
            Offers
        </p>
        <p className=" text-lg md:text-lg lg:text-xl pb-4 ">
            Promotions, deals, and special offers for you
        </p>
      </div>
      <div className="flex justify-center items-center bg-slate-400 rounded-md">
      <div className="overflow-hidden w-100 h-60 rounded-md relative">
        <img
          className="object-cover w-screen h-screen rounded-md"
          src="rec.jpg"
          alt="Partial Image"
        />
        <div  className="absolute  left-0 top-0 h-full w-full  font-semibold flex flex-col space-y-4 justify-center bg-gradient-to-r from-black to-transparent bg-opacity-20">
          

          <p className="text-[#E7FCFD] text-md font-bold md:text-xl lg:text-2xl shadow-sm drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ml-4">
                The best place to find the best travel deals
              </p>
          <p className=" text-white text-sm md:text-lg lg:text-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ml-4	">Yelinberg</p>
          <button className="bg-sky-900 text-white p-4 rounded-md hover:bg-sky-950 shadow-md w-24 ml-4">Go to</button>
                            
        </div>
        
          
      </div>
    </div>
      
    </div>
  )
}

export default Offer
