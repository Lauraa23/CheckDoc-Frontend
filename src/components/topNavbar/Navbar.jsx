import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const Navbar = ({ transparent }) => {
  const isLoggedIn = !!localStorage.getItem("authToken");
  const isDoctor = localStorage.getItem("isDoctor") === "true";

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("id");
    localStorage.removeItem("name");
    localStorage.removeItem("isDoctor");
    window.location.href = "/";
  };

  return (
    <nav
      id="navbarHome"
      className={`w-full flex justify-between items-center justify-evenly px-8 py-3 ${
        transparent
          ? "bg-transparent"
          : isLoggedIn
          ? isDoctor
            ? "bg-green-500"
            : "bg-gradient-to-r from-cyan-500 to-blue-500"
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
          <NavLink to="/" className="cursor-pointer text-white">
            Home
          </NavLink>
          <NavLink to="/doctorsList" className="cursor-pointer text-white">
            Services
          </NavLink>
          <li className="cursor-pointer text-white">About</li>
          <li className="cursor-pointer text-white">Help</li>
        </ul>
      </div>
      <div className="accessOptions flex gap-5 items-center text-[0.8rem]">
        {isLoggedIn ? (
          <>
            <NavLink className="text-white" to="/profile">
              My Profile
            </NavLink>
            <button
              onClick={handleLogout}
              className="bg-white text-blue-700 font-semibold py-2 px-4 rounded-full"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink className="text-white" to="/login">
              Login
            </NavLink>
            <NavLink to="/signUp">
              <button className="bg-white text-blue-700 font-semibold py-2 px-4 rounded-full">
                <FontAwesomeIcon icon="fa-regular fa-user" size="lg" />
                Sign Up
              </button>
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
