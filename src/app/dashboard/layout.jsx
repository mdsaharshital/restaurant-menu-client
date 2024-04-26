"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { verifySessionToken } from "../../../fetcher/getRestaurant";

export default function Layout({ children }) {
  const [session, setSession] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const session = await verifySessionToken();
        setSession(session);
        console.log(session);
      } catch (error) {
        // Handle error (e.g., redirect to login page)
        router.push("/login");
      }
    };

    fetchSession();
  }, []);
  if (!session?.user?.id) {
    return <div>loading....</div>;
  }
  return (
    <div>
      {session.user.role == "restaurant" ? (
        <div className="">{children}</div>
      ) : (
        <div>wrong path</div>
      )}
    </div>
  );
}
