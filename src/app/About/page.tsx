"use client";
import React from "react"
import { Choice } from "../SubComponents/Choice";
import Welcome from "../../Components/AboutComponents/Welcome";
import SelfCare from "../SubComponents/SelfCare";
import Support from "../SubComponents/Support";
import Values from "../SubComponents/Values";
import LiveChat from "../../Components/AboutComponents/LiveChat";
import AboutDes from "../../Components/AboutComponents/AboutDes";
import Mission from "../../Components/AboutComponents/Mission";
import Navbar from "@/Components/Navbar";
import Footer from "../SubComponents/Footer";

const About = () => {
  return (
    <div className="w-[100%] bg-[#ececec]">
      <Navbar/>
      <AboutDes />
      <Mission />
      <Choice />
      <Welcome />
      <SelfCare />
      <Support />
      <Values />
      <LiveChat />
      <Footer/>
    </div>
  );
};

export default About;
