import axios from "axios";

const API_URL = "http://localhost:3001/";

export const createUser = async (userData) => {
  try {
    console.log(userData)
    const response = await axios.post(`${API_URL}user/createUser`, userData);
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

export const createDoctor = async (doctorData) => {
  try {
    const response = await axios.post(
      `${API_URL}doctor/createDoctor`,
      doctorData
    );
    return response.data;
  } catch (error) {
    console.error("Error creating doctor:", error);
    throw error;
  }
};

export default { createDoctor, createUser };
