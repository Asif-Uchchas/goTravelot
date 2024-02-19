import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CustomButton from './CustomButton'
import DropdownButton from './DropdownButton'
import { buttonVariants } from './ui/button'

const Navbar = () => {
  return (
    <header className='w-full fixed top-0 z-10 bg-gradient-to-b from-amber-300 from-25%'>
      <nav className="max-w-[2000px] mx-auto flex justify-between sm:px-16 px-6 py-4 ">
        <Link href="/" className="flex">
          <Image
            src="/logo.svg"
            alt="logo"
            width={200}
            height={200}
            className="object-contain"
          />
        </Link>
        
        {/* Wasi- Started Working from here */}
        
        
        <div className='flex '>
           <Link className={buttonVariants()} href='/sign-in'>Sign In</Link>
           
          <DropdownButton/>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
