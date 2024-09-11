import axios from "axios";

export const getUserInfo = async (userId) => {
  const authToken = localStorage.getItem("authToken");

  const response = await fetch(`/user/${userId}`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch user info");
  }

  const data = await response.json();
  return data;
};

export const getDoctorAppointments = async (doctorId) => {
  const authToken = localStorage.getItem("authToken");

  const response = await axios.get(
    "http://localhost:3001/appointment/getAppointmentsByDoctorId",
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      params: {
        doctorId,
      },
    }
  );
  console.log(response.data);
  return response.data;
};

export const getPatientAppointments = async (patientId) => {
  const authToken = localStorage.getItem("authToken");

  const response = await axios.get(
    "http://localhost:3001/appointment/getAppoinmentByUser",
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      params: {
        patientId,
      },
    }
  );

  return response.data;
};
