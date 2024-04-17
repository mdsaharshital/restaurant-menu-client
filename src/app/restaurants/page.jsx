import RestaurantCard from "@/components/RestaurantCard/RestaurantCard";
import { getAllRestaurants } from "../../../fetcher/getRestaurant";

export default async function Restaurants() {
  const data = await getAllRestaurants();

  return (
    <div className="min-h-screen container flex justify-center">
      <div className="">
        <h1>Restaurants</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10">
          {data?.map((restaurant) => {
            return (
              <RestaurantCard key={restaurant._id} restaurant={restaurant} />
            );
          })}
          {data?.map((restaurant) => {
            return (
              <RestaurantCard key={restaurant._id} restaurant={restaurant} />
            );
          })}
          {data?.map((restaurant) => {
            return (
              <RestaurantCard key={restaurant._id} restaurant={restaurant} />
            );
          })}
          {data?.map((restaurant) => {
            return (
              <RestaurantCard key={restaurant._id} restaurant={restaurant} />
            );
          })}
          {data?.map((restaurant) => {
            return (
              <RestaurantCard key={restaurant._id} restaurant={restaurant} />
            );
          })}
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
