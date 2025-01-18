import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
   
     <div>
        
      <footer style={{ backgroundImage: `url('/abour.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }} className=" py-10 px-6 md:px-12 lg:px-20 text-white">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between  md:gap-[4rem] lg:gap-[10rem]">
              {/* Logo and Description */}
              <div className="flex flex-col items-start md:w-1/3">
                <img src="/log.png" alt="Mind Care Logo" className="w-[8rem] mb-4" />
                <p className="text-sm md:text-base leading-relaxed">
                  Mind Care focuses on enhancing mental well-being through personalized support, expert guidance, and effective strategies to foster overall emotional and psychological health.
                </p>
              </div> 
      
              {/* Services */}
              <div className="text-center md:text-left md:w-1/4">
                <h2 className="font-semibold text-lg mb-2">Services</h2>
                <ul className="space-y-1">
                  <li>Psychotherapy</li>
                  <li>Mental Counseling</li>
                  <li>Support Groups</li>
                  <li>Case Management</li>
                </ul>
              </div>
      
              {/* Contact */}
              <div className="text-center md:text-left md:w-1/4">
                <h2 className="font-semibold text-lg mb-2">Contact</h2>
                <ul className="space-y-1">
                  <li>
                  ☎ +14 5468 8272
                  </li>
                  <li>
                  ✉ ronc@domain.com
                  </li>
                  <li >
                  ⛯ Lazy Tower 192, Bern Swiss
                  </li>
                </ul>
              </div>
      
              {/* Links */}
              <div className="text-center md:text-left md:w-1/4">
                <h2 className="font-semibold text-lg mb-2">Links</h2>
                <ul className="space-y-1">
                  <li>Privacy Policy</li>
                  <li>Terms Of Use</li>
                </ul>
                <button className="mt-4 bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-orange-600 transition">
                  Subscribe Now
                </button>
              </div>
            </div>
      
            {/* Social Icons and Copyright */}
            <div className="mt-8 border-t border-white border-opacity-20 pt-4 text-center">
              <div className="flex justify-center space-x-4 text-2xl">
                <FaFacebook />
                <FaTwitter />
                <FaInstagram />
                <FaLinkedin />
                <FaYoutube />
              </div>
              <p className="text-sm mt-4">© 2023 @mindcare all rights reserved</p>
            </div>
          </footer>
          </div>
  )
}

export default Footer