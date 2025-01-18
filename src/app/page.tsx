"use client"
import Hero from "./SubComponents/Hero";
import Values from "./SubComponents/Values";
import { Choice } from "./SubComponents/Choice";
import { About } from "./SubComponents/About";
import { Service } from "./SubComponents/Services";
import Mentor from "./SubComponents/Mentor";
import Support from "./SubComponents/Support";
import SelfCare from "./SubComponents/SelfCare";
import Packages from "./SubComponents/Packages";
import Assistant from "./SubComponents/Assistant";
import Location from "./SubComponents/Location";
import Reviews from "./SubComponents/Reviews";
import Faq from "./SubComponents/Faq";
import Navbar from "@/Components/Navbar";
import Footer from "./SubComponents/Footer";

const Home = () => {
  // Control for Login dropdown

  return (
    <div className="w-[100%]  bg-[#ececec]">
      <Navbar/>
      <Hero />
      {/* Values*/}
      <Values />
      {/* Choice*/}
      <Choice />
      {/* about us */}
      <About />

      {/*Services */}
      <Service />

      {/*Mentor */}
      <Mentor />

      {/* Support*/}
      <Support />

      <SelfCare />
      {/*Packages*/}
      <Packages />

      <Assistant />
      {/* Location*/}
      <Location />
      {/* Reviews*/}
      <Reviews />
      {/* Call to Action */}
      <Faq />
      <Footer/>
    </div>
  );
};

export default Home;
