import React from "react";
import {motion} from "framer-motion"
const Hero = () => {
  return (
    <div>
      {/*Hero Section */}
      <div className="w-full h-auto mt-4 flex flex-col-reverse md:flex-row items-center">
        {/* Text Content */}
        <div className="w-full md:w-1/2 h-auto md:h-[85vh] p-6 md:pl-10 md:pt-28 text-center md:text-left">
          <h1 className="text-3xl md:mt-5 md:text-4xl lg:text-[3.4rem] font-medium leading-tight">
            Healthy Minds, Happy Lives
          </h1>
          <h1 className="text-3xl md:text-4xl lg:text-[3.4rem] md:mt-5 font-medium leading-tight">
            <span className="text-[#ec744a]">Mental Health</span> Consultancy
          </h1>
          <p className="font-normal mt-6 md:mt-12 text-base md:text-lg lg:text-xl">
            Mind Care is a comprehensive web application designed for stress
            relief and mental health management, offering resources, articles,
            and professional support to enhance well-being.
          </p>

          {/* Button */}
          <button className="relative group mt-7 border-none bg-transparent p-0 outline-none cursor-pointer font-mono font-light uppercase text-base">
            <span className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 rounded-lg transform translate-y-0.5 transition duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:translate-y-1 group-hover:duration-[250ms] group-active:translate-y-px"></span>
            <span className="absolute top-0 left-0 w-full h-full rounded-lg bg-gradient-to-l from-[hsl(217,33%,16%)] via-[hsl(217,33%,32%)] to-[hsl(217,33%,16%)]"></span>
            <div className="relative flex items-center justify-between py-3 px-6 text-lg text-white rounded-lg transform -translate-y-1 bg-gradient-to-r from-[#f27121] via-[#e94057] to-[#8a2387] gap-3 transition duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:-translate-y-1.5 group-hover:duration-[250ms] group-active:-translate-y-0.5 brightness-100 group-hover:brightness-110">
              <span className="select-none">Get Appointment</span>
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 ml-2 -mr-1 transition duration-250 group-hover:translate-x-1"
              >
                <path
                  clipRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </div>
          </button>
        </div>

        {/* Image Content */}
        <motion.div
          initial={{ x: "100%" }} // Start off-screen to the right
          animate={{ x: 0 }} // Animate to the original position
          transition={{ duration: 1 }} // Duration of the animation
          className="w-full md:w-1/2 h-auto md:h-[85vh] flex justify-center items-center"
        >
          <img
            className="w-64 md:w-[24rem] lg:w-[45rem] ml-0 md:ml-4 lg:ml-[4.3rem] mt-8 md:mt-[7.8rem]"
            src="/hero.png"
            alt="Hero"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
