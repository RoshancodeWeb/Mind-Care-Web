import React from 'react'
import Stats from '../Dashboard-Components/Stats'
import PatientsInfo from '../Dashboard-Components/PatientsInfo'
import Appointment from '../lists/appointment'

const page = () => {
  return (
    <div className="w-[80%] md:w-[75%] lg:w-[80%] xl:w-[84%] h-screen  overflow-y-scroll md:px-4 ">
          <Stats/>
          <PatientsInfo/>
          <Appointment/>
    </div>
  )
}
export default page