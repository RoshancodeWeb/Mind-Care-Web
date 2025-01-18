import { Sun, TrendingUp } from '@geist-ui/icons'
import React from 'react'

const Mentor = () => {
  return (
    <div className='w-full md:h-[85vh] h-auto mt-[10rem]  md:mt-[18rem] flex  flex-col md:flex-row items-center justify-center relative'>
    <div style={{ backgroundImage: `url('/join.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='w-full h-[120vh] md:h-[60vh] flex flex-col md:flex-row justify-between items-center p-6 md:p-12 rounded-lg shadow-lg'>
    {/* Image Section */}
    <div className='relative top-[-8rem] md:top-[-7rem] mb-8 md:mb-0'>
      <img className='w-[28rem] h-65 sm:w-70 sm:h-70 md:w-[30rem] md:h-[28rem] lg:w-[35rem] lg:h-[33rem]' src='ment.png' alt="Mentor" />
    </div>
    
    {/* Text Content */}
    <div className="flex flex-col items-start md:w-1/2  mt-[-8rem]  md:mt-0 md:ml-10 px-4 md:px-0 space-y-6">
      <h2 className="text-white text-2xl sm:text-3xl font-semibold ">Mentor</h2>
      <h3 className="text-white text-xl  sm:text-2xl md:text-3xl font-bold ">
        Introducing Experienced Consulting
      </h3>
      <div className="space-y-6 ">
        {/* Professional Growth Section */}
        <div>
          <h4 className="text-lg sm:text-xl font-semibold text-white flex items-center mb-2">
            <TrendingUp className="w-6 h-6 mr-2 text-white" />
            Professional Growth
          </h4>
          <p className="text-sm sm:text-base text-white leading-relaxed">
            Elevate your career with Our Mind Care Consultancy. We offer tailored strategies and expert guidance to enhance your professional growth, empowering you to achieve your goals and reach new heights in your career.
          </p>
        </div>
        {/* Reduced Burnout Section */}
        <div>
          <h4 className="text-lg sm:text-xl font-semibold text-white flex items-center mb-2">
            <Sun className="w-6 h-6 mr-2 text-white" />
            Reduced Burnout
          </h4>
          <p className="text-sm sm:text-base text-white leading-relaxed">
            Combat burnout with Our Mind Care Consultancy. Our personalized care plans and stress management techniques are designed to help.
          </p>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Mentor