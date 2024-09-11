import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/topNavbar/Navbar";
import DoctorCard from "../../components/doctorCard/DoctorCard";

const DoctorList = () => {
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
              <div className="relative flex w-full items-center">
                <input
                  type="search"
                  className="w-full rounded-full border border-neutral-300 bg-transparent pr-10 py-3 text-base font-normal text-neutral-700 outline-none focus:border-blue-500 focus:shadow-inner transition ease-in-out duration-200"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="button-addon2"
                />
                <FontAwesomeIcon
                  icon="fa-solid fa-magnifying-glass"
                  className="absolute right-3 text-blue-500"
                  size="lg"
                />
              </div>
            </div>
            <div className="flex flex-row w-full justify-between items-center mt-4">
              <p className="text-lg font-semibold">Top Doctors</p>
              <p className="text-blue-500 cursor-pointer">See All ➜</p>
            </div>
          </div>
          <div className="flex-1 mt-6">
            <DoctorCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorList;
