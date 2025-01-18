"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Command } from '@geist-ui/icons';
import { Clipboard } from '@geist-ui/icons';
import { Box } from '@geist-ui/icons';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { LuPackageSearch } from "react-icons/lu";
import { FaUser } from 'react-icons/fa';
// import { FiLogIn } from 'react-icons/fi';
import { User } from '@geist-ui/icons';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Control for mobile menu
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDownOpen, setIsDownOpen] = useState(false); // Control for Services dropdown
  const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false); // Control for Login dropdown

  return (
    <nav className="text-black w-full pt-5 px-8">
    <div className="w-full mx-auto  lg:px-6">
      <div className="flex justify-between items-center h-16">
        <img className='w-[130px] h-[60px]' src='/log.png' alt="Logo" />

        <div className="hidden md:flex font-extrabold space-x-5 w-auto h-auto pl-3 pr-3 pt-2 pb-2 rounded-[20px] bg-[#c5c5c5]">
          <Link href="/" className="hover:text-[#eb744c]">Home</Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="hover:text-[#eb744c] flex items-center">
              Services
            </button>
            {isDropdownOpen && (
              <div className="absolute pl-1 pr-1 pt-1 pb-1 w-52 bg-white border-[#eb744c] border rounded-md shadow-lg z-10">
                <Link href="/Products" className="block px-4 py-2 text-black hover:bg-[#ffdd8f] hover:text-black">
                  <Box className='inline mr-2' color="973a1b" /> Our Product
                </Link>
                <Link href="/Appoint" className="block px-4 py-2 text-black hover:bg-[#ffdd8f] hover:text-black">
                  <Clipboard className='inline mr-2' color="973a1b" /> Appoint Us
                </Link>
                <Link href="/Releasestress" className="block px-4 py-2 text-black hover:bg-[#ffdd8f] hover:text-black">
                  <Command className='inline mr-2' color="973a1b" /> Release Stress
                </Link>
                <Link href="/Package" className="block px-4 py-2 text-black hover:bg-[#ffdd8f] hover:text-black">
                  <LuPackageSearch className='inline mr-2' size={24} color="973a1b" /> Packages
                </Link>
              </div>
            )}
          </div>

          <Link href="/Locations" className="hover:text-[#eb744c]">Locations</Link>
          <Link href="/About" className="hover:text-[#eb744c]">About</Link>
          <Link href="/Contact" className="hover:text-[#eb744c]">Contact</Link>
          <Link href="/Chatboot" className="hover:text-[#eb744c]">OnlineChatbot</Link>
        </div>

        {/* Right Side: Shop Icon, Login, and Sign Up (All in the same div) */}
        <div className=" flex items-center gap-2">
          
          <img className='lg:w-[3rem] md:w-[3rem] hidden md:flex lg:flex lg:h-[3rem] md:h-[3rem] md:mr-[1rem] lg:mr-[1rem] ' src='/shop.png' alt="Shop" />
         
          {/* Login and Sign Up buttons for Desktop (hidden in mobile view) */}
          <div className='hidden md:flex gap-2'>
            <div className='w-auto h-auto rounded-[10px] gap-2 px-2 py-1 bg-[#c5c5c5] flex items-center'>
              <Link href="/Login" className="bg-[#eb744c] text-white px-3 font-bold py-1 rounded ">
              ➜Login
              </Link>
              <div
                className="relative"
                onClick={() => setIsLoginDropdownOpen(!isLoginDropdownOpen)}
              >
                <button className="bg-[#c5c5c5] font-bold text-black px-3 py-1 rounded">
                  SignUp
                </button>
                {isLoginDropdownOpen && (
                  <div className="absolute font-extrabold px-1 py-1 ml-[-6rem] mt-4 w-44 bg-white border-[#eb744c] border-2 rounded-md shadow-lg z-10">
                    <Link href="/SignMember" className="block px-4 py-2 text-black hover:bg-[#ffdd8f] hover:text-black">
                      <FaUser className='inline mr-2' size={24} color="#973a1b" /> Members
                    </Link>
                    <Link href="/Signtherapists" className="block px-4 py-2 text-black hover:bg-[#ffdd8f] hover:text-black">
                      <AiOutlineShareAlt className='inline mr-2' size={24} color="973a1b" /> Therapists
                    </Link>
                    <Link href="/Signpartner" className="block px-4 py-2 text-black hover:bg-[#ffdd8f] hover:text-black">
                      <User size={24} color="973a1b" className='inline mr-2' /> Partners
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className=" md:hidden ml-4 flex items-center gap-4">
        <img className='w-[3rem]  h-[3rem]  ' src='/shop.png' alt="Shop" />
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black border-2 border-[#eb744c] hover:text-black focus:outline-none"
          >
            <svg
              className="h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          
        </div>
      </div>
    </div>

    {/* Mobile Menu */}
    {isOpen && (
      <div className="md:hidden">
        <div className="px-2 pt-5 pb-3 space-y-1 sm:px-2">
          <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#ffdd8f]">
            Home
          </Link>
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-bold hover:bg-[#ffdd8f]"
            >
              Services
            </button>
            {isDropdownOpen && (
              <div className="space-y-1 pl-4">
                <Link href="/service1" className="block px-4 py-2 text-black hover:bg-[#ffdd8f] hover:text-black">
                  <Box className='inline mr-2' color="973a1b" /> Our Product
                </Link>
                <Link href="/Appoint" className="block px-4 py-2 text-black hover:bg-[#ffdd8f] hover:text-black">
                  <Clipboard className='inline mr-2' color="973a1b" /> Appoint Us
                </Link>
                <Link href="/Releasestress" className="block px-4 py-2 text-black hover:bg-[#ffdd8f] hover:text-black">
                  <Command className='inline mr-2' color="973a1b" /> Release Stress
                </Link>
                <Link href="/Package" className="block px-4 py-2 text-black hover:bg-[#ffdd8f] hover:text-black">
                  <LuPackageSearch className='inline mr-2' size={24} color="973a1b" /> Packages
                </Link>
              </div>
            )}
          </div>
          <Link href="/Locations" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#ffdd8f]">Locations</Link>
          <Link href="/About" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#ffdd8f]">About</Link>
          <Link href="/Contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#ffdd8f]">Contact</Link>
          <Link href="/Chatboot" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#ffdd8f]">Chatbot</Link>

          {/* Mobile "Login" and "Sign Up" Buttons */}
          <div className="w-full">
            <Link href="/Login" className="block text-center bg-[#eb744c] text-white px-3 py-2 rounded-md text-base font-medium hover:bg-[#c56139]">Login</Link>
            <div className="relative">
            <button
              onClick={() => setIsDownOpen(!isDownOpen)}
            className="block text-center w-full mt-2 border-2 border-[#eb744c] text-black px-3 py-2 rounded-md text-base font-medium "
            >
              Sign Up
            </button>
            {isDownOpen && (
              <div className="space-y-1 mt-2 pl-4">
                <Link href="/SignMember" className="block px-4 py-2 text-black hover:bg-[#ffdd8f] hover:text-black">
                <FaUser className='inline mr-2' size={24} color="#973a1b" /> Members
                </Link>
                <Link href="/Signtherapists" className="block px-4 py-2 text-black hover:bg-[#ffdd8f] hover:text-black">
                <AiOutlineShareAlt className='inline mr-2' size={24} color="973a1b" /> Therapists
                </Link>
                <Link href="/Signpartner" className="block px-4 py-2 text-black hover:bg-[#ffdd8f] hover:text-black">
                <User size={24} color="973a1b" className='inline mr-2' /> Partners
                </Link>
              
              </div>
            )}
          </div>
          </div>
        </div>
      </div>
    )}
  </nav>
  );
}