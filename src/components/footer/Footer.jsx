import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="bg-[#1b2a4e] text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 py-6 lg:py-8">
        <div className="flex flex-row justify-center items-center">
          <FontAwesomeIcon
            icon="fa-solid fa-heart-pulse"
            size="2xl"
            style={{ color: "#ffffff" }}
          />
          <h1>CheckDoc</h1>
        </div>
        <div>
          <ul>
            <li className="text-sm mb-2">Home</li>
            <li className="text-sm mb-2">About</li>
            <li className="text-sm mb-2">Doctors</li>
            <li className="text-sm">Specialities</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="text-sm mb-2">Contact</li>
            <li className="text-sm mb-2">Support</li>
            <li className="text-sm mb-2">FAQs</li>
            <li className="text-sm">Careers</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="text-sm mb-2">Tools</li>
            <li className="text-sm mb-2">Privacy</li>
            <li className="text-sm mb-2">Answer</li>
            <li className="text-sm">Site Map</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center px-4 py-3 border-t border-[#223461]">
        <p className="text-xs">© Copyright 2024. All Rights Reserved</p>
        <p className="text-xs">Design by Eqya</p>
      </div>
    </footer>
  );
};

export default Footer;
