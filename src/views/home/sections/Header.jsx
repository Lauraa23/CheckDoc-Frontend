import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <section
        id="header"
        className="text-white relative bg-center"
        style={{
          background: "linear-gradient(to right, #1e0c9db3, #06cdecb3)",
        }}
      >
        <nav
          id="navbarHome"
          className="w-full flex justify-between items-center justify-evenly bg-transparent px-8 py-5"
        >
          <div className="flex flex-row items-center font-semibold">
            <FontAwesomeIcon
              icon="fa-solid fa-heart-pulse"
              size="2xl"
              style={{ color: "#ffffff" }}
            />
            <h1 className="text-white text-[1rem]">CheckDoc</h1>
          </div>
          <div className="navLinks">
            <ul className="navbarItems list-none flex gap-5 items-center text-[1rem]">
              <li className="cursor-pointer text-white">Home</li>
              <li className="cursor-pointer text-white">Services</li>
              <li className="cursor-pointer text-white">About</li>
              <li className="cursor-pointer text-white">Help</li>
            </ul>
          </div>
          <div className="accessOptions flex gap-5 items-center text-[0.8rem]">
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signUp">
              <button className="bg-white text-blue-700 font-semibold py-2 px-4 rounded-full">
                <FontAwesomeIcon icon="fa-regular fa-user" size="lg" />
                Sign Up
              </button>
            </NavLink>
          </div>
        </nav>
        <div className="bannerContainer grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center gap-8 lg:gap-0 py-10 lg:py-0">
          <div className="messageSection flex flex-col items-center h-[90vh] w-[90%] lg:w-[80%] justify-start lg:justify-center text-center lg:text-left">
            <h3 className="text-[2rem] font-bold">
              Consult a doctor anytime, anywhere by video call
            </h3>
            <p className="text-[0.8rem] font-light">
              Talk with a doctor using our highly secured HIPAA complaint
              end-to-end encrypted video call
            </p>

            <div className="doctorsCount flex items-center justify-center gap-2 bg-white text-blue-700 font-semibold py-2 px-4 rounded-full mt-5 w-auto">
              <FontAwesomeIcon
                icon="fa-solid fa-circle"
                style={{ color: "#15a81f" }}
              />
              2210 Doctors online
            </div>
          </div>
          <div className="w-[80%] lg:w-[65%]">
            <img
              src="src/assets/images/bannerDoctor.png"
              alt="Doctor Banner"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
