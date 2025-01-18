import React from "react";

const NewsLetter = () => {
  return (
    <div
      style={{
        backgroundImage: `url('/join.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className=" py-12 px-6 sm:px-12 mt-[5rem] lg:px-24 text-center rounded-lg relative overflow-hidden"
    >
      <div className=" w-full h-full"></div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
        Join To Our Newsletter
      </h2>

      <div className="flex justify-center mt-4">
        <input
          type="email"
          placeholder="Your email"
          className="w-full sm:w-[70%] lg:w-[50%] px-4 py-2 text-gray-700 bg-white rounded-l-full focus:outline-none"
        />
        <button className="bg-[#eb744c] hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-r-full">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
