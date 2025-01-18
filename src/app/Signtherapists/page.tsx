'USE Client';
import Navbar from '@/Components/Navbar';
import React from 'react'
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai';
import { AiOutlineFile } from 'react-icons/ai';
import Footer from '../SubComponents/Footer';
const Signtherapists = () => {
    
  return (
    <div className="w-full h-full mt-[2.5rem]">
    <Navbar/>
    <div className="flex flex-col md:flex-col lg:flex-row h-[100vh] ">
      {/* Left Section - Login Form */}
      <div className="w-full  md:w-3/4/2 h-[20rem] sm:h-[25rem] md:h-full lg:h-full bg-[#ececec] flex justify-center items-center">
  <img
    className="w-full h-full md:w-auto lg:mt-[11rem] lg:overflow-hidden md:h-[30rem] lg:h-[32rem] object-contain"
    src="/logg.png"
    alt="Login Image"
  />
</div>
      <div className="w-full lg:w-2/3   xl:w-1/2 h-auto bg-[#ececec] flex flex-col justify-center  items-center px-4 sm:px-8 md:px-16 py-8">
      <div className="text-center  md:mt-3 mb-8">
    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-4xl font-bold text-black">Sign Up to Your Account</h1>
    <p className="text-base sm:text-lg lg:text-xl mt-[1rem] text-[#ec835e]">Please Sign Up Using Your Details Below</p>
  </div>

        <div className="w-full md:w-[30rem] lg:w-[44rem] bg-[#d9d9d9] rounded-xl shadow-2xl p-6 sm:p-8 space-y-6 md:space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-500 text-center">Welcome Mind Care</h2>

          <form method="POST" action="#" className="space-y-4 sm:space-y-6">
            {/* Email Input */}
            <div className="relative md:gap-[2rem] lg:gap:[2rem] gap-0 rounded-lg h-auto w-full min-w-[200px] flex flex-col lg:flex-row md:flex-row lg:items-center md:items-center">
      {/* Full Name Input */}
      <div className="relative bg-white rounded-lg h-11 w-full min-w-[200px] flex items-center">
        <input
          placeholder=""
          className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 pl-10 font-sans text-sm font-normal text-blue-gray-700 outline-none transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#ec744a] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
        />
        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-black peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-cyan-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-cyan-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          Full Name
        </label>
      </div>

      {/* File Upload Input */}
      <div className="relative bg-white rounded-lg h-11 w-full min-w-[200px] flex items-center pl-[4.4rem] mt-4 lg:mt-0">
        <input
          placeholder=""
          className="file-input w-full max-w-xs"
          type="file"
          name="avatar"
        />
        <label className="pointer-events-none absolute left-2 top-3 flex h-full w-full select-none text-[15px] font-normal">
          Profile
        </label>
        <AiOutlineFile className="text-gray-500 mr-2 lg:flex md:flex hidden " size={25} />
      </div>
    </div>

            {/* Password Input */}
            <div className="relative bg-white rounded-lg h-11 w-full min-w-[200px] flex items-center">
            
              <input
                placeholder=""
                type="Email"
                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 pl-10 font-sans text-sm font-normal text-blue-gray-700 outline-none transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#ec744a] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              />
                 <AiOutlineMail className="text-gray-500 mr-2 " size={25} />
              <label
                 className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-black peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-cyan-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-cyan-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
              >
                Email
              </label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative bg-white rounded-lg h-11 w-full flex items-center">
          <input
            type="password"
            placeholder=""
            className="peer h-full w-full rounded-md border border-gray-200 bg-transparent px-3 py-2 text-sm focus:border-[#ec744a] outline-none"
          />
          <AiOutlineLock className="absolute right-3 text-gray-500" size={20} />
          <label  className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-black peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-cyan-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-cyan-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">Password</label>
        </div>
        <div className="relative bg-white rounded-lg h-11 w-full flex items-center">
          <input
            type="password"
            placeholder=""
            className="peer h-full w-full rounded-md border border-gray-200 bg-transparent px-3 py-2 text-sm focus:border-[#ec744a] outline-none"
          />
          <AiOutlineLock className="absolute right-3 text-gray-500" size={20} />
          <label  className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-black peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-cyan-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-cyan-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">Repeat Password</label>
        </div>
      </div>
          <div className="relative md:gap-[2rem] lg:gap:[2rem] gap-0 rounded-lg h-auto w-full min-w-[200px] flex flex-col lg:flex-row md:flex-row lg:items-center md:items-center">
          <div className="relative bg-white rounded-lg h-11 w-full min-w-[200px] flex items-center pl-[4.4rem] ">
        <input
          placeholder=""
          className="file-input w-full max-w-xs"
          type="file"
          name="avatar"
        />
        <label className="pointer-events-none absolute left-2 top-3 flex h-full w-full select-none text-[15px] font-normal">
        License 
        </label>
        <AiOutlineFile className="text-gray-500 mr-2 lg:flex md:flex hidden " size={25} />
      </div>
      
      {/* Full Name Input */}
      <div className="relative bg-white rounded-lg h-11 w-full lg:mt-0 mt-4 min-w-[200px] flex items-center">
        <input
          placeholder=""
          className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 pl-10 font-sans text-sm font-normal text-blue-gray-700 outline-none transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#ec744a] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
        />
        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-black peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-cyan-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-cyan-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          Country
        </label>
      </div>

      {/* File Upload Input */}
     
    </div>

            {/* Remember me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm text-black">
                <input
                  className="form-checkbox h-4 w-4 text-purple-600 bg-gray-800 border-gray-300 rounded"
                  type="checkbox"
                />
                <span className="ml-2">I agree to HelloSelf contacting me about their services</span>
              </label>
            
            </div>
           

            {/* Sign In Button */}
            <button
              className="w-full py-2 px-4 bg-purple-500 hover:bg-purple-700 rounded-md shadow-lg text-white font-semibold transition duration-200"
              type="submit" 
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className="text-center text-black mt-4">
          Do not have an account?{' '}
          <a className="text-[#ec744a] hover:underline" href="/Login">
            Login
          </a>
        </div>
      </div>

      {/* Right Section - Image */}
     
    </div>
    <Footer/>
  </div>
  )
}

export default Signtherapists
