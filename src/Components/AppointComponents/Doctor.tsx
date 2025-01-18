import Link from 'next/link'
import React, { useRef } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { HiLocationMarker, HiPhone } from 'react-icons/hi'

const Doctor = () => {
   const clinics1 = [
      {
        name: "Shifa Mindcare Clinic, Township (Lahore)",
        availability: "Available Sat, Dec 28",
        price: "3,500",
        offer:false,
      },
      {
        name: "Iqra Medical Complex, Akbar Chock",
        availability: "Available Sat, Dec 28",
        price: "3,500",
        offer:true,
      },
      {
        name: "Qari Hospital (Lalazar Colony)",
        availability: "Available tomorrow",
        price: "2,500",
        offer:true,
      },
      {
        name: "Evercare Hospital (NESPAK Society)",
        availability: "Available Sat, Dec 28",
        price: "5,000",
      },
    ];
    const sliderRef = useRef<HTMLDivElement | null>(null);
  
    const scrollLeft = () => {
      if (sliderRef.current) {
        // Assert the type of sliderRef.current as HTMLDivElement
        (sliderRef.current as HTMLDivElement).scrollBy({
          left: -300,
          behavior: "smooth",
        });
      }
    };
  
    const scrollRight = () => {
      if (sliderRef.current) {
        // Assert the type of sliderRef.current as HTMLDivElement
        (sliderRef.current as HTMLDivElement).scrollBy({
          left: 300,
          behavior: "smooth",
        });
      }
    };
  return (
    <div className="lg:w-[85%] md:w-[85%] w-[100%] mt-[3rem] mx-auto p-4 bg-[#ececec]">
    
      <h2 className="text-xl lg:text-3xl font-bold text-gray-800 mb-4">
        Most Experienced Doctors in Mind Care (Lahore)
      </h2>

      {/* Doctor Card */}
      <div className="w-full sm:w-full mt-[2rem]  mx-auto p-4 bg-white shadow-md rounded-lg">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="flex items-center space-x-4 mb-4 lg:mb-0">
          <img
            src="./dod.png"
            alt="Dr. Kamran Ahmed"
            className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full object-cover"
          />
          <div>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">Dr. Kamran Ahmed</h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-500">Psychiatrist</p>
            <p className="text-xs sm:text-sm lg:text-base text-gray-500">MBBS, DPM (Psychiatry), Post Graduate Diploma in CBT</p>
            <div className="flex flex-wrap space-x-4 mt-2">
              <div>
                <p className="text-sm lg:text-base font-semibold">6 Years</p>
                <p className="text-xs lg:text-sm text-gray-500">Experience</p>
              </div>
              <div>
                <p className="text-sm lg:text-base font-semibold">100% (6)</p>
                <p className="text-xs lg:text-sm text-gray-500">Satisfied Patients</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex space-x-2">
        <Link href='/DoctorProfile'>
          <button className="px-2 sm:px-4 lg:px-6 py-1 sm:py-2 text-white bg-[#45a578] hover:bg-[#017e6e]  text-xs sm:text-sm lg:text-base rounded ">
            View Profile
          </button>
          </Link>
          <Link href='/AppointmentSchedule'>
          <button className="px-2 sm:px-4 lg:px-6 py-1 sm:py-2 text-white bg-[#eb744c] hover:bg-orange-600 text-xs sm:text-sm lg:text-base rounded ">
            
            Book Appointment
          
          </button>
          </Link>
        </div>
      </div>
      <div className="w-full sm:w-full lg:w-10/12 mx-auto p-4   rounded-lg">
      <div className="relative">
        {/* Left Button */}
        <button
          onClick={scrollLeft}
          className="absolute lg:left-[-3rem] left-[-2rem] top-1/2 transform -translate-y-1/2 p-2 bg-gray-200 rounded-full hover:bg-gray-300 z-10"
        >
          <FaChevronLeft />
        </button>

        {/* Slider Container */}
        <div
          ref={sliderRef}
          className="flex overflow-x-scroll scrollbar scroll-smooth space-x-4 lg:space-x-6"
        >
          {clinics1.map((clinic, index) => (
            <div
              key={index}
              className="min-w-[300px] lg:min-w-[30%] flex-shrink-0 bg-gray-100 p-4 rounded-lg shadow"
            >
              <p className="text-sm lg:text-base font-medium">{clinic.name}</p>
              <p className="text-sm lg:text-base text-green-600 font-semibold mt-1">
                {clinic.availability}
              </p>
              <p className="text-sm lg:text-base font-semibold mt-1">
                Rs. {clinic.price}
              </p>
              {clinic.offer && (
                <button className="mt-2 w-full text-xs sm:text-sm lg:text-base bg-blue-500 text-white py-1 rounded">
                  Pay Online & Get Up to 10% OFF
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={scrollRight}
          className="absolute lg:right-[-3rem] right-[-2rem] top-1/2 transform -translate-y-1/2 p-2 bg-gray-200 rounded-full hover:bg-gray-300 z-10"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
      </div>


      {/* Contact Section */}
      <div className="bg-white rounded-lg shadow-lg p-4 mt-4">
        <h3 className="text-lg font-semibold text-gray-800">Contact & Location</h3>
        <div className="mt-2 text-gray-700 flex items-start gap-2">
          <HiLocationMarker className="text-blue-600 w-6 h-6" />
          <p>Mind Care, C-93, Block 13, Johar Town, Lahore</p>
        </div>
        <div className="mt-2 text-gray-700 flex items-center gap-2">
          <HiPhone className="text-blue-600 w-6 h-6" />
          <div>
            <p>02138140600</p>
            <p className="text-sm text-gray-500">Call Mon - Sun, 9am to 11pm</p>
          </div>
        </div>
      </div>
     </div> 
  )
}

export default Doctor