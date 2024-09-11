import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import create from "../../service/http/appointents/Create";

const CreateAppointment = () => {
  const navigate = useNavigate();
  const [appointmentDate, setAppointmentDate] = useState('');
  const [description, setDescription] = useState('');
  const doctorId = new URLSearchParams(window.location.search).get('doctorId');
  const patientId = localStorage.getItem('id');
  const authToken = localStorage.getItem('authToken');

  useEffect(() => {
    console.log('Doctor ID:', doctorId);
    console.log('Patient ID:', patientId);
    console.log('Auth Token:', authToken);
  }, [doctorId, patientId, authToken]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log('Appointment Date:', appointmentDate);
    console.log('Description:', description);
    
    try {
      const result = await create(doctorId, patientId, appointmentDate, authToken);
      console.log('Appointment creation response:', result);
      alert('Appointment created successfully!');
      navigate('/');
    } catch (error) {
      console.error('Failed to create appointment:', error);
      alert('Failed to create appointment.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 bg-white rounded-md shadow-lg">
      <h2 className="text-xl font-bold text-center text-blue-800">
        Create an Appointment
      </h2>
      <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Date and Time
          </label>
          <input
            type="datetime-local"
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description (optional)
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            placeholder="Reason for appointment"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold"
        >
          Create Appointment
        </button>
      </form>
    </div>
  );
};

export default CreateAppointment;
