"use client";
import React, { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="text-center text-5xl  min-h-[80vh]">
      <h1>Something went wrong!!</h1>
      <h1>Try Again</h1>
    </div>
  );
}
