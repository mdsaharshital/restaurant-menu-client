import { Menu } from "lucide-react";
import Link from "next/link";
import logo from "@/assets/leologo - Copy.jpg";
import Image from "next/image";
import { Button } from "../ui/button";
import ToggleMenu from "./ToggleMenu";

const Navbar = () => {
  return (
    <header className="w-full bg-white fixed top-0 left-0 right-0 shadow-md z-20  ">
      <nav
        className={`py-4 px-4 container sticky top-0 right-0 left-0 bg-white
        }`}
      >
        <div className="flex items-center justify-between">
          <div className=" font-bold text-lg cursor-pointer flex items-center">
            <Image src={logo} alt="Logo" width={40} />
            QR To Menu
          </div>

          {/* for larger device */}
          <div className="lg:flex items-center gap-3 hidden text-body">
            <Link
              offset={-100}
              href="/"
              className="block text-primary hover:text-gray-400 py-2 px-4 cursor-pointer"
            >
              Home
            </Link>
            <Link
              offset={-100}
              href="/restaurants"
              className="block hover:text-gray-400 py-2 px-4 cursor-pointer"
            >
              Restaurants
            </Link>
            <Link
              offset={-100}
              href="/aboutus"
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
          <ToggleMenu />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
