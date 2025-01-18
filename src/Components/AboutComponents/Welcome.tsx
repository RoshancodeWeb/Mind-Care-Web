import React from "react";

const Welcome = () => {
  return (
    <div className="w-full bg-[#ececec] flex flex-col lg:flex-row items-center mt-8 lg:mt-10">
      <div className="w-full lg:w-[55%] px-4 md:px-8 lg:px-20  lg:py-8 text-center lg:text-left">
        <h1 className="text-2xl md:text-3xl  lg:text-[2.8rem] lg:font-medium  text-black mt-[2rem]">
          Welcome To <span className="text-[#ec744a]">Mental Health </span>
        </h1>

        <h1 className="text-2xl md:text-3xl mt-[2rem] lg:text-[2.8rem] text-black font-medium">
          Journey And Consultancy
        </h1>

        <p className="text-sm md:text-base lg:text-lg text-justify text-black mt-6">
          <span className="text-black font-bold">
            Personalized Mental Health Plans:
          </span>{" "}
          Based on your responses to a simple questionnaire, we create a
          customized mental health plan that includes self-care tips,
          mindfulness exercises, and recommended reading or activities.
        </p>
        <p className="text-sm md:text-base lg:text-lg text-justify text-black mt-6">
          <span className=" text-black font-bold">
            Therapy and Counseling Services:{" "}
          </span>
          Connect with licensed therapists and counselors through our secure
          platform. Whether you prefer chat, video, or in-person sessions, we
          offer flexible options to suit your lifestyle.
        </p>
        <p className="text-sm md:text-base lg:text-lg text-justify text-black mt-6">
          <span className=" text-black font-bold">Community Support:</span> Join
          our online community to connect with others who understand what you’re
          going through. Share your experiences, ask for advice, and offer
          support to others on their mental health journey.
        </p>
      </div>

      <div className="w-full lg:w-[45%] flex justify-center h-[50vh] md:h-[60vh] lg:h-[80vh] mb-8 lg:mb-0">
        <img
          className="w-[20rem] md:w-[24rem] lg:w-[32rem] h-auto mt-6 md:mt-6 lg:mt-14"
          src="/well.png"
          alt="About"
        />
      </div>
    </div>
  );
};

export default Welcome;
