"use client"
import React, { useState } from 'react'

const Faq = () => {
    const faqs = [
        {
          question: 'What is Mind Care Consultancy?',
          answer:
            'Mind Care Consultancy is a platform offering personalized mental health support through professional guidance tailored to individual needs.',
        },
        {
          question: 'How can I schedule an appointment?',
          answer:
            'You can schedule an appointment by visiting our website and selecting the “Book an Appointment” option. Follow the on-screen instructions to choose your preferred date and time.',
        },
        {
          question: 'Are your services available online?',
          answer:
            'Yes, we offer both online and in-person services. Our online consultations are conducted through secure video conferencing platforms.',
        },
      ];
    
      const [openIndex, setOpenIndex] = useState<number | null>(0);
    
      const toggleFAQ = (index:number) => {
        // Toggle the FAQ; if the same index is clicked, close it, otherwise open it
        setOpenIndex(openIndex === index ? null : index);
      };
  return (
    <div className="px-4 md:px-8 lg:px-16 py-8 bg-[#ececec]">
      <div className='w-[100%] text-center mt-[5rem]'>
        <h1 className="text-[2.5em] font-bold text-black">
          Navigating Mind Care <span className="text-orange-500">Consultation</span> Commonly
        </h1>
        <h1 className='text-[1.8rem] text-black'>Asked Questions</h1>
      </div>
      <div className="space-y-4 mt-[3rem]">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4 md:p-6 lg:p-8">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg md:text-xl lg:text-2xl font-medium">{faq.question}</h3>
              <span className="text-xl md:text-2xl">
                {openIndex === index ? '⛑' : '⛑'}
              </span>
            </div>
            {openIndex === index && (
              <p className="mt-3 text-sm md:text-base lg:text-lg text-gray-700">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
</div>
  )
}

export default Faq