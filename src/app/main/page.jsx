import React from "react";
import { FaHome } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import { PiStudentFill } from "react-icons/pi";
import { MdAssignment } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
import { PiSignOutBold } from "react-icons/pi";

function page() {
  return (
    <div className=" w-full h-screen bg-violet-500 px-5 py-5 flex justify-start gap-10">
      <div className=" w-16 h-full flex flex-col justify-between items-center py-10 gap-5">
        <div className=" flex flex-col justify-between ">
          <div className=" flex flex-col gap-5 items-center  text-white">
            <div className=" flex flex-col gap-1 items-center">
              <h1 className="text-4xl">
                <FaHome />
              </h1>
              <h1 className=" text-sm">Home</h1>
            </div>
            <div className=" flex flex-col gap-1 items-center">
              <h1 className="text-4xl">
                <IoBookSharp />
              </h1>
              <h1 className=" text-sm">My class</h1>
            </div>
            <div className=" flex flex-col gap-1 items-center">
              <h1 className="text-4xl">
                <PiStudentFill />
              </h1>
              <h1 className=" text-sm">Students</h1>
            </div>
            <div className=" flex flex-col gap-1 items-center">
              <h1 className="text-4xl">
                <MdAssignment />
              </h1>
              <h1 className=" text-sm">Assignment</h1>
            </div>
            <div className=" flex flex-col gap-1 items-center">
              <h1 className="text-4xl">
                <MdOutlinePayment />
              </h1>
              <h1 className=" text-sm">Payments</h1>
            </div>
          </div>
        </div>
        <div>
          <h1 className=" text-4xl text-white">
            <PiSignOutBold />
          </h1>
        </div>
      </div>
      <div className=" w-full bg-whiteh-full rounded-3xl bg-white px-10 py-10">
        <div className=" w-full flex justify-between items-center">
            <div className=" flex flex-col gap-1">
                <h1 className=" text-4xl font-semibold ">Hello Nishila 👋</h1>
            </div>
        </div>
      </div>
    </div>
  );
}

export default page;
