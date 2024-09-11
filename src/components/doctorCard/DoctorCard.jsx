import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DoctorCard = () => {
  return (
    <div className="flex flex-col items-center max-w-[18rem] rounded overflow-hidden bg-[#D6EFF8] shadow-lg">
      <img
        className="w-30 h-32 object-cover rounded-full"
        src="src\assets\images\derekShepperd.png"
        alt="Dr. Derek Shepperd"
      />
      <div className="flex flex-col items-start px-4 py-4 w-full">
        <div className="font-bold text-md mb-1">Dr. Derek Shepperd</div>
        <p className="text-gray-700 text-sm">Orthopedic</p>
        <p className="text-gray-700 text-sm">$60/session</p>
        <div className="pt-2">
          <span className="inline-block bg-blue-300 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 cursor-pointer">
            <FontAwesomeIcon
              icon="fa-solid fa-calendar"
              style={{ color: "#000000" }}
              size="lg"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
