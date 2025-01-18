"use client";
import Doctor from "../../Components/AppointComponents/Doctor";
import AppointDesc from "../../Components/AppointComponents/AppointDesc";
import Faq from "../SubComponents/Faq";
import Navbar from "@/Components/Navbar";
import Footer from "../SubComponents/Footer";
const Appoint = () => {
  return (
    <div className="w-[100%] bg-[#ececec]">
      <Navbar/>
      <AppointDesc />
      <Doctor />
      <Doctor />
      <Doctor />
      <Faq />
      <Footer/>
    </div>
  );
};

export default Appoint;
