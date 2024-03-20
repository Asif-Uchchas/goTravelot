"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import CustomButton from "./CustomButton";
import DropdownButton from "./DropdownButton";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Button, buttonVariants } from "./ui/button";
import UserAccountNav from "./UserAccountNav";
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { MdOutlineHotel } from "react-icons/md";
import { MdOutlinePlace } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/Components/ui/avatar"


const Navbar = () => {
  return (
    <header className="w-full fixed top-0 z-10 bg-gradient-to-b from-amber-300 from-65%">
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
        <div className="">
          <ul style={{ color: "#1f2937" }} className="hidden md:flex items-center">
            <Link href="/" className="nav-link px-4" title="Home">
              <AiOutlineHome size={38} className="text-[#2C5768] hover:text-[#3c7a93] transition duration-300 ease-in-out transform hover:scale-110"/>
            </Link>
            <Link href="/#offers" className="nav-link px-4" title="Offers">
              <HiOutlineSpeakerphone size={38} className="text-[#2C5768] hover:text-[#3c7a93] transition duration-300 ease-in-out transform hover:scale-110"/>
            </Link>
            <Link href="/#hotels" className="nav-link px-4" title="Hotels">
              <MdOutlineHotel size={38} className="text-[#2C5768] hover:text-[#3c7a93] transition duration-300 ease-in-out transform hover:scale-110"/>
            </Link>
            <Link href="/#places" className="nav-link px-4" title="Places">
              <MdOutlinePlace size={38} className="text-[#2C5768] hover:text-[#3c7a93] transition duration-300 ease-in-out transform hover:scale-110"/>
            </Link>
            <Link href="/contact" className="nav-link px-4" title="Contact">
              <FiPhone size={38} className="text-[#2C5768] hover:text-[#3c7a93] transition duration-300 ease-in-out transform hover:scale-110"/>
            </Link>
            <Link href="/faq" className="nav-link px-4" title="FAQ">
              <p className="text-3xl font-semibold text-[#2C5768] hover:text-[#3c7a93] transition duration-300 ease-in-out transform hover:scale-110">FAQ</p>
            </Link>
            <Link href="/auth/login" className="nav-link px-4" title="Login">
              <p className="text-3xl font-semibold text-[#2C5768] hover:text-[#3c7a93] transition duration-300 ease-in-out transform hover:scale-110">Login</p>
            </Link>
            <Link href="/pages" className="nav-link px-4" title="Avatar">
            <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            </Link>
            <DropdownButton />
          </ul>
          
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
