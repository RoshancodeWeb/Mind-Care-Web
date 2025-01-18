import React from 'react'
import GraphOne from './PatientComponent/GraphOne'
import GraphTwo from './PatientComponent/GraphTwo'


const PatientsInfo = () => {
  return (
    <div className='w-full h-fit flex flex-col md:flex-row gap-5 pb-10'>
        <GraphOne/>
        <GraphTwo/>
    </div>

  )
}

export default PatientsInfo