import React from "react";
import { BiVideo } from 'react-icons/bi';
import Link from "next/link";
import Footer from "../SubComponents/Footer";
import Navbar from "@/Components/Navbar";
const DoctorProfile = () => {
  return (
   <div>
    <Navbar/>
    <div className="lg:w-[85%] md:w-[85%] w-[90%] mt-[1rem] lg:mt-[3rem]  mx-auto py-8">
      {/* Breadcrumb */}

      {/* Doctor Information Section */}
      <div className="flex flex-wrap lg:flex-nowrap gap-8">
        {/* Left Section */}
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-4">
            <img
               src="./dod.png"
            alt="Dr. Kamran Ahmed"
              className="lg:w-28 lg:h-28 w-24 h-24 rounded-full"
            />
            <div>
              <h1 className="text-xl lg:text-2xl font-bold">Dr. Kamran Ahmed</h1>
              <p className="text-gray-800">Psychiatrist</p>
              <p className="text-gray-800">MBBS, DPM (Psychiatry), Post Graduate Diploma in CBT</p>
            </div>
          </div>
          <div className="flex justify-between text-md text-gray-600 mb-6">
            <div>
              <span className="font-semibold text-gray-800">Wait Time:</span> 15 - 30 Min
            </div>
            <div>
              <span className="font-semibold text-gray-800">Experience:</span> 6 Years
            </div>
            <div>
              <span className="font-semibold text-gray-800">Satisfied Patients:</span> 100% (6)
            </div>
          </div>

          {/* Reviews Section */}
          <div>
            <h2 className="font-bold text-lg mb-4">Dr. Kamran Ahmed Reviews (275)</h2>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#ffffff] flex  items-center justify-center text-lg font-bold rounded-full">
                98%
              </div>
              <p className="ml-4">Satisfied out of 275 patients</p>
            </div>
            <ul className="text-sm text-gray-600 mb-4">
              <li className="flex justify-between">
                Doctor Checkup <span>97%</span>
              </li>
              <li className="flex justify-between">
                Clinic Environment <span>97%</span>
              </li>
              <li className="flex justify-between">
                Staff Behaviour <span>97%</span>
              </li>
            </ul>
            <blockquote className="border-l-4 border-blue-500 pl-4 text-gray-700 text-sm">
              “Dr. Kamran Ahmed is such a very best Dr. I am totally satisfy”
              <br />
              <span className="text-gray-500 text-xs">
                Verified patient: K*** ***d &nbsp;•&nbsp; 17 days ago
              </span>
            </blockquote>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full  lg:w-1/3">
          {/* Clinic Cards */}
          <div className="bg-white  shadow-md rounded-lg p-4 mb-6">
            <h3 className="text-orange-500 font-bold mb-2">Mind Care Clinic (Lahore)</h3>
            <p className="text-sm text-gray-600">Fee: <span className="font-semibold">Rs. 2,500</span></p>
            <p className="text-sm text-gray-600">
              Address: Mind Care, C-93, Block 13, Jhor Town, Lahore
            </p>
            <p className="text-green-600 text-sm mt-2">
              Available Thu, Dec 26 &nbsp;•&nbsp; 11:00 AM - 01:00 PM
            </p>
            <Link href='/AppointmentSchedule'>
            <button className="w-full  bg-[#eb744c] hover:bg-orange-600 text-white py-2 rounded mt-4">
             
              Book Appointment
            
            </button>
            </Link>
          </div>
          <div className="bg-white   shadow-md rounded-lg p-4">
            <h3 className="text-orange-500 font-bold mb-2"> Sehat e Shahfa Hospital (Lahore)</h3>
            <p className="text-sm text-gray-600">Fee: <span className="font-semibold">Rs. 1,500</span></p>
            <p className="text-sm text-gray-600">
              Address: ST-19, Block-15, KDA Scheme No. 36, Lahore
            </p>
            <p className="text-green-600 text-sm mt-2">
              Available Thu, Dec 26 &nbsp;•&nbsp; 11:00 AM - 01:00 PM
            </p>
            <Link href='/AppointmentSchedule'>
            <button className="w-full  bg-[#eb744c] hover:bg-orange-600 text-white py-2 rounded mt-4">
            
              Book Appointment
             
            </button>
            </Link>
          </div>
        </div>
      </div>
      

      <div className="w-full mx-auto lg:mt-[2rem] py-8">
      <div className="flex flex-wrap lg:flex-nowrap gap-8">
        {/* Left Section */}
        <div className="flex-1">
          {/* Services Section */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Services</h2>
              <a href="#" className="text-blue-500 text-sm">
                (View all)
              </a>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-md text-black">
              <li>
                Anxiety Disorders Treatment <span className="text-black">(بے چینی کی شکایت کا علاج)</span>
              </li>
              <li>
                Bipolar Disorder Treatment <span className="text-black">(دو قطبی عارضہ کا علاج)</span>
              </li>
              <li>
                Depression Treatment <span className="text-black">(ڈپریشن کا علاج)</span>
              </li>
              <li>
                Mental Health Treatment <span className="text-black">(دماغی صحت سے متعلق علاج)</span>
              </li>
              <li>
                Psychiatric Consultation And Management{" "}
                <span className="text-black">(نفسیاتی مشاورت)</span>
              </li>
            </ul>
          </div>

          {/* Conditions Treated Section */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Conditions Treated</h2>
              <a href="#" className="text-blue-500 text-sm">
                (View all)
              </a>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-md text-black">
              <li>
                Anxiety <span className="text-black">(اضطراب/بےچینی)</span>
              </li>
              <li>
                Anxiety Disorder <span className="text-black">(اضطرابی بیماری)</span>
              </li>
              <li>
                Attention Deficit Hyperactivity Disorder (ADHD){" "}
                <span className="text-black">(اے ڈی ایچ ڈی)</span>
              </li>
              <li>
                Bipolar Disorder <span className="text-black">(بائی پولر ڈس آرڈر)</span>
              </li>
              <li>
                Depression <span className="text-black">(ذہنی دباؤ/ڈپریشن)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-[100%] lg:w-1/3">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-blue-700 font-bold text-lg mb-4">
              Online Video Consultation
            </h3>
            <div className="bg-blue-100 text-blue-500 text-center text-sm font-medium px-4 py-2 rounded mb-4">
              Pay Online & Get 10% OFF
            </div>
            <p className="text-sm text-gray-600">
              Fee: <span className="font-semibold">Rs. 2,000</span>
            </p>
            <p className="text-sm text-gray-600">
              Address: Use phone/laptop for video call
            </p>
            <p className="text-green-600 text-sm mt-2">
              Available today &nbsp;•&nbsp; 09:00 AM - 10:00 PM
            </p>
            <button className="w-full bg-[#45a578] hover:bg-[#017e6e] text-white py-2 rounded mt-4 flex  items-center justify-center">
            <BiVideo className="text-white mr-2" size={25} />

              Book Video Consultation
            </button>
            <ul className="text-sm text-gray-600 mt-6 space-y-2">
              <li className="flex items-center">
                <span className="material-icons text-gray-500 mr-2">Support :</span>
                Priority customer support
              </li>
              <li className="flex items-center">
                <span className="material-icons text-gray-500 mr-2">Security :</span>
                100% secure
              </li>
              <li className="flex items-center">
                <span className="material-icons text-gray-500 mr-2">Schedule :</span>
                Book Appointment in 30 sec
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
    
    <Footer/>
    </div>
    
  );
};

export default DoctorProfile;
