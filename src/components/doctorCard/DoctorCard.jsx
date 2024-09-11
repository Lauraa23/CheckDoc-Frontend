import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const DoctorCard = ({ doctor }) => {
  const navigate = useNavigate();

  const handleCalendarClick = () => {
    const authToken = localStorage.getItem('authToken');
    const isDoctor = localStorage.getItem('isDoctor') === 'true';

    if (isDoctor) {
      alert("Esta función no está disponible para doctores");
    } else if (authToken) {
      const doctorId = doctor.id; // Solo pasa el doctorId
      navigate(`/createAppointment?doctorId=${doctorId}`);
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="flex flex-col items-center max-w-[18rem] rounded overflow-hidden bg-[#D6EFF8] shadow-lg">
      <img
        className="w-30 h-32 object-cover rounded-full"
        src="src/assets/images/derekShepperd.png"
        alt="Dr. Derek Shepperd"
      />
      <div className="flex flex-col items-start px-4 py-4 w-full">
        <div className="font-bold text-md mb-1">{doctor.name}</div>
        <p className="text-gray-700 text-sm">{doctor.specialty}</p>
        <p className="text-gray-700 text-sm">${doctor.price}/session</p>
        <div className="pt-2">
          <span
            onClick={handleCalendarClick}
            className="inline-block bg-blue-300 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 cursor-pointer"
          >
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
