import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../../../components/topNavbar/Navbar";

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
        <Navbar transparent={false} />
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
