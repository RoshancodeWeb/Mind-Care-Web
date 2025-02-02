import { Sun, TrendingUp } from "@geist-ui/icons";
import React from "react";

const Assistant = () => {
  return (
    <div className="w-full h-auto  mt-[10rem] md:mt-[18rem] flex  flex-col md:flex-row items-center justify-center relative">
      <div
        style={{
          backgroundImage: `url('/join.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-full h-[120vh] md:h-[60vh] flex flex-col md:flex-row justify-between items-center p-6 md:p-12 rounded-lg shadow-lg"
      >
        <div className="relative top-[-8rem] md:top-[-7rem] mb-8 md:mb-0">
          <img
            className="w-[28rem] h-65 sm:w-70 sm:h-70 md:w-[30rem] md:h-[28rem] lg:w-[35rem] lg:h-[33rem]"
            src="chtt.png"
            alt="Mentor"
          />

          <div className="flex items-center mt-[2rem]  justify-center">
            <div className="relative group">
              <button className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

                <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
                  <div className="relative z-10 flex items-center space-x-2">
                    <span className="transition-all duration-500 group-hover:translate-x-1">
                      Lets get started
                    </span>
                    <svg
                      className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                      data-slot="icon"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="md:w-1/2  mt-[-4.8rem] md:mt-0 md:ml-16">
          <h2 className="text-white text-3xl mt-[-2rem] font-semibold mb-4">
            Mind Care Assistant
          </h2>
          <h3 className="text-white text-2xl font-bold mb-8">
            Introducing Experienced Consulting
          </h3>

          {/* Professional Growth Section */}
          <div className="space-y-6">
            <div>
              <p className="text-white">
                <TrendingUp className="w-6 h-6 mr-2 text-white" /> Clients rave
                about their experiences with Our Mind Care Consultancy,
                highlighting our compassionate care and effective strategies. .
              </p>
            </div>

            {/* Reduced Burnout Section */}
            <div>
              <p className="text-white">
                <Sun className="w-6 h-6 mr-2 text-white" /> Many appreciate the
                personalized approach and the positive impact on their mental
                well-being. Here what some of our satisfied clients have to say.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assistant;
