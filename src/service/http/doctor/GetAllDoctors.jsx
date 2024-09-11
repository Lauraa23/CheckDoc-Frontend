import axios from "axios";

const GetAllDoctors = async () => {
  try {
    const response = await axios.get("http://localhost:3001/doctor/getAll");
    return response.data; 
  } catch (error) {
    console.error("Error fetching doctors: ", error);
    throw error;
  }
};

export default GetAllDoctors;
