import React from 'react'
import { FiCheckCircle } from 'react-icons/fi';

const Plans = () => {
    const packages = [
        {
          title: 'Basic',
          price: '$49/Month',
          features: [
            '30 minutes per session',
            'Single session',
            'Initial assessment and recommendations',
            'Affordable, time-efficient',
            'One consultation with a licensed professional',
          ],
          bgColor: 'bg-transparent',
          border:'border-2 border-[#ea580c]',
        },
        {
          title: 'Standard',
          price: '$99/Month',
          features: [
            '1 hour per session',
            'Weekly appointments for one month',
            'Comprehensive consultations',
            'Personalized guidance and progress tracking',
            'Consistent, reliable care.',
          ],
          bgColor: 'bg-[#3da177]',
          textColor: 'text-white',
        },
        {
          title: 'Premium',
          price: '$199/Month',
          features: [
            '1.5 hour per session.',
            '24/7 Support',
            'Exclusive Resources',
            'Daily Follow-ups',
            'Detailed mental health assessments',
          ],
          bgColor: 'bg-transparent',
        },
      ];
  return (
    <div className='w-full mt-[2rem] bg-[#ececec]'>
  <div className='w-full text-center  md:mt-[8rem]'>
    <h1 className='text-[2rem] md:text-[3rem] font-bold text-black'>
    Choose of Mental Health Consultation 
    </h1>
    <h1 className='text-[2rem] md:text-[3rem] text-black'>
    Packages for Your Needs
    </h1>
  </div>

  <div className="container mt-[4rem] ml-auto mr-auto px-4 py-10">
    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((pkg, index) => (
          <div key={index} className={`p-6 rounded-lg  shadow-lg ${pkg.bgColor} border-2 border-[#ea580c] hover:shadow-2xl transition duration-300`}>
            <h3 className={`text-2xl font-semibold  ${pkg.textColor} mb-2`}>{pkg.title}</h3>
            <p className={`text-4xl text-center font-bold ${pkg.textColor} mb-4`}>{pkg.price}</p>
            <ul className={`space-y-2 mb-6 ${pkg.textColor === 'text-white' ? 'text-white' : 'text-black'}`}>
              {pkg.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <FiCheckCircle className="text-green-500 mr-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full bg-[#eb744c] cursor-pointer text-white font-semibold py-2 rounded-lg">
              Select Plan
            </button>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Plans