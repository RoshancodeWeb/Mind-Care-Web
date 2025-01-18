import React from "react";

const AboutDes = () => {
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
        About <span className="font-light text-[#ec744a]">Us</span>
      </h1>
      <p className="text-sm sm:text-[1.2rem] md:text-xl mt-3 sm:mt-4 text-white text-justify font-normal">
        Welcome to Mind Care, your trusted companion on the journey to mental
        well-being. Our web application is designed to provide accessible,
        personalized, and holistic mental health support to individuals of all
        ages. We believe that mental health is as important as physical health,
        and our mission is to make mental wellness resources available to
        everyone, anytime, anywhere.
      </p>
    </div>
  );
};

export default AboutDes;
