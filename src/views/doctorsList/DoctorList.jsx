import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/topNavbar/Navbar";
import DoctorCard from "../../components/doctorCard/DoctorCard";
import GetAllDoctors from "../../service/http/doctor/GetAllDoctors";

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const data = await GetAllDoctors();
        setDoctors(data);
        setFilteredDoctors(data); 
      } catch (err) {
        console.log("Failed to load doctors. " + err);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  useEffect(() => {
    const filtered = doctors.filter(
      (doctor) =>
        doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredDoctors(filtered);
  }, [searchTerm, doctors]);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <Navbar />
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col p-6 lg:p-10">
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="mb-6 w-full sm:w-96 flex flex-col items-center">
              <h1 className="text-[1.2rem] sm:text-[1.5rem] font-semibold text-blue-800 text-center mb-4">
                How we can help you today?
              </h1>
              <div className="relative flex w-full items-center mt-5">
                <input
                  type="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full rounded-full border border-neutral-300 bg-transparent pr-10 py-3 text-base font-normal text-neutral-700 outline-none focus:border-blue-500 focus:shadow-inner transition ease-in-out duration-200"
                  placeholder="Search by name or specialty"
                  aria-label="Search"
                />
                <div className="absolute right-3 text-blue-500">
                  <FontAwesomeIcon
                    icon="fa-solid fa-magnifying-glass"
                    size="lg"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row w-full justify-between items-center mt-4">
              <p className="text-lg font-semibold">Top Doctors</p>
              <p className="text-blue-500 cursor-pointer">See All ➜</p>
            </div>
          </div>
          <div className="flex-1 mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDoctors.length > 0 ? (
              filteredDoctors.map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))
            ) : (
              <p>No doctors found</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorList;
