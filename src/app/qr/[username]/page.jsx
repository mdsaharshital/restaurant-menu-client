import React from "react";
import {
  getRestaurantByUsername,
  getRestaurantCategories,
} from "../../../../fetcher/getRestaurant";
import OnlyMenu from "@/components/RestaurantMenu/RestaurantMenu";

export default async function SingleRestaurant({ params }) {
  const username = params.username;
  const data = await getRestaurantByUsername(username);
  const categories = await getRestaurantCategories(username);
  return (
    <div className="container py-10">
      <div className="mx-auto">
        {/* Restaurant Credentials */}
        <div className="p-6 mb-6 text-center md:text-start">
          <h1 className="text-3xl font-semibold mb-4">{data.name}</h1>
          <p className="text-gray-600 mb-2">Location: {data.location}</p>
          <p className="text-gray-600 mb-2">Username: {data.username}</p>
          <hr className="my-4" />
          <OnlyMenu menu={data.menu} categories={categories} />
        </div>
      </div>
    </div>
  );
}
