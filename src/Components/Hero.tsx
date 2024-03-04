"use client"
import React from 'react'
import ImageCarousel from './ImageCarousel'
import Image from 'next/image'
import LocationSetter from './LocationSetter'
import Offer from './Offer'
import Popular from './Popular'

import TopHotels from './TopHotels'
import ResponsiveComponentSwitcher from './ResponsiveComponentSwitcher'
import Popular_mobile from './Popular_mobile'
import PopularHotels from './PopularHotels'


const Hero = () => {
  return (
    <div className="w-screen  items-center justify-center ">    
      <div className=" flex items-center justify-center  relative">
          <Image
              src="/rec.jpg"
              alt="Hero Image"
              width={2000}
              height={200}
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center space-y-4">
              <p className="text-white text-2xl font-bold md:text-6xl lg:text-8xl shadow-sm drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                  <span style={{ color: "#E7FCFD" }}>Welcome to </span>
                  <span style={{ color: "#EE9B00" }}>go</span>
                  <span style={{ color: "#2C5768" }}>Travel</span>
                  <span style={{ color: "#EE9B00" }}>ot</span>
              </p>
              <p className="text-[#E7FCFD] text-md font-bold md:text-3xl lg:text-4xl shadow-sm drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                The best place to find the best travel deals
              </p>
             
              
          </div>
      
        </div>
        <div className=" flex items-center justify-center ">
          <LocationSetter searchParams={{location:""}}/>
        </div>
        <div className=" flex items-center justify-center  relative">
          <Offer/>
        </div>
        <div className=" flex items-center justify-center  relative">
          <ResponsiveComponentSwitcher desktopComponent={<Popular />} mobileComponent={<Popular_mobile />} />
        </div>
        <div className=" flex items-center justify-center  relative">
          <TopHotels/>
        </div>
      
    </div>
  )
}

export default Hero
