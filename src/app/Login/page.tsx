'use client';
import Navbar from '@/Components/Navbar';
import Link from 'next/link';
import React from 'react';
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai';
import Footer from '../SubComponents/Footer';

const Login = () => {
  return (
    <div className="w-full h-full">
    <Navbar/>
      <div className="flex flex-col md:flex-row h-screen">
        {/* Left Section - Login Form */}
        <div className="w-full md:w-1/2 h-full bg-[#ececec] flex flex-col justify-center items-center px-4 sm:px-8 md:px-16 py-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">Login to your account</h1>
            <p className="text-lg sm:text-xl text-[#ec835e]">Please log in using your details below</p>
          </div>

          <div className="max-w-md w-full bg-[#d9d9d9] rounded-xl shadow-2xl p-8 space-y-8">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-500 text-center">Welcome</h2>

            <form method="POST" action="#" className="space-y-6">
              {/* Email Input */}
              <div className="relative bg-white rounded-lg h-11 w-full min-w-[200px] flex items-center">
               
                <input
                  placeholder=""
                  className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 pl-10 font-sans text-sm font-normal text-blue-gray-700 outline-none transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#ec744a] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                />
                 <AiOutlineMail className="text-gray-400 mr-2 " size={25} />
                <label
                 className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-black peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-cyan-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-cyan-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                >
                  Email
                </label>
              </div>

              {/* Password Input */}
              <div className="relative bg-white rounded-lg h-11 w-full min-w-[200px] flex items-center">
              
                <input
                  placeholder=""
                  type="password"
                  className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 pl-10 font-sans text-sm font-normal text-blue-gray-700 outline-none transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#ec744a] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                />
                  <AiOutlineLock className="text-gray-400 mr-2 " size={25} />
                <label
                  className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-black peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-cyan-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-cyan-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                >
                  Password
                </label>
              </div>

              {/* Remember me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center text-sm text-black">
                  <input
                    className="form-checkbox h-4 w-4 text-purple-600 bg-gray-800 border-gray-300 rounded"
                    type="checkbox"
                  />
                  <span className="ml-2">Remember me</span>
                </label>
                <a className="text-sm text-black hover:underline" href="#">
                  Forgot your password?
                </a>
              </div>

              {/* Sign In Button */}
              <button
                className="w-full py-2 px-4 bg-purple-500 hover:bg-purple-700 rounded-md shadow-lg text-white font-semibold transition duration-200"
                type="submit"
              >
                Login
              </button>
            </form>
          </div>
          <div className="text-center text-black mt-4">
            Do not have an account?{' '}
            <Link className="text-[#ec744a] hover:underline" href="/">
              Sign up
            </Link>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="w-full md:w-1/2 h-full bg-[#ececec]">
          <img className="w-full md:mt-[11.2rem] lg:mt-[11.2rem]" src="/logg.png" alt="Login Image" />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Login;
