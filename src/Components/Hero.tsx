"use client"
import React from 'react'
import ImageCarousel from './ImageCarousel'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="w-screen  items-center justify-center">    
      <div className="flex-1 ">
         <Image
            src="/rec.jpg"
            alt="Hero Image"
            layout="responsive"
            width={2000}
            height={300}
            objectPosition="top"  
          />
    
        <h1 className="text-4xl font-bold text-black">Welcome to goTravelot</h1>
        <p className="text-black text-lg">The best place to find the best travel deals</p>
      </div>
    </div>
  )
}

export default Hero
