import React from "react";

const Reviews = () => {
  return (
    <div className="w-full mt-[2.5rem] bg-[#ececec] py-8">
      <div className="w-full text-center mb-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-black font-bold">
          Client{" "}
          <span className="text-2xl md:text-3xl lg:text-4xl font-light text-[#ec744a]">
            Reviews
          </span>
        </h1>
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-black mt-3">
          Excellence and the personalized service we provide.
        </h2>
      </div>

      <div className="flex flex-col sm:flex-row mt-[3rem] sm:space-x-6 space-y-6 sm:space-y-0 justify-around items-center px-4">
        <div className="w-full sm:w-[30%] lg:w-[22%] h-auto p-6 text-center border border-black rounded-3xl bg-white">
          <img
            className="w-24 h-24 mx-auto mb-4"
            src="/pic1.png"
            alt="Client 1"
          />
          <p className="text-base lg:text-lg text-black mb-4">
            Some say this is a great place for treating alcoholism and mental
            health issues. They say the doctors are helpful and professional,
            and the staff are approachable.
          </p>
          <h3 className="text-lg font-bold text-black">George J - Client</h3>
        </div>

        <div className="w-full sm:w-[30%] lg:w-[22%] h-auto p-6 text-center rounded-3xl bg-[#229173]">
          <img
            className="w-24 h-24 mx-auto mb-4"
            src="/pic2.png"
            alt="Client 2"
          />
          <p className="text-base lg:text-lg text-white mb-4">
            Some say this is a great place for treating alcoholism and mental
            health issues. They say the doctors are helpful and professional,
            and the staff are approachable.
          </p>
          <h3 className="text-lg font-bold text-white">
            Alixa Walton - Client
          </h3>
        </div>

        <div className="w-full sm:w-[30%] lg:w-[22%] h-auto p-6 text-center border border-black rounded-3xl bg-white">
          <img
            className="w-24 h-24 mx-auto mb-4"
            src="/pic3.png"
            alt="Client 3"
          />
          <p className="text-base lg:text-lg text-black mb-4">
            Some say this is a great place for treating alcoholism and mental
            health issues. They say the doctors are helpful and professional,
            and the staff are approachable.
          </p>
          <h3 className="text-lg font-bold text-black">Wilson Jack - Client</h3>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
