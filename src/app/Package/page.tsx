"use client";
import React from "react";
import PackageDesc from "../../Components/PackageComponents/PackageDesc";
import Plans from "../../Components/PackageComponents/Plans";
import NewsLetter from "../../Components/PackageComponents/NewsLetter";
import Reviews from "../SubComponents/Reviews";
import Navbar from "@/Components/Navbar";
import Footer from "../SubComponents/Footer";

const Package = () => {
  return (
    <div className="w-[100%] bg-[#ececec]">
      <Navbar/>
      <PackageDesc />
      <Plans />
      <NewsLetter />
      <Reviews />
      <Footer/>
    </div>
  );
};

export default Package;
