import React from "react";

const Faqs = () => {
  return (
    <>
      <div className="startConsultationContainer grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center gap-5 lg:gap-0 py-5 lg:py-2">
        <div className="imageRoundBackground w-[350px] h-[350px] rounded-full bg-gradient-to-r from-blue-500 to-blue-300 flex items-center justify-center">
          <img
            src="src/assets/images/faqs.png"
            className="w-[340px] h-[340px] object-contain"
          />
        </div>
        <div className="faqsList flex flex-col justify-evenly h-[90vh] w-[90%] lg:w-[80%] text-start lg:text-start">
          <div className="serviceTitle w-35">
            <h2 className="text-[1.5rem] text-blue-800 font-bold">FAQs</h2>
          </div>
          <ul className="faqsItems text-[1rem] flex flex-col gap-8 items-start">
            <li className="cursor-pointer text-blue-700">
              What does telemedicine mean?
            </li>
            <li className="cursor-pointer text-blue-700">
              What is telemedicine used for?
            </li>
            <li className="cursor-pointer text-blue-700">
              What equipment do you require for telemedice?
            </li>
            <li className="cursor-pointer text-blue-700">
              What are the pros or advantages of telemedice?
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Faqs;
