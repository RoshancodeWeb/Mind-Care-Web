import LocDesc from "../../Components/LocationComponents/LocDesc";
import LocClinic from "../../Components/LocationComponents/LocClinic";
import Faq from "../SubComponents/Faq";
import Community from "../../Components/LocationComponents/Community";
import Navbar from "@/Components/Navbar";
import Footer from "../SubComponents/Footer";
const Locations = () => {
  return (
    <div className="w-[100%] bg-[#ececec]">
      <Navbar/>
      <LocDesc />
      <LocClinic />
      <Faq />
      <Community />
      <Footer/>
    </div>
  );
};

export default Locations;
