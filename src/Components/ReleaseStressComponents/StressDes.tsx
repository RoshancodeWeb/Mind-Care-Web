import React from "react";

const StressDes = () => {
  return (
    <div
      className="w-full h-auto py-[4rem] px-[2rem]  md:px-28 mt-[3rem]"
      style={{
        backgroundImage: `url('/abour.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-2xl sm:text-4xl md:text-5xl text-white font-bold">
        Release <span className="font-light text-[#ec744a]">Stress</span>
      </h1>
      <p className="text-sm sm:text-[1.2rem] md:text-xl mt-3 sm:mt-4 text-white text-justify font-normal">
        Release stress effectively with Our Mind Care web application. Through
        expert-crafted techniques and personalized care plans, we empower you to
        manage stress, restore inner balance, and achieve a state of calm.
        Prioritize your mental well-being and experience a renewed sense of
        peace and resilience.
      </p>
    </div>
  );
};

export default StressDes;
