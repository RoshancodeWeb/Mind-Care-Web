import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";
import Image from "next/image";
import { CiBellOn } from "react-icons/ci";
const Navbar = () => {
  return (
    <div className="w-full h-[80px]  md:h-[110px] border-b-2  border-gray-200 flex items-center justify-between pl-2">
           <Image src="/log.png" width={100} height={100} className="md:pr-1 md:w-56 asm:-mt-2" alt="mindcare"/>
           <div className="w-full h-full  flex items-center justify-between px-2  border-gray-200">
              <p className="font-semibold md:font-normal  mt-2  aasm:text-[17px] text-sm leading-tight asm:text-[15px] md:text-2xl"><span>🌞</span>Good Morning,<br className='asm:hidden'></br>Dr Rober</p>
              <div className="w-fit h-full flex items-center justify-end gap-2">
                 <div className="w-fit h-full relative group  flex items-center">
                  <div className="w-fit h-fit relative">
                     <CiBellOn className="text-2xl cursor-pointer md:text-3xl"/>
                     <span className="w-2 h-2 bg-red-500 -top-1 right-0 rounded-full absolute" ></span>
                  </div>
                   <ul className="w-[190px] md:w-[230px] h-fit absolute top-[75px] md:top-[65px] bg-white-500 shadow-sm shadow-slate-600 bg-white z-50 -left-32 md:-left-44 rounded-[5px] hidden group-hover:block md:text-xl ">
                     <li className="w-full h-fit flex justify-between items-center px-2 py-2 border-b-[1px]  border-gray-200  cursor-pointer hover:bg-gray-200"><span>Notification 1</span> <span className="w-2 h-2 bg-green-600 rounded-full"></span></li>
                     <li className="w-full h-fit flex justify-between items-center px-2 py-2 border-b-[1px]  border-gray-200  cursor-pointer hover:bg-gray-200"><span>Notification 1</span> <span className="w-2 h-2 bg-green-600 rounded-full"></span></li>
                     <li className="w-full h-fit flex justify-between items-center px-2 py-2 border-b-[1px]  border-gray-200  cursor-pointer hover:bg-gray-200"><span>Notification 1</span> <span className="w-2 h-2 bg-green-600 rounded-full"></span></li>
                     <li className="w-full h-fit flex justify-between items-center px-2 py-2 border-b-[1px]  border-gray-200  cursor-pointer hover:bg-gray-200"><span>Notification 1</span> <span className="w-2 h-2 bg-green-600 rounded-full"></span></li>
                     <li className="w-full h-fit flex justify-between items-center px-2 py-2 cursor-pointer hover:bg-gray-200"><span>Notification 1</span> <span className="w-2 h-2 bg-green-600 rounded-full"></span></li>
                   </ul>    
                 </div>
                 <Avatar className="w-10 h-10 md:w-12 md:h-12">
                   <AvatarImage src="https://github.com/shadcn.png" />
                   <AvatarFallback>CN</AvatarFallback>
                 </Avatar>
              </div>
           </div>
        </div>
  )
}

export default Navbar