// "use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CustomButton from "./CustomButton";
import DropdownButton from "./DropdownButton";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { Button, buttonVariants } from "./ui/button";
import { signOut } from "next-auth/react";
import UserAccountNav from "./UserAccountNav";

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  // const [nav, setNav] = useState(false);
  // const handleNav = () => {
  //   setNav(!nav);
  // };

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
            {/* <Link href="/sign-in">
              <CustomButton title="Sign In" containerStyles="nav-button" />
            </Link> */}
            {session?.user ? (
               <UserAccountNav />
            ):(
              <Link className={buttonVariants()} href="/sign-in">
                Sign In
              </Link>
            )}

            <DropdownButton />
          </ul>
          {/* <div className="md:hidden">
          <div onClick={handleNav}>
            <AiOutlineMenu size={25} />
          </div>
        </div> */}
        </div>

          {/* <div className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : "hidden"}>
          <div
            className={
              nav
                ? "fixed left-0 top-0 w-[65%] sm:w-[50%] md:w-[40%] h-screen bg-[#ecf0f3] p-10 ease-in duration-400"
                : "fixed left-[-1000%] top-0 p-10 ease-in duration-500"
            }
          >
            <div>
              <div className="flex w-full items-center justify-between">
                <Link href="/">
                  <Image src="/logo.svg" alt="logo" width={200} height={200} />
                </Link>
                <div
                  onClick={handleNav}
                  className=" rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                >
                  <AiOutlineClose />
                </div>
              </div>
              <div className=" border-b border-gray-300 my-4 ">
                <p className="w-[85%] md:w-[90%] py-4">
                  Find the best hotels and places to visit with us.
                </p>
              </div>
            </div>
            <div className="py-4 flex flex-col">
              <ul className="uppercase">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  <Link href="/">
                    <CustomButton title="Home" textStyles="uppercase" />
                  </Link>
                </li>
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  <Link href="/#hotels">
                    <CustomButton title="Hotels" textStyles="uppercase" />
                  </Link>
                </li>
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  <Link href="/#places">
                    <CustomButton title="Places" textStyles="uppercase" />
                  </Link>
                </li>
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  <Link href="/contact">
                    <CustomButton title="Contact" textStyles="uppercase" />
                  </Link>
                </li>
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  <Link href="/faq">
                    <CustomButton title="FAQ" textStyles="uppercase" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
      </nav>
    </header>
  );
};

export default Navbar;
