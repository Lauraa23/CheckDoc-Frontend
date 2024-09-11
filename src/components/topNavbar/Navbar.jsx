import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const Navbar = ({ transparent }) => {
  return (
    <>
      <nav
        id="navbarHome"
        className={`w-full flex justify-between items-center justify-evenly px-8 py-3 ${
          transparent
            ? "bg-transparent"
            : "bg-gradient-to-r from-cyan-500 to-blue-500"
        }`}
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
          <NavLink className="text-white" to="/login">Login</NavLink>
          <NavLink to="/signUp">
            <button className="bg-white text-blue-700 font-semibold py-2 px-4 rounded-full">
              <FontAwesomeIcon icon="fa-regular fa-user" size="lg" />
              Sign Up
            </button>
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
