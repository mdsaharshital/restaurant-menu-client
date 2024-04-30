import { Menu } from "lucide-react";
import Link from "next/link";
import logo from "@/assets/leologo - Copy.jpg";
import Image from "next/image";
import { Button } from "../ui/button";
import MenuForPc from "./MenuForPc";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const links = [
    { href: "/", text: "Home" },
    { href: "/restaurants", text: "Restaurants" },
    { href: "/aboutus", text: "About Us" },
    { href: "/dashboard/profile", text: "Dashboard" },
  ];
  return (
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
          <NavLinks links={links} />
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
