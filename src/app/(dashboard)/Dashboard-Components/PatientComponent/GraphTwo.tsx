"use client"
import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    visited: 4000,
    notvisited: 2400,
    amt: 2400,
  },
  {
    name: 'Tue',
    visited: 3000,
    notvisited: 1398,
    amt: 2210,
  },
  {
    name: 'Wed',
    visited: 2000,
    notvisited: 9800,
    amt: 2290,
  },
  {
    name: 'Thu',
    visited: 2780,
    notvisited: 3908,
    amt: 2000,
  },
  {
    name: 'Fri',
    visited: 1890,
    notvisited: 4800,
    amt: 2181,
  },
  {
    name: 'Sat',
    visited: 2390,
    notvisited: 3800,
    amt: 2500,
  },
  {
    name: 'Sun',
    visited: 2390,
    notvisited: 3800,
    amt: 2500,
  }
  
];

const GraphTwo = () => {
  return (
    <div className="w-[90%] md:w-[48%] h-[200px] md:h-[250px] bg-white shadow-black  shadow-md p-2 rounded-md">
      <p className="">Patients</p>
      <div className="w-full h-[150px] md:h-[200px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          barSize={10}
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="visited" fill="#128772" activeBar={<Rectangle fill="#78e0cd" stroke="blue" />} radius={[10, 10, 0, 0]} />
          <Bar dataKey="notvisited" fill="#EB744C" activeBar={<Rectangle fill="#ee8a69" stroke="purple" />} radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
      </div>
    </div>
  )
}

export default GraphTwo