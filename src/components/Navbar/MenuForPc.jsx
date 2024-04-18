"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { CircleUserRound } from "lucide-react";

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
      <div className="lg:flex items-center gap-1 hidden">
        {!isLoggedIn && (
          <>
            <Link href={"/login"}>
              <Button variant="outline" className="">
                Login
              </Button>
            </Link>
            <Link href={"/signup"}>
              <Button>Register</Button>
            </Link>
          </>
        )}
        {isLoggedIn && ( // Conditionally render profile icon
          <>
            <Link href={"/profile"}>
              <Button variant="outline">
                <CircleUserRound />
              </Button>
            </Link>
            <Link
              href={"/"}
              onClick={() => {
                localStorage.removeItem("restaurantToken");
                window.dispatchEvent(new Event("storage"));
              }}
            >
              <Button variant="destructive">Logout</Button>
            </Link>
          </>
        )}
      </div>
    </>
  );
}
