'use client';
import Navbar from '@/Components/Navbar';
import React from 'react';
import { BiSun } from 'react-icons/bi'; // Morning icon
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import Footer from '../SubComponents/Footer';
const AppointmentSchedule = () => {


 

  return (
    <div>
    <Navbar/>
    <div className="flex flex-col lg:w-[85%] mx-auto mt-10 lg:mt-[4rem]   ">
      {/* Doctor Info */}
      <div className="flex flex-col lg:flex-row justify-between items-center mb-5">
        <div className="flex items-center space-x-4">
          <img
            src="/dod.png" // Replace with the actual image path
            alt="Dr. Rabia Monir"
            className="w-16 h-16 lg:w-28 lg:h-28 rounded-full object-cover"
          />
          <div>
            <h2 className="text- lg:text-2xl font-semibold">Dr. Kamran Ahmed</h2>
            <p className="text-sm lg:text-lg text-gray-600">
            Mind Care, C-93, Block 13, Johar Town, Lahore
              <span className="text-blue-500 ml-2 cursor-pointer">Change Clinic</span>
            </p>
            <p className="text-sm lg:text-lg text-gray-600">Fee: <span className="font-bold">Rs. 2,500</span></p>
          </div>
        </div>
      </div>


      Time Slots
      <div className="mt-5 space-y-5 bg-white p-8 shadow-md rounded-md">
        {/* Morning Slots */}
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <BiSun className="text-yellow-500" size={20} />
            <span className="font-medium text-gray-700">Morning Slots</span>
          </div>
        </div>

        {/* Afternoon Slots */}
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <BiSun className="text-orange-500" size={20} />
            <span className="font-medium text-gray-700">Afternoon Slots</span>
          </div>
        </div>
      </div>
    </div>
<div className='w-full flex  justify-center'>

<button
  className="relative flex mt-8 items-center px-6 py-3 overflow-hidden font-medium transition-all bg-[#017e6e] rounded-md group"
>
  <span
    className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#eb744c] rounded group-hover:-mr-4 group-hover:-mt-4"
  >
    <span
      className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
    ></span>
  </span>
  <span
    className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#eb744c] rounded group-hover:-ml-4 group-hover:-mb-4"
  >
    <span
      className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
    ></span>
  </span>
 
  <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
    >Select Appointment Date</span>
</button>

</div>
 <div className="w-full flex flex-col md:flex-row  items-center   p-4 md:p-10">
      {/* Contact Information */}
      <div className="md:w-[50%] flex items-center justify-center py-[2rem] px-4">
        <div className=" p-8 rounded-lg space-y-6 ">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Contact Us Today for Personalized Support and Assistance
          </h2>
          <p className="text-gray-600">
            Mind Care providing multiple contact options and a user-friendly contact form, we aim to make it easy for you to get in touch with us. Whether you prefer to email, call, or fill out a form, we are here to listen and provide the support you need.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <FiPhone className="h-6 w-6 text-gray-500" />
              <p className="text-gray-900 text-lg font-medium">+14 5464 8272</p>
            </div>
            <div className="flex items-center space-x-4">
              <FiMail className="h-6 w-6 text-gray-500" />
              <p className="text-gray-900 text-lg font-medium">rona@domain.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <FiMapPin className="h-6 w-6 text-gray-500" />
              <p className="text-gray-900 text-lg font-medium">Lazyy Tower 192, Burn Swiss</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="md:w-[50%] flex items-center justify-center py-[2rem] px-4">
        <div className=" w-full  p-8 space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-lg font-medium text-gray-900">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="Your first name"
                className="mt-1 border border-[#ec744a] rounded-full w-full p-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-lg font-medium text-gray-900">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Your last name"
                className="mt-1 border border-[#ec744a] rounded-full w-full p-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-900">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="email@domain.com"
                className="mt-1 border border-[#ec744a] rounded-full w-full p-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-lg font-medium text-gray-900">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="+21 228xxxx"
                className="mt-1 border border-[#ec744a] rounded-full w-full p-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-medium text-gray-900">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your message"
              rows={4}
              className="mt-1 border border-[#ec744a] rounded-lg w-full p-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#eb744c]  text-white font-semibold py-2 px-6 rounded-lg w-full sm:w-auto"
          >
            Send message
          </button>
        </div>
      </div>
    </div>

     <Footer/>
    </div>
  );
};

export default AppointmentSchedule;
