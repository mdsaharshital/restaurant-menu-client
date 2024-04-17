import RestaurantCard from "@/components/RestaurantCard/RestaurantCard";
import { getAllRestaurants } from "../../../fetcher/getRestaurant";
import Link from "next/link";

export default async function Restaurants() {
  const data = await getAllRestaurants();

  return (
    <div className="min-h-screen">
      <div className="bg-slate-100 min-h-[200px] md:min-h-[300px]">
        <div
          className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 min-h-[200px]
         md:min-h-[300px] w-full container"
        >
          <h1 className="text-xl font-bold md:text-4xl ">Restaurants</h1>
          <div className="flex items-center gap-4  bg-yellow-400 px-5 py-2.5">
            <h1 className="text-gray-400 hover:text-black transition-all ease-in-out cursor-pointer">
              <Link href={"/"}>Home</Link>
            </h1>
            <h1>/</h1>
            <h1 className="cursor-not-allowed">Restaurants</h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10">
          {data?.map((restaurant) => {
            return (
              <RestaurantCard key={restaurant._id} restaurant={restaurant} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
