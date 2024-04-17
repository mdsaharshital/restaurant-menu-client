import axios from "axios";
const baseURL = "http://localhost:5000";
// Get all restaurants
export const getAllRestaurants = async () => {
  try {
    const response = await axios.get(`${baseURL}/api/restaurants`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Get restaurant by username
export const getRestaurantByUsername = async (username) => {
  try {
    const response = await axios.get(`${baseURL}/api/restaurants/${username}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Get unique categories for a restaurant
export const getRestaurantCategories = async (username) => {
  try {
    const response = await axios.get(
      `${baseURL}/api/restaurants/${username}/categories`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Add a new menu item to a restaurant's menu
export const addMenuItemToRestaurantMenu = async (username, data) => {
  try {
    const response = await axios.post(
      `${baseURL}/api/restaurants/${username}/menu`,
      data
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Update an existing menu item in a restaurant's menu
export const updateMenuItemInRestaurantMenu = async (
  restaurantId,
  menuItemId,
  data
) => {
  try {
    const response = await axios.put(
      `${baseURL}/api/restaurants/${restaurantId}/menu/${menuItemId}`,
      data
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Update restaurant status by admin
export const updateRestaurantStatus = async (restaurantId, status) => {
  try {
    const response = await axios.put(
      `${baseURL}/api/restaurants/status/${restaurantId}`,
      { status }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Delete a restaurant
export const deleteRestaurant = async (restaurantId) => {
  try {
    const response = await axios.delete(
      `${baseURL}/api/restaurants/${restaurantId}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
