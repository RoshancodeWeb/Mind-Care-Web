import React from 'react'

const ContactDesc = () => {
  return (
    <div
      className="w-full h-[260px] py-8 px-4 md:px-16 lg:px-32 mt-[4rem]"
      style={{ backgroundImage: `url('/abour.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold">
        Contact <span className="font-light text-[#ec744a]">Us</span>
      </h1>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-[2rem] text-white text-justify">
        You can also use our convenient contact form to send us a message directly. We strive to respond to all inquiries promptly.
        Mind Care provides multiple contact options and a user-friendly contact form to make it easy for you to get in touch with us.
        Whether you prefer to email, call, or fill out a form, we are here to listen and provide the support you need.
      </p>
    </div>
  )
}

export default ContactDesc