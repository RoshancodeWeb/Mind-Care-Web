import React from "react";

const OurLocation = () => {
  return (
    <div className="w-full bg-[#ececec]">
      <div className="w-full text-center  md:mt-[5rem]">
        <h1 className="text-[2rem] md:text-[3rem] font-bold text-black">
          Mapping Out Mental Health
        </h1>
        <h1 className="text-[2rem] md:text-[3rem] text-black">
          Consulting Strategies
        </h1>
      </div>

      <div className="w-full p-[1rem] md:p-[3rem] lg:p-[5rem]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3409.0253359258704!2d74.28886044946246!3d31.465800650125743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391901bdaa7bfce3%3A0xdeb52e2172be261e!2sMental%20Health%20Care%20Centered!5e0!3m2!1sen!2s!4v1731335967825!5m2!1sen!2s"
          width="100%"
          height="450"
          className="border-[2px] border-[#ec744a] rounded-lg"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default OurLocation;
