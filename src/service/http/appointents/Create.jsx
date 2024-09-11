export const create = async (doctorId, patientId, appointmentDate, authToken) => {
    console.log('Sending to backend:');
    console.log('Doctor ID:', doctorId);
    console.log('Patient ID:', patientId);
    console.log('Appointment Date:', appointmentDate);
    console.log('Auth Token:', authToken);
  
    try {
      const response = await fetch('http://localhost:3001/appointment/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        },
        body: JSON.stringify({
          doctorId,
          patientId,
          appointmentDate
        })
      });
      console.log(response);
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };

  export default create;
  