"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavLinks({ links }) {
  const pathname = usePathname();
  return (
    <>
      {links.map((link, index) => (
        <Link
          key={index}
          className={`link transition-colors hover:text-foreground ${
            pathname === link.href ? "text-foreground" : "text-muted-foreground"
          }`}
          href={link.href}
        >
          {link.text}
        </Link>
      ))}
    </>
  );
}
