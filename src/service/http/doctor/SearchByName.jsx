import axios from "axios";

const SearchByName = async (name) => {
  let arrayData = [];
  try {
    const response = await axios.get(
      "http://localhost:3001/doctor/searchDoctorByName",
      {
        params: { name },
      }
    );
    console.log(response.data);
    arrayData.push(response.data);
    return arrayData;
  } catch (error) {
    console.error("Error getting doctors: ", error);
    throw error;
  }
};

export default SearchByName;
