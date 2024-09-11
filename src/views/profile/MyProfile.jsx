import React, { useEffect, useState } from "react";
import {
  getDoctorAppointments,
  getPatientAppointments,
} from "../../service/http/user/GetProfileInfo";

const Profile = () => {
  const [appointments, setAppointments] = useState([]);
  const userId = localStorage.getItem("id");
  const authToken = localStorage.getItem("authToken");
  const isDoctor = localStorage.getItem("isDoctor") === "true";
  const name = localStorage.getItem("name");

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        let appointmentsData = [];
        if (isDoctor) {
          appointmentsData = await getDoctorAppointments(userId, authToken);
        } else {
          appointmentsData = await getPatientAppointments(userId, authToken);
        }
        console.log("Citas obtenidas:", appointmentsData);
        setAppointments(appointmentsData);
      } catch (error) {
        console.error("Error obteniendo citas:", error);
        if (error.response) {
          console.error("Respuesta del servidor:", await error.response.text());
        }
      }
    };

    fetchAppointments();
  }, [isDoctor, userId, authToken]);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${
        isDoctor
          ? "bg-gradient-to-r from-green-500 to-green-300"
          : "bg-gradient-to-r from-cyan-500 to-blue-500"
      }`}
    >
      <div className="w-full max-w-4xl p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Welcome back, {name}!</h1>
        <h2 className="text-xl font-semibold mb-4">Your Appointments:</h2>
        {appointments.length === 0 ? (
          <p className="text-gray-500">You Don't have appointments.</p>
        ) : (
          <ul className="list-disc pl-5">
            {appointments.map((appointment) => (
              <li
                key={appointment.id}
                className="mb-2 border-b border-gray-200 pb-2"
              >
                {isDoctor
                  ? `Patient: ${appointment.patient.name}`
                  : `Doctor: ${appointment.doctor.name}`}{" "}
                - Date:{" "}
                {new Date(appointment.appointmentDate).toLocaleDateString()}-
                - Status: {appointment.status}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Profile;
