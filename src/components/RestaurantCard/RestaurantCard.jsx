import Image from "next/image";
import React from "react";
import logo from "@/assets/logooo.jpg";
import Link from "next/link";
import { Navigation } from "lucide-react";

const RestaurantCard = ({ restaurant }) => {
  return (
    <Link href={"/qr/" + restaurant?.username}>
      <div
        className="min-w-[320px] md:max-w-sm card-glow overflow-hidden
     shadow-lg flex justify-start px-6 py-4 items-center rounded-md cursor-pointer"
      >
        <Image
          className="rounded-full"
          width={100}
          src={logo}
          alt={restaurant?.name}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-2xl mb-2">{restaurant?.name}</div>
          <p className="text-gray-700 flex items-center gap-1 text-base">
            <Navigation size={16} />
            {restaurant?.location}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
