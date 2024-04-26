"use client";
import { CircleUserRound, Menu } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";

export default function ToggleMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    // Function to check if user is logged in
    const checkLoginStatus = () => {
      const token = localStorage.getItem("restaurantToken");
      setIsLoggedIn(!!token);
    };

    // Check login status when component mounts
    checkLoginStatus();

    // Listen for changes in local storage
    const storageChangeHandler = () => {
      checkLoginStatus();
    };
    window.addEventListener("storage", storageChangeHandler);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("storage", storageChangeHandler);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="flex items-center gap-4 lg:hidden">
      {isLoggedIn && ( // Conditionally render profile icon
        <div className="lg:hidden">
          <Link href={"/dashboard/profile"}>
            <>
              <CircleUserRound />
            </>
          </Link>
        </div>
      )}
      {/* btn for small devices */}
      <button onClick={toggleMenu} className="lg:hidden text-body text-3xl">
        {/* <HiMenu /> */}
        <Menu />
      </button>
      <MobileMenu
        isMenuOpen={isMenuOpen}
        isLoggedIn={isLoggedIn}
        toggleMenu={toggleMenu}
      />
    </div>
  );
}

function MobileMenu({ isMenuOpen, isLoggedIn, toggleMenu }) {
  return (
    <>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-[70px] right-0 min-w-[200px] bg-white shadow-lg ">
          <div className=" bg-body p-4 rounded-lg text-black  lg:hidden">
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
          {!isLoggedIn && (
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
          )}
          {isLoggedIn && (
            <div className="lg:hidden pb-4 mx-3">
              <Button variant="destructive">Logout</Button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
