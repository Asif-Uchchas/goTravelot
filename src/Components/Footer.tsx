import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="flex flex-col mt-5 bg-[#4D90AB]">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10 ">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="/logo.svg"
            alt="logo"
            width={200}
            height={200}
            className="object-contain"
          />
          <p className="text-base text-white">
            goTravelot 2024<br />
            All rights reserved &copy;
          </p>
        </div>
        {/* links */}
      </div>
      <div className="flex justify-between items-center flex-wrap 
        mt-10 sm:px-16 px-6 py-10">
        <p className=" text-white">@2024 goTravelot. All Rights Reserved</p>
        <div className="footer__copyrights-link">
          <Link href="/" className="text-white">
          Terms of use 
          </Link>
          <Link href="/" className="text-white">
          Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
