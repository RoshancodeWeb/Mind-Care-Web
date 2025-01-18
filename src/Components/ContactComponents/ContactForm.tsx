import React from 'react'
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'

const ContactForm = () => {
  return (
    <div className="w-full flex flex-col md:flex-row  items-center  p-4 md:p-10">
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
      <div className="md:w-[50%] flex items-center justify-center  px-4">
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
  )
}

export default ContactForm