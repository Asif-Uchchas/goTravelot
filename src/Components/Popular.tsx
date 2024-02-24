"use client"
import React from 'react'


const Popular = () => {
    const imagesTop = [
        { src: 'rec.jpg', alt: 'Image 1', link: '' },
        { src: 'rec.jpg', alt: 'Image 2', link: '' },
      ];
    
      const imagesBottom = [
        { src: 'rec.jpg', alt: 'Image 3', link: '' },
        { src: 'rec.jpg', alt: 'Image 4', link: '' },
        { src: 'rec.jpg', alt: 'Image 5', link: '' },
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
                    <a href={image.link}>   
                        <img src={image.src} alt={image.alt} className="w-full rounded-md " />
                        <div  className="absolute  left-10 top-0 h-16 w-24 flex items-center justify-center font-semibold">
                            <p className=" text-white text-sm md:text-lg lg:text-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] 	">Yelinberg</p>
                        </div>
                    </a> 
                </div>
            ))}

      </div>

      <div className="flex mt-4">
      {imagesBottom.map((image) => (
        <div key={image.alt} className="relative  mr-4 ">
            <a href={image.link}>
                <img src={image.src} alt={image.alt} className="w-full h-full object-cover rounded-md" />
                
                    <div  className="absolute left-10 top-0 h-16 w-24  flex items-center justify-center font-semibold ">
                        <p className=" text-white text-sm md:text-lg lg:text-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Yelinberg</p>
                    </div>
          </a>
        </div>
      ))}
      </div>
    </div>
        
     </div>
      
    </div>
  )
}

export default Popular
