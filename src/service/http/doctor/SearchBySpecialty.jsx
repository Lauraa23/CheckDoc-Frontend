import axios from "axios";

const SearchBySpecialty = async (specialty) => {
  try {
    const response = await axios.get("http://localhost:3001/doctor/searchDoctorBySpecialty");
    return response.data; 
  } catch (error) {
    console.error("Error fetching doctors: ", error);
    throw error;
  }
};

export default SearchBySpecialty;
