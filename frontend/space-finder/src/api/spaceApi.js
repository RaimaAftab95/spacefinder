import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Create new space
export const createSpace = async (spaceData, token) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/spaces`, spaceData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error(
      "Create space error:",
      error?.response?.data || error.message
    );
    throw error?.response?.data || { message: "Failed to create space" };
  }
};

// Get all spaces
export const getSpaces = () => axios.get(`${BASE_URL}/api/spaces`);

// Get space by ID
export const getSpaceById = (id) => axios.get(`${BASE_URL}/api/spaces/${id}`);
