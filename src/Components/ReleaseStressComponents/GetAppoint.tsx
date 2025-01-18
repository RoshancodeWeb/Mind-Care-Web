import React from "react";

const GetAppoint = () => {
  return (
    <div className="w-full bg-[#ececec]  justify-around flex flex-col lg:flex-row items-center mt-8 lg:mt-[8rem]">
      <div className="w-full lg:w-[55%] px-4 md:px-8 lg:px-20  lg:py-8 text-center lg:text-left">
        <h1 className="text-2xl md:text-3xl  lg:text-[2.8rem] lg:font-medium  text-black mt-[2rem]">
          You have lots of reasons
        </h1>
        <h1 className="text-2xl md:text-3xl mt-[0.8rem] lg:text-[2.8rem] text-black font-medium">
          to choose us
        </h1>
        <p className="text-sm  md:text-base text-center lg:text-lg md:text-justify lg:text-justify text-black mt-6">
          Personalized Mental Health Plans Based on your responses to a simple
          questionnaire, we create a customized mental health plan that includes
          self-care tips, mindfulness exercises, and recommended reading or
          activities.
        </p>
        <button
          className="cursor-pointer mt-[1.5rem] transition-all bg-[#118771] text-white px-6 py-2 rounded-lg
border-blue-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
        >
          Get Appointment
        </button>
      </div>
      <div
        style={{
          backgroundImage: `url('/other.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-[20rem] rounded-lg lg:w-[27rem] flex border-2 border-black mt-[2rem] justify-center lg:mr-[3rem] h-[37vh] md:h-[37vh] lg:h-[50vh] mb-8 lg:mb-0"
      ></div>
    </div>
  );
};

export default GetAppoint;
