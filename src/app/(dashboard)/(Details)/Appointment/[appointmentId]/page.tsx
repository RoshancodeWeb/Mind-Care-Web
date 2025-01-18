import Link from "next/link";
import React from "react";
import { IoChevronBackOutline } from "react-icons/io5";
const page = ({ params }: { params: { appointmentId: string } }) => {
  return (
    <div className="w-full h-fit px-2 py-2">
      {/* First Div */}
      <div className="w-full h-fit bg-white shadow-black shadow-md rounded-lg p-2">
        <div className=" border-b-[1px] py-2 flex items-center gap-2 mb-2">
          <Link href="/doctor">
          <IoChevronBackOutline className="text-darkGreen font-bold md:Text-xl" />
          </Link>
          <span className="text-lg font-bold">
            Appointment ID: {params.appointmentId}
          </span>
        </div>
        <p className=" w-fit bg-lightGreen py-2 px-2 rounded-full text-white cursor-pointer">Appointment Information</p>
      </div>

      {/* Second Div */}
      <div className="">

      </div>

    </div>
  );
};

export default page;
