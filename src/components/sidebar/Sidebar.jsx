import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
  return (
    <>
      <nav className="w-24 h-full bg-light flex-shrink-0">
        <div className="pl-0 pr-0 w-full border-r border-solid border-strongGray">
          <ul className="flex flex-col items-center p-0 m-0 h-screen list-none">
            <li className="text-center box-border">
              <div className="w-16 h-16 rounded-full bg-[#B5EDFF] text-center flex items-center justify-center cursor-pointer">
                <FontAwesomeIcon
                  icon="fa-solid fa-brain"
                  size="xl"
                  style={{ color: "#194286" }}
                />
              </div>
            </li>
            <li className="text-center p-[15px]">
              <div className="w-16 h-16 rounded-full bg-[#B5EDFF] text-center flex items-center justify-center cursor-pointer">
                <FontAwesomeIcon
                  icon="fa-solid fa-heart"
                  size="xl"
                  style={{ color: "#194286" }}
                />
              </div>
            </li>
            <li className="text-center p-[15px]">
              <div className="w-16 h-16 rounded-full bg-[#B5EDFF] text-center flex items-center justify-center cursor-pointer">
                <FontAwesomeIcon
                  icon="fa-solid fa-tooth"
                  size="xl"
                  style={{ color: "#194286" }}
                />
              </div>
            </li>
            <li className="text-center p-[15px]">
              <div className="w-16 h-16 rounded-full bg-[#B5EDFF] text-center flex items-center justify-center cursor-pointer">
                <FontAwesomeIcon
                  icon="fa-solid fa-venus"
                  size="xl"
                  style={{ color: "#194286" }}
                />
              </div>
            </li>
            <li className="text-center p-[15px]">
              <div className="w-16 h-16 rounded-full bg-[#B5EDFF] text-center flex items-center justify-center cursor-pointer">
                <FontAwesomeIcon
                  icon="fa-solid fa-eye"
                  size="xl"
                  style={{ color: "#194286" }}
                />
              </div>
            </li>
            <li className="text-center p-[15px]">
              <div className="w-16 h-16 rounded-full bg-[#B5EDFF] text-center flex items-center justify-center cursor-pointer">
                <FontAwesomeIcon
                  icon="fa-solid fa-bone"
                  size="xl"
                  style={{ color: "#194286" }}
                />
              </div>
            </li>
            <li className="text-center p-[15px]">
              <div className="w-16 h-16 rounded-full bg-[#B5EDFF] text-center flex items-center justify-center cursor-pointer">
                <FontAwesomeIcon
                  icon="fa-solid fa-child"
                  size="xl"
                  style={{ color: "#194286" }}
                />
              </div>
            </li>
            <li className="text-center p-[15px]">
              <div className="w-16 h-16 rounded-full bg-[#B5EDFF] text-center flex items-center justify-center cursor-pointer">
                <FontAwesomeIcon
                  icon="fa-solid fa-stethoscope"
                  size="xl"
                  style={{ color: "#1d4d9f" }}
                />
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
