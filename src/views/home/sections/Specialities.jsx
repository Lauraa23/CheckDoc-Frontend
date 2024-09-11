import React from "react";
import "../../../main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Specialities = () => {
  return (
    <>
      <section
        id="specialtyWrapper"
        className="text-center px-0 py-[50px]"
        style={{ background: "aliceblue" }}
      >
        <div className="specialtyTitle w-35">
          <h2 className="text-[1.5rem] text-blue-800 font-bold">
            Our Specialities
          </h2>
        </div>
        <div className="specialtyCarousel grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center py-10">
          <div className="specialtyItem flex flex-col items-center">
            <div className="specialtyCard bg-white shadow-[0_20px_40px_#0000001a] flex justify-center items-center w-[120px] h-[120px] rounded-[10px]">
              <FontAwesomeIcon
                icon="fa-solid fa-brain"
                size="2xl"
                style={{ color: "#194286" }}
              />
            </div>
            <p className="mt-2">Neurology</p>
          </div>
          <div className="specialtyItem flex flex-col items-center">
            <div className="specialtyCard bg-white shadow-[0_20px_40px_#0000001a] flex justify-center items-center w-[120px] h-[120px] rounded-[10px]">
              <FontAwesomeIcon
                icon="fa-solid fa-heart"
                size="2xl"
                style={{ color: "#194286" }}
              />
            </div>
            <p className="mt-2">Cardiology</p>
          </div>
          <div className="specialtyItem flex flex-col items-center">
            <div className="specialtyCard bg-white shadow-[0_20px_40px_#0000001a] flex justify-center items-center w-[120px] h-[120px] rounded-[10px]">
              <FontAwesomeIcon
                icon="fa-solid fa-tooth"
                size="2xl"
                style={{ color: "#194286" }}
              />
            </div>
            <p className="mt-2">Dentistry</p>
          </div>
          <div className="specialtyItem flex flex-col items-center">
            <div className="specialtyCard bg-white shadow-[0_20px_40px_#0000001a] flex justify-center items-center w-[120px] h-[120px] rounded-[10px]">
              <FontAwesomeIcon
                icon="fa-solid fa-venus"
                size="2xl"
                style={{ color: "#194286" }}
              />
            </div>
            <p className="mt-2">Gynecology</p>
          </div>
          <div className="specialtyItem flex flex-col items-center">
            <div className="specialtyCard bg-white shadow-[0_20px_40px_#0000001a] flex justify-center items-center w-[120px] h-[120px] rounded-[10px]">
              <FontAwesomeIcon
                icon="fa-solid fa-eye"
                size="2xl"
                style={{ color: "#194286" }}
              />
            </div>
            <p className="mt-2">Ophthalmology</p>
          </div>
          <div className="specialtyItem flex flex-col items-center">
            <div className="specialtyCard bg-white shadow-[0_20px_40px_#0000001a] flex justify-center items-center w-[120px] h-[120px] rounded-[10px]">
              <FontAwesomeIcon
                icon="fa-solid fa-bone"
                size="2xl"
                style={{ color: "#194286" }}
              />
            </div>
            <p className="mt-2">Orthopedics</p>
          </div>
          <div className="specialtyItem flex flex-col items-center">
            <div className="specialtyCard bg-white shadow-[0_20px_40px_#0000001a] flex justify-center items-center w-[120px] h-[120px] rounded-[10px]">
              <FontAwesomeIcon
                icon="fa-solid fa-child"
                size="2xl"
                style={{ color: "#194286" }}
              />
            </div>
            <p className="mt-2">Pediatrics</p>
          </div>
          <div className="specialtyItem flex flex-col items-center">
            <div className="specialtyCard bg-white shadow-[0_20px_40px_#0000001a] flex justify-center items-center w-[120px] h-[120px] rounded-[10px]">
              <FontAwesomeIcon
                icon="fa-solid fa-stethoscope"
                size="2xl"
                style={{ color: "#1d4d9f" }}
              />
            </div>
            <p className="mt-2">General Medicine</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Specialities;
