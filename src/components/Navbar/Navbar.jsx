import { CircleUser, Menu, Package2, Search } from "lucide-react";
import Link from "next/link";
import logo from "@/assets/leologo - Copy.jpg";
import Image from "next/image";
import { Button } from "../ui/button";
import ToggleMenu from "./ToggleMenu";
import MenuForPc from "./MenuForPc";
import { Input } from "../ui/input";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const links = [
    { href: "/", text: "Home" },
    { href: "/restaurants", text: "Restaurants" },
    { href: "/aboutus", text: "About Us" },
  ];
  return (
    // <header className="w-full bg-white fixed top-0 left-0 right-0 shadow-md z-20  ">
    //   <nav
    //     className={`py-4 px-4 container sticky top-0 right-0 left-0 bg-white
    //     }`}
    //   >
    //     <div className="flex items-center justify-between">
    //       <div className=" font-bold text-lg cursor-pointer flex items-center">
    //         <Image src={logo} alt="Logo" width={40} />
    //         QR To Menu
    //       </div>

    //       {/* for larger device */}
    //       <div className="lg:flex items-center gap-3 hidden text-body">
    //         <Link
    //           offset={-100}
    //           href="/"
    //           className="block text-primary hover:text-gray-400 py-2 px-4 cursor-pointer"
    //         >
    //           Home
    //         </Link>
    //         <Link
    //           offset={-100}
    //           href="/restaurants"
    //           className="block hover:text-gray-400 py-2 px-4 cursor-pointer"
    //         >
    //           Restaurants
    //         </Link>
    //         <Link
    //           offset={-100}
    //           href="/aboutus"
    //           className="block  hover:text-gray-400 py-2 px-4 cursor-pointer"
    //         >
    //           About Us
    //         </Link>
    //       </div>

    //       {/* Login btn */}
    //       <MenuForPc />
    //       <ToggleMenu />
    //     </div>
    //   </nav>
    // </header>
    <div
      className="sticky  top-0  
    gap-4 border-b bg-background "
    >
      <header className="flex h-16 items-center container px-4 md:px-6 z-20">
        <nav
          className="hidden  md:flex-grow-2 flex-col gap-6 text-lg font-medium md:flex md:flex-row
        md:items-center md:gap-5 md:text-sm  lg:gap-6"
        >
          <div className=" font-bold text-lg cursor-pointer flex items-center">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-semibold md:text-base"
            >
              <Image src={logo} alt="Logo" width={40} />
              <h1 className="">QRToMenu</h1>
            </Link>
          </div>
          {links.map((link, index) => (
            <Link
              className="text-muted-foreground transition-colors hover:text-foreground"
              key={index}
              href={link.href}
            >
              {link.text}
            </Link>
          ))}
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <div className="w-fit">
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                {/* */}
              </Button>
              <span className="sr-only">Toggle navigation menu</span>
            </div>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <div className=" font-bold text-lg cursor-pointer flex items-center">
                  <Link
                    href="/"
                    className="flex items-center gap-2 text-lg font-semibold md:text-base"
                  >
                    <Image src={logo} alt="Logo" width={40} />
                    <h1 className="">QRToMenu</h1>
                  </Link>
                </div>
                <span className="sr-only">QRTOMENU</span>
              </Link>
              {links.map((link, index) => (
                <Link
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  key={index}
                  href={link.href}
                >
                  {link.text}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex justify-between w-full md:w-fit items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <MenuForPc />
        </div>
      </header>
    </div>
  );
};

export default Navbar;
