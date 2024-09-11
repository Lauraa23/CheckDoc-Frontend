import React from "react";

const About = () => {
  return (
    <>
      <section
        id="serviceWrapper"
        className="text-center px-0 py-[50px]"
        style={{ background: "aliceblue" }}
      >
        <div className="serviceTitle w-35">
          <h2 className="text-[1.5rem] text-[#262f5a] font-bold">
            Why you should trust us?
          </h2>
          <h3 className="text-[1.5rem] text-[#262f5a] font-bold">
            Get know about us
          </h3>
        </div>
        <div className="serviceCarousel grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center py-10">
          <div className="serviceCard bg-white shadow-[0_30px_60px_#0000001a] flex flex-col justify-center items-center px-5 py-5 rounded-[10px] w-[80vw] md:w-[40vw] lg:w-[25vw]">
            <span>
              <img
                className="w-14"
                src="src\assets\images\specialist.png"
                alt="lungs"
              />
            </span>
            <h4 className="text-[1rem] text-[#262f5a] font-bold">
              All Specialist
            </h4>
            <p className="text-[0.9rem] text-[#262f5a] m-5">
              You can reach out to 3500+ doctors from 80+ specialties, who are
              experienced in telemedicine
            </p>
          </div>
          <div className="serviceCard bg-white shadow-[0_30px_60px_#0000001a] flex flex-col justify-center items-center px-5 py-5 rounded-[10px] w-[80vw] md:w-[40vw] lg:w-[25vw]">
            <span>
              <img
                className="w-14"
                src="src\assets\images\security.png"
                alt="privacy"
              />
            </span>
            <h4 className="text-[1rem] text-[#262f5a] font-bold">
              Private & Secure
            </h4>
            <p className="text-[0.9rem] text-[#262f5a] m-4">
              All your data is protected and safeguarded with sucresd SSL. data
              at rest encryption
            </p>
          </div>
          <div className="serviceCard bg-white shadow-[0_30px_60px_#0000001a] flex flex-col items-center justify-center px-5 py-5 rounded-[10px] w-[80vw] md:w-[40vw] lg:w-[25vw]">
            <span>
              <img
                className="w-20"
                src="src\assets\images\customers.png"
                alt="customers"
              />
            </span>
            <h4 className="text-[1rem] text-[#262f5a] font-bold">
              Million Customers
            </h4>
            <p className="text-[0.9rem] text-[#262f5a] m-4">
              Trusted by milliions and serving users worlwide. Users from 196
              countries and counting
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
