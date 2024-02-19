"use client"
import React from 'react'
import Image from 'next/image'
import LocationSetter from './LocationSetter'

const Offer = () => {
  return (
    <div className="w-screen  items-center justify-center p-10 ">    
      <div className=" flex relative flex-col  space-y-4">
        <p className=" text-2xl font-semibold md:text-3xl lg:text-4xl">
            Offers
        </p>
        <p className=" text-lg md:text-lg lg:text-xl">
            Promotions, deals, and special offers for you
        </p>
      </div>
     <div className=" flex relative flex-col  space-y-4 ">
        <div className=" bg-slate-900 rounded-md  " >
            <img className="object-scale-down h-30 w-60 rounded-md  " src="rec.jpg" alt="image description"/>
        </div>
     </div>
      
    </div>
  )
}

export default Offer
