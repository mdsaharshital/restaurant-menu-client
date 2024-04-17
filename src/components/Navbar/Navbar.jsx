"use client";
import { Menu } from "lucide-react";
import Link from "next/link";
import logo from "@/assets/leologo - Copy.jpg";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "../ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 right-0 shadow-md z-20">
      <nav
        className={`py-4 md:px-12 px-4 bg-white ${
          isSticky ? "sticky top-0 right-0 left-0 bg-white " : ""
        }`}
      >
        <div className="flex items-center justify-between">
          <div className=" font-bold text-lg cursor-pointer flex items-center">
            {/* <img src={logo} alt="" className="h-10" /> */}
            <Image src={logo} alt="Logo" width={40} />
            QR To Menu
          </div>

          {/* for larger device */}
          <div className="lg:flex items-center gap-3 hidden text-body">
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              href="/"
              className="block text-primary hover:text-gray-400 py-2 px-4 cursor-pointer"
            >
              Home
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              href="/restaurants"
              className="block hover:text-gray-400 py-2 px-4 cursor-pointer"
            >
              Restaurants
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              href="/about"
              className="block  hover:text-gray-400 py-2 px-4 cursor-pointer"
            >
              About Us
            </Link>
          </div>

          {/* Login btn */}
          <div className="lg:block hidden ">
            <Link href={"/login"}>
              <Button variant="outline" className="mx-2">
                Login
              </Button>
            </Link>
            <Link href={"/signup"}>
              <Button>Register</Button>
            </Link>
          </div>

          {/* btn for small devices */}
          <button onClick={toggleMenu} className="lg:hidden text-body text-3xl">
            {/* <HiMenu /> */}
            <Menu />
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <>
            <div className="mt-4 bg-body p-4 rounded-lg text-black lg:hidden">
              <Link
                activeClass="active"
                smooth={true}
                spy={true}
                offset={-100}
                href="/"
                className="block hover:text-gray-400 py-2"
              >
                Home
              </Link>
              <Link
                activeClass="active"
                smooth={true}
                spy={true}
                offset={-100}
                href="/restaurants"
                className="block hover:text-gray-400 py-2"
              >
                Restaurants
              </Link>
              <Link
                activeClass="active"
                smooth={true}
                spy={true}
                offset={-100}
                href="/about"
                className="block hover:text-gray-400 py-2"
              >
                About Us
              </Link>
            </div>
            {/* Login btn */}
            <div className="block lg:hidden ">
              <Link href={"/login"}>
                <Button variant="outline" className="mx-2">
                  Login
                </Button>
              </Link>
              <Link href={"/signup"}>
                <Button>Register</Button>
              </Link>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
