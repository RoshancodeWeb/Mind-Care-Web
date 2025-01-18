import React from 'react'

const Values = () => {
  return (
    <div className="w-full h-auto py-6 md:py-10 flex flex-row justify-around items-center bg-[#118771]">
  {/* Experience */}
  <div className="text-center">
    <h1 className="text-lg md:text-2xl lg:text-3xl font-semibold text-white">Experience</h1>
    <div className="flex items-center justify-center gap-1">
     
      <p className="text-lg md:text-xl lg:text-2xl text-white font-bold">8 +</p>
    </div>
  </div>

  {/* Team */}
  <div className="text-center">
    <h1 className="text-lg md:text-2xl lg:text-3xl font-semibold text-white">Team</h1>
    <div className="flex items-center justify-center gap-1">
      
      <p className="text-lg md:text-xl lg:text-2xl text-white font-bold">120 +</p>
    </div>
  </div>

  {/* Clients */}
  <div className="text-center">
    <h1 className="text-lg md:text-2xl lg:text-3xl font-semibold text-white">Clients</h1>
    <div className="flex items-center justify-center gap-1">
      <p className="text-lg md:text-xl lg:text-2xl text-white font-bold">563 +</p>
    </div>
  </div>

  {/* Treatment Successful */}
  <div className="text-center">
    <h1 className="text-lg md:text-2xl lg:text-3xl font-semibold text-white">Treatment</h1>
    <div className="flex items-center justify-center gap-1">
    
      <p className="text-lg md:text-xl lg:text-2xl text-white font-bold">100 %</p>
    </div>
  </div>
   </div>
  )
}

export default Values