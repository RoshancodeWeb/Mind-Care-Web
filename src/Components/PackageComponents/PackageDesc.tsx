import React from 'react'

const PackageDesc = () => {
  return (
    <div
      className="w-full h-[260px] py-8 px-4 md:px-16 lg:px-32 mt-[4rem]"
      style={{ backgroundImage: `url('/abour.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold">
        Appointment <span className="font-light text-[#ec744a]">Packages</span>
      </h1>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-[2rem] text-white text-justify">
      Choose the package that suits your needs, whether you are starting out, need consistent support, or are looking for comprehensive, long-term care.
      Our flexible options are designed to fit your unique requirements and help you achieve the best possible outcome.
      </p>
    </div>
  )
}

export default PackageDesc