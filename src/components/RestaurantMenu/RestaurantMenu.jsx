"use client";
import { Playfair_Display } from "next/font/google";
import React, { useEffect, useState } from "react";
import MenuCard from "../MenuCard/MenuCard";

const playfair = Playfair_Display({ subsets: ["latin"] });
export default function OnlyMenu({ menu, categories: allCategories }) {
  const [filteredItems, setFilteredItems] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setFilteredItems(menu);
    setCategories(allCategories);
  }, [allCategories, menu]);

  return (
    <div>
      <Categories
        filteredItems={menu}
        categories={allCategories}
        setFilteredItems={setFilteredItems}
      />
      {/* Menu Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <MenuCard data={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

const Categories = ({ filteredItems: data, categories, setFilteredItems }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    // Filter menu items based on the selected category
    const filteredItems = data.filter((item) => item.category === category);
    setFilteredItems(filteredItems);
    setSelectedCategory(category);
  };

  return (
    <div className={playfair.className}>
      <h2 className="text-4xl text-center font-bold mb-2">Discover Our Menu</h2>
      {/* <h2 className="text-xl font-semibold mb-2">Categories</h2> */}
      <div className="flex flex-wrap gap-2 mb-4 justify-center py-8">
        <button
          onClick={() => {
            setFilteredItems(data);
            setSelectedCategory(null); // Reset selected category
          }}
          className={`bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded ${
            selectedCategory === null ? "bg-green-500" : ""
          }`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded ${
              selectedCategory === category ? "bg-green-500" : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};
