export const Service=()=>{
    return(
        <div className='w-full bg-[#ececec]'>
          <div className='w-full py-8 mt-10 text-center'>
            <h1 className='text-black font-bold text-3xl sm:text-4xl lg:text-6xl'>Services</h1>
            <h2 className='text-black font-normal text-xl sm:text-2xl lg:text-3xl mt-4'>
              Empowering Minds Our Mind Care Consulting Services
            </h2>
          </div>
          <div className='flex flex-wrap justify-around gap-8 mt-[5rem] px-4'>
            <div className="relative flex flex-col w-full sm:w-72 md:w-80 lg:w-[22rem] rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-500 bg-clip-border text-white shadow-lg">
                <img className='w-full h-full object-cover' src='/prod.png' alt="Product" />
              </div>
              <div className="p-6 text-center">
                <h5 className="mb-2 text-black text-xl sm:text-2xl font-semibold">
                  Our <span className='text-[#ec744a]'>Product</span>
                </h5>
                <p className="text-sm sm:text-base text-black">
                  Our product offers mental health care plans crafted by expert professionals, providing comprehensive support.
                </p>
              </div>
              <div className="p-6 pt-0 text-center">
                <button className="select-none rounded-lg bg-[#ec744a] py-3 px-6 text-xs sm:text-sm lg:text-base font-bold uppercase text-white shadow-md transition-all hover:shadow-lg">
                  See Detail
                </button>
              </div>
            </div>
        
            <div className="relative flex flex-col w-full sm:w-72 md:w-80 lg:w-[22rem] rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-500 bg-clip-border text-white shadow-lg">
                <img className='w-full h-full object-cover' src='/appoint.png' alt="Appoint Us" />
              </div>
              <div className="p-6 text-center">
                <h5 className="mb-2 text-black text-xl sm:text-2xl font-semibold">
                  Appoint <span className='text-[#ec744a]'>Us</span>
                </h5>
                <p className="text-sm sm:text-base text-black">
                  Choose Our Mind Care Consultancy for personalized, expert mental health support that prioritizes your well-being.
                </p>
              </div>
              <div className="p-6 pt-0 text-center">
                <button className="select-none rounded-lg bg-[#ec744a] py-3 px-6 text-xs sm:text-sm lg:text-base font-bold uppercase text-white shadow-md transition-all hover:shadow-lg">
                  See Detail
                </button>
              </div>
            </div>
        
            <div className="relative flex flex-col w-full sm:w-72 md:w-80 lg:w-[22rem] rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-500 bg-clip-border text-white shadow-lg">
                <img className='w-full h-full object-cover' src='/stress.png' alt="Release Stress" />
              </div>
              <div className="p-6 text-center">
                <h5 className="mb-2 text-black text-xl sm:text-2xl font-semibold">
                  Release <span className='text-[#ec744a]'>Stress</span>
                </h5>
                <p className="text-sm sm:text-base text-black">
                  Let go of stress with Our Mind Care Consultancy. Our expert-guided techniques and care plans for your help.
                </p>
              </div>
              <div className="p-6 pt-0 text-center">
                <button className="select-none rounded-lg bg-[#ec744a] py-3 px-6 text-xs sm:text-sm lg:text-base font-bold uppercase text-white shadow-md transition-all hover:shadow-lg">
                  See Detail
                </button>
              </div>
            </div>
          </div>
          </div>
    )
}