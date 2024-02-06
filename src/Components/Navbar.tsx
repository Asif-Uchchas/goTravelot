import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CustomButton from './CustomButton'

const Navbar = () => {
  return (
      <header className='w-full absolute z-10'>
          <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
              <Link href="/" className="flex justify-center items-center">
                  <Image
                      src="/logo.svg"
                      alt="logo"
                      width={50}
                      height={50}
                      className="object-contain"
                  />
              </Link>
              <CustomButton
                  title="Sign In"
                  btnType = "button"
                containerStyles="text-white rounded-full bg-[#89CFF0] min-w-[130px]"
              />
              <CustomButton
                  title="Sign Up"
                  btnType = "button"
                containerStyles="text-white rounded-full bg-[#89CFF0] min-w-[130px]"
              />
              <CustomButton
                  title="Log In"
                  btnType = "button"
                containerStyles="text-white rounded-full bg-[#89CFF0] min-w-[130px]"
              />
        </nav>
    </header>
  )
}

export default Navbar
