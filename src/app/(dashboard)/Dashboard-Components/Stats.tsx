"use client"
import React from "react";
import { FaPerson } from "react-icons/fa6";
import { GiCarSeat } from "react-icons/gi";
import { IoStatsChart } from "react-icons/io5";
import { MdOutlineFeed } from "react-icons/md";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const graphs=[
    {
        icon:<IoStatsChart className="text-[#128772] text-xl" />,
        name:"Total Appointments",
        total:57680
    },
    {
        icon:<FaPerson className="text-[#128772] text-xl" />,
        name:"Total Patients",
        total:400
    },
    {
        icon:<GiCarSeat className="text-[#128772] text-xl" />,
        name:"Total Vacencies",
        total:20
    },
    {
        icon:<MdOutlineFeed className="text-[#128772] text-xl" />,
        name:"Total Reviews",
        total:29
    },
]

const Stats = () => {
  return (
    <div className="w-full  h-fit flex flex-wrap gap-3 md:gap-5 items-center py-4 ">
      {graphs.map((item,index)=>{
        return(
            <div key={index} className="w-[90%] md:w-[48%] h-[120px] bg-white shadow-sm shadow-black rounded-md p-2 flex flex-col gap-4">
            <div className="w-fit flex gap-2  items-center">
              {item.icon}
              <p className="">{item.name}</p>
            </div>
            <div className="w-full flex">
              <p className="text-xl">{item.total}</p>
              <div className="w-[80%] h-[60px] ">
              <ResponsiveContainer width="80%" height="100%">
                <LineChart width={300} height={100} data={data}>
                  <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="#128772"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>     
              </div>
              
            </div>
          </div>
        )
      })}
      
    </div>
  );
};

export default Stats;
