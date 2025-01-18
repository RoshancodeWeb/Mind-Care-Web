import React from "react";

const AppointDesc = () => {
  return (
    <div
      className="w-full h-[270px] py-8 px-4 md:px-16 lg:px-32 mt-[4rem]"
      style={{
        backgroundImage: `url('/abour.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold">
        Appoint <span className="font-light text-[#ec744a]">Us</span>
      </h1>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-[1rem] text-white text-justify">
        At Mind Care, we are dedicated to supporting your mental well-being.
        Book an appointment with our expert psychiatrists and therapists for
        personalized consultations and effective treatments. Let us help you
        take the first step toward a healthier mind and a stress-free
        life.Experience personalized mental health care with our expert
        psychiatrists and therapists.
      </p>
    </div>
  );
};

export default AppointDesc;
