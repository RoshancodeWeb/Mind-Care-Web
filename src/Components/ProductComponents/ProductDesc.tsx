import React from 'react'

const ProductDesc = () => {
  return (
    <div
    className="w-full h-[260px] py-8 px-4 md:px-16 lg:px-32 mt-[4rem]"
    style={{ backgroundImage: `url('/abour.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold">
      Our<span className="font-light text-[#ec744a]"> Product</span>
    </h1>
    <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-[1rem] text-white text-justify">
    Mind Care health products are designed to promote mental well-being, offering therapeutic solutions 
    tailored to individual needs. These products focus on stress management, enhancing emotional balance, 
    and fostering a healthy lifestyle. Ideal for those seeking mental clarity and overall relaxation.
    </p>
    </div>
  )
}

export default ProductDesc