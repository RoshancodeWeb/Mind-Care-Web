import React from "react";

const Location = () => {
  return (
    <div className="w-full bg-[#ececec] flex flex-col lg:flex-row items-center mt-8 lg:mt-10">
      <div className="w-full lg:w-[55%] px-4 md:px-8 lg:px-20  lg:py-8 text-center lg:text-left">
        <h1 className="text-2xl sm:text-4xl lg:text-6xl text-black font-bold mt-4 md:mt-6 lg:mt-10">
          Organization{" "}
          <span className="text-center md:text-3xl lg:text-[2.8rem] font-light text-[#ec744a]">
            Location
          </span>
        </h1>
        <h2 className="text-xl md:text-3xl lg:text-[2.7rem] text-black font-medium mt-6 md:mt-8">
          With a spacious environment
        </h2>
        <h2 className="text-xl md:text-3xl lg:text-[2.7rem] text-black font-medium mt-4 md:mt-6">
          our organization offers
        </h2>
        <p className="text-sm md:text-basev text-center md:text-justify lg:text-lg text-black mt-4 md:mt-6">
          Our Mind Care Consultancy operates in various locations to ensure
          accessible, high-quality mental health support. Find a nearby office
          or schedule a virtual appointment to receive expert care tailored to
          your needs.
        </p>
        <button className="relative group mt-6 md:mt-8 border-none bg-transparent p-0 outline-none cursor-pointer font-mono font-light uppercase text-sm md:text-base">
          <span className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 rounded-lg transform translate-y-0.5 transition duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:translate-y-1 group-hover:duration-[250ms] group-active:translate-y-px"></span>
          <span className="absolute top-0 left-0 w-full h-full rounded-lg bg-gradient-to-l from-[hsl(217,33%,16%)] via-[hsl(217,33%,32%)] to-[hsl(217,33%,16%)]"></span>
          <div className="relative flex items-center justify-between py-2 px-4 md:py-3 md:px-6 text-base md:text-lg text-white rounded-lg transform -translate-y-1 bg-gradient-to-r from-[#f27121] via-[#e94057] to-[#8a2387] gap-3 transition duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:-translate-y-1.5 group-hover:duration-[250ms] group-active:-translate-y-0.5 brightness-100 group-hover:brightness-110">
            <span className="select-none">See Details</span>
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4 md:w-5 md:h-5 ml-2 -mr-1 transition duration-250 group-hover:translate-x-1"
            >
              <path
                clipRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a 1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
        </button>
      </div>

      <div className="w-full lg:w-[45%] flex justify-center h-[50vh] md:h-[60vh] lg:h-[80vh] mb-8 lg:mb-0">
        <img
          className="w-[20rem] md:w-[24rem] lg:w-[32rem] h-auto mt-6 md:mt-6 lg:mt-14"
          src="/loc.png"
          alt="About"
        />
      </div>
    </div>
  );
};

export default Location;
