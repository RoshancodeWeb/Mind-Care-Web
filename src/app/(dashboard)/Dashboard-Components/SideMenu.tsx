import React from "react";
import { MdDashboard } from "react-icons/md";
import { FaPerson } from "react-icons/fa6";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { MdOutlineStickyNote2 } from "react-icons/md";
import { RiLogoutCircleLine } from "react-icons/ri";
import { MdOutlineMore } from "react-icons/md";
import Link from "next/link";

const menu = [
  {
    heading: "Dashboard",
    icon: <MdDashboard className="text-3xl" />,
    subHeading: [
      {
        name: "Appointments",
        icon: <MdOutlineStickyNote2 className="text-2xl md:text-gray-500" />,
        link: "/",
      },
      {
        name: "Patients",
        icon: <FaPerson className="text-2xl md:text-gray-500" />,
        link: "/",
      },
    ],
  },
  {
    heading: "Others",
    icon: <MdOutlineMore className="text-3xl" />,
    subHeading: [
      {
        name: "Guidelines",
        icon: <AiFillSafetyCertificate className="text-2xl md:text-gray-500" />,
        link: "/",
      },
      {
        name: "Logout",
        icon: <RiLogoutCircleLine className="text-2xl md:text-gray-500" />,
        link: "/",
      },
    ],
  },
];

const SideMenu = () => {
  return (
    <div className="w-[20%] md:w-[25%] lg:w-[20%] xl:w-[16%] h-full py-2 px-1">
      {menu.map((item, index) => {
        return (
          <>
            <div
              key={index}
              className="flex items-center md:justify-start justify-center p-1 md:gap-2 md:px-2 md:py-2 border-[1px] border-gray-100 rounded "
            >
              {item.icon}
              <span className="hidden md:block md:text-[15px]">{item.heading}</span>
            </div>
            <div className="options mt-2">
              
              {item.subHeading.map((subItem,index)=>{
                return(
                    <Link href="/" key={index} className="flex items-center md:justify-start justify-center p-1 md:gap-2 md:px-2 md:py-2  hover:bg-gray-200 cursor-pointer">
                    {subItem.icon}
                    <span className="hidden md:block md:text-[13px] md:text-gray-500">
                      {subItem.name}
                    </span>
                    </Link>
                )
              })}

              
              
            </div>
          </>
        );
      })}
    </div>
  );
};

export default SideMenu;
