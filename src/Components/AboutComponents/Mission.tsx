import React from "react";

const Mission = () => {
  return (
    <div className="w-full bg-[#ececec] flex flex-col lg:flex-row items-center mt-5 lg:mt-10">
      {/* Image Container */}
      <div className="w-full lg:w-[45%] flex justify-center h-[50vh] md:h-[60vh] lg:h-[80vh] mb-8 lg:mb-0">
        <img
          className="w-[18rem] md:w-[24rem] lg:w-[32rem] h-auto mt-4 md:mt-6 lg:mt-14"
          src="/abou.png"
          alt="About"
        />
      </div>

      {/* Text Content Container */}
      <div className="w-full lg:w-[55%] mt-[-2rem] px-4 md:px-8 lg:px-20  lg:py-8 text-center lg:text-left">
        <h2 className="text-xl md:text-3xl lg:text-[2.7rem] text-black font-medium mt-6 md:mt-8">
          Discover the Faces Behind Our
        </h2>
        <h2 className="text-xl md:text-3xl lg:text-[2.7rem] text-black font-medium mt-4 md:mt-6">
          Mind Care Consultancy
        </h2>
        <p className="text-sm md:text-basev text-center md:text-justify lg:text-lg text-black mt-4 md:mt-6">
          Our dedicated support team at Our Mind Care Consultancy is here to
          provide guidance and assistance every step of the way. With expert
          advice and compassionate care, we are committed to helping you
          navigate your mental health journey effectively.
        </p>
        <h1 className="text-[1.8rem]  mt-[1.2rem] text-black  font-bold">
          Our
          <span className=" md:text-3xl lg:text-[1.5rem] text-[1.5rem] font-light text-[#ec744a]">
            {" "}
            Mession
          </span>
        </h1>
        <p className="text-sm md:text-base lg:text-lg text-black ">
          At Mind Care, we are dedicated to empowering individuals to take
          control of their mental health. We aim to break the stigma surrounding
          mental health issues by offering a safe, supportive, and confidential
          platform where users can explore their feelings, access expert advice,
          and find the right tools to improve their mental well-being.
        </p>
      </div>
    </div>
  );
};

export default Mission;
