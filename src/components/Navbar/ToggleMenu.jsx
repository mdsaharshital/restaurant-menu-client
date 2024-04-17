"use client";
import { Menu } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";

export default function ToggleMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      {/* btn for small devices */}
      <button onClick={toggleMenu} className="lg:hidden text-body text-3xl">
        {/* <HiMenu /> */}
        <Menu />
      </button>
      <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </>
  );
}

function MobileMenu({ isMenuOpen, toggleMenu }) {
  return (
    <>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-[70px] right-0 min-w-[200px] bg-white ">
          <div className="mt-4 bg-body p-4 rounded-lg text-black  lg:hidden">
            <Link
              onClick={toggleMenu}
              offset={-100}
              href="/"
              className="block hover:text-gray-400 py-2"
            >
              Home
            </Link>
            <Link
              offset={-100}
              onClick={toggleMenu}
              href="/restaurants"
              className="block hover:text-gray-400 py-2"
            >
              Restaurants
            </Link>
            <Link
              offset={-100}
              onClick={toggleMenu}
              href="/aboutus"
              className="block hover:text-gray-400 py-2"
            >
              About Us
            </Link>
          </div>
          {/* Login btn */}
          <div className="lg:hidden pb-4">
            <Link onClick={toggleMenu} href={"/login"}>
              <Button variant="outline" className="mx-2">
                Login
              </Button>
            </Link>
            <Link onClick={toggleMenu} href={"/signup"}>
              <Button>Register</Button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
