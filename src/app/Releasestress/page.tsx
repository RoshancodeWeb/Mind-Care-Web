import React from "react"
import StressDes from "../../Components/ReleaseStressComponents/StressDes";
import Release from "../../Components/ReleaseStressComponents/Release";
import GetAppoint from "../../Components/ReleaseStressComponents/GetAppoint";
import Navbar from "@/Components/Navbar";
import Footer from "../SubComponents/Footer";
const Releasestress = () => {
  return (
    <div className="w-[100%] bg-[#ececec]">
      <Navbar/>
      <StressDes />
      <div className="mt-[5rem]">
        <h1 className="text-2xl text-center sm:text-4xl md:text-5xl text-black font-bold">
          Mind Care{" "}
          <span className="font-light text-[#ec744a]">Stress Release</span>{" "}
          Content
        </h1>
      </div>
      <Release />
      <GetAppoint />  
      <Footer/>
    </div>
  );
};

export default Releasestress;
