import React from "react";
import axios from "axios";

const ListConsultationLink = () => {
  const callApi = async () => {
    try {
      const response = await axios.get("http://localhost:3001/doctor/getAll");
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  return (
    <>
      <div className="startConsultationContainer grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center gap-8 lg:gap-0 py-10 lg:py-0">
        <div className="imageRoundBackground w-[350px] h-[350px] rounded-full bg-gradient-to-r from-blue-500 to-blue-300 flex items-center justify-center">
          <img
            src="src/assets/images/startConsultation.png"
            className="w-[340px] h-[340px] object-contain"
          />
        </div>
        <div className="messageStartLink flex flex-col justify-evenly items-center h-[90vh] w-[90%] lg:w-[80%] text-start lg:text-start">
          <h1 className="text-[1.8rem] text-blue-800 font-bold">
            Start an online chat consultation with a doctor
          </h1>
          <p className="text-[1rem] font-light">
            Post unlimited follow-up to the doctor for the next 50 or 100 hours
            by picking one of our chat services. Easily accessible via our
            comprehensive Online consultation app available both in Android and
            iOS
          </p>
          <button
            onClick={callApi}
            className="checckDoctorList bg-blue-700 text-white font-semibold py-4 px-7 rounded-full"
          >
            Check our List
          </button>
        </div>
      </div>
    </>
  );
};

export default ListConsultationLink;
