"use client "
import LocationSetter from '@/Components/LocationSetter'
import React from 'react'

function Main() {
  return (
    <div className="w-screen  items-center justify-center ">    
    <div className="flex justify-center items-center bg-slate-400 rounded-md">
    <div className="overflow-hidden w-screen h-60 rounded-md relative">
      <img
        className="object-cover w-screen h-screen rounded-md"
        src="../rec.jpg"
        alt="Partial Image"
      />
        
    </div>
    
    
  </div>
  <div className=" flex items-center justify-center ">
          <LocationSetter/>
    </div>
    
  </div>
  )
}

export default Main