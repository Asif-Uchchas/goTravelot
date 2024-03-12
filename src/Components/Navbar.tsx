"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CustomButton from "./CustomButton";
import DropdownButton from "./DropdownButton";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Button, buttonVariants } from "./ui/button";
import UserAccountNav from "./UserAccountNav";

const Navbar = () => {
  const [isScrollable, setIsScrollable] = useState(false);

  return (
    <header className="w-full fixed top-0 z-10 bg-gradient-to-b from-amber-300 from-25%">
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
          <ul style={{ color: "#1f2937" }} className="hidden md:flex">
            <Link href="/">
              <CustomButton title="Home" containerStyles="nav-button" />
            </Link>
            <Link href="/#offers">
              <CustomButton title="Offers" containerStyles="nav-button" />
            </Link>
            <Link href="/#hotels">
              <CustomButton title="Hotels" containerStyles="nav-button" />
            </Link>
            <Link href="/#places">
              <CustomButton title="Places" containerStyles="nav-button" />
            </Link>
            <Link href="/contact">
              <CustomButton title="Contact" containerStyles="nav-button" />
            </Link>
            <Link href="/faq">
              <CustomButton title="FAQ" containerStyles="nav-button" />
            </Link>
            <Link href="/pages">
              <CustomButton title="Login" containerStyles="nav-button" />
            </Link>
            <DropdownButton />
          </ul>
          
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
