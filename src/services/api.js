import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
});

export const submitContact = async (formData) => {
  try {
    const response = await API.post("/contacts", formData);
    return response.data;
  } catch (error) {
    throw error.response?.data?.error || "Failed to send message";
  }
};

export default API;
