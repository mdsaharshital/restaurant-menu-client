import axios from "axios";

const baseURL = "http://localhost:5000";

export const adminLogin = async (data) => {
  try {
    // Make the POST request
    const response = await axios.post(
      baseURL + "/api/auth/admin/adminlogin",
      data
    );

    // Store the token in localStorage
    localStorage.setItem("adminToken", response.data.token);
    window.dispatchEvent(new Event("storage"));

    return { success: true, message: "Admin login successful" };
  } catch (error) {
    // Handle error
    console.error("Error:", error);
    return { success: false, message: "Admin login failed" };
  }
};

/////////////////////////////////////
// ----------------------- RESTAURANT -----------------------------------------
/////////////////////////////////////
export const createRestaurant = async (data) => {
  try {
    const response = await axios.post(`${baseURL}/api/auth/restaurants`, data);
    const { token } = response.data;

    // Store the token in localStorage
    localStorage.setItem("restaurantToken", token);
    window.dispatchEvent(new Event("storage"));

    return { success: true, message: "Restaurant created successfully" };
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      console.error("Error status:", error.response.status);
      console.error("Error data:", error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      console.error("No response received:", error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error:", error.message);
    }

    return { success: false, message: "Failed to create restaurant" };
  }
};

export const restaurantLogin = async (data) => {
  try {
    const response = await fetch(`${baseURL}/api/auth/restaurants/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const responseData = await response.json();
    const { token } = responseData;

    // Store the token in localStorage
    localStorage.setItem("restaurantToken", token);

    window.dispatchEvent(new Event("storage"));

    return { success: true, message: "Restaurant login successful" };
  } catch (error) {
    console.error("Error:", error.message);
    return { success: false, message: "Failed to login" };
  }
};
