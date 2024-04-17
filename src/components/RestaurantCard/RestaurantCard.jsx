import Image from "next/image";
import React from "react";
import logo from "@/assets/logooo.jpg";

const RestaurantCard = ({ restaurant }) => {
  return (
    <div
      className="max-w-xs md:max-w-sm card-glow overflow-hidden
     shadow-lg flex justify-end px-6 py-4 items-center rounded-md"
    >
      <Image
        className="rounded-full"
        width={60}
        src={logo}
        alt={restaurant?.name}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{restaurant?.name}</div>
        <p className="text-gray-700 text-base">{restaurant?.location}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
