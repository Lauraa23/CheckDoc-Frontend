import axios from "axios";

const API_URL = "http://localhost:3001/";

export const loginUser = async (userData) => {
  try {
    console.log(userData)
    const response = await axios.post(`${API_URL}user/login`, userData);
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

export const loginDoctor = async (doctorData) => {
  try {
    const response = await axios.post(
      `${API_URL}doctor/login`,
      doctorData
    );
    return response.data;
  } catch (error) {
    console.error("Error creating doctor:", error);
    throw error;
  }
};

export default { loginDoctor, loginUser };
