"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { verifySessionToken } from "../../../fetcher/getRestaurant";

export default function NavLinks({ links }) {
  const [session, setSession] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const ses = await verifySessionToken();
        setSession(ses);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSession();
  }, []);

  return (
    <>
      {links.map((link, index) => (
        <React.Fragment key={index}>
          {(link.text !== "Dashboard" || session?.user?.id) && (
            <Link
              className={`link transition-colors hover:text-foreground ${
                pathname === link.href
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`}
              href={link.href}
            >
              {link.text}
            </Link>
          )}
        </React.Fragment>
      ))}
    </>
  );
}
