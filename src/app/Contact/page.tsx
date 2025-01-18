import Navbar from "@/Components/Navbar";
import ContactDesc from "../../Components/ContactComponents/ContactDesc";
import ContactForm from "../../Components/ContactComponents/ContactForm";
import OurLocation from "../../Components/ContactComponents/OurLocation";
import Footer from "../SubComponents/Footer";
const Contact = () => {
  return (
    <div className="w-[100%] bg-[#ececec]">
      <Navbar/>
      <ContactDesc />
      <ContactForm />
      <OurLocation />
      <Footer/>
    </div>
  );
};

export default Contact;
