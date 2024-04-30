"use client";
import Link from "next/link";
import logo from "@/assets/leologo - Copy.jpg";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { CircleUser, CircleUserRound } from "lucide-react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function MenuForPc() {
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

  return (
    <>
      <div className="mx-2 md:hidden font-bold text-lg cursor-pointer flex items-center">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <Image src={logo} alt="Logo" width={40} />
          <h1 className="">QRToMenu</h1>
        </Link>
      </div>
      {!isLoggedIn && (
        <div className="">
          <Link href={"/login"}>
            <Button variant="" className="mx-2">
              Join US
            </Button>
          </Link>
        </div>
      )}
      {isLoggedIn && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUser className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href={"/dashboard/profile"}>Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link
                href={"/"}
                onClick={() => {
                  localStorage.removeItem("restaurantToken");
                  window.dispatchEvent(new Event("storage"));
                }}
              >
                Logout
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </>
  );
}
