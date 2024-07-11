import { Rowdies } from "next/font/google";
import React from "react";
import { IoBookSharp } from "react-icons/io5";

const rowdies = Rowdies({ subsets: ["latin"], weight: "400" });

function Section_three() {
  return (
    <div className=" w-full min-h-96 bg-green-50 py-10 flex flex-col gap-10 items-center">
      <div className=" flex flex-col gap-5 items-center">
        <h1 className={`${rowdies.className} text-5xl font-semibold`}>
          Top categories
        </h1>
        <h1 className=" text-gray-500 text-lg">
          12,000+ unique online course list design
        </h1>
      </div>
      <div className=" w-full flex items-center gap-4 justify-center">
        <div className=" bg-white w-44 h-auto rounded-2xl drop-shadow-lg flex flex-col gap-5 items-center py-10">
          <div className=" w-16 h-16 flex items-center justify-center rounded-xl bg-red-500">
            <IoBookSharp className="text-white text-2xl" />
          </div>
          <div className=" flex flex-col gap-1 items-center">
            <h1 className=" text-lg font-semibold">Class 5</h1>
            <h1 className=" text-sm">8 subjects</h1>
          </div>
          <h1 className=" underline">View</h1>
        </div>
        <div className=" bg-white w-44 h-auto rounded-2xl drop-shadow-lg flex flex-col gap-5 items-center py-10">
          <div className=" w-16 h-16 flex items-center justify-center rounded-xl bg-green-500">
            <IoBookSharp className="text-white text-2xl" />
          </div>
          <div className=" flex flex-col gap-1 items-center">
            <h1 className=" text-lg font-semibold">Class 6</h1>
            <h1 className=" text-sm">8 subjects</h1>
          </div>
          <h1 className=" underline">View</h1>
        </div>
        <div className=" bg-white w-44 h-auto rounded-2xl drop-shadow-lg flex flex-col gap-5 items-center py-10">
          <div className=" w-16 h-16 flex items-center justify-center rounded-xl bg-violet-500">
            <IoBookSharp className="text-white text-2xl" />
          </div>
          <div className=" flex flex-col gap-1 items-center">
            <h1 className=" text-lg font-semibold">Class 7</h1>
            <h1 className=" text-sm">8 subjects</h1>
          </div>
          <h1 className=" underline">View</h1>
        </div>
        <div className=" bg-white w-44 h-auto rounded-2xl drop-shadow-lg flex flex-col gap-5 items-center py-10">
          <div className=" w-16 h-16 flex items-center justify-center rounded-xl bg-yellow-600">
            <IoBookSharp className="text-white text-2xl" />
          </div>
          <div className=" flex flex-col gap-1 items-center">
            <h1 className=" text-lg font-semibold">Class 8</h1>
            <h1 className=" text-sm">8 subjects</h1>
          </div>
          <h1 className=" underline">View</h1>
        </div>
        <div className=" bg-white w-44 h-auto rounded-2xl drop-shadow-lg flex flex-col gap-5 items-center py-10">
          <div className=" w-16 h-16 flex items-center justify-center rounded-xl bg-cyan-600">
            <IoBookSharp className="text-white text-2xl" />
          </div>
          <div className=" flex flex-col gap-1 items-center">
            <h1 className=" text-lg font-semibold">Class 9</h1>
            <h1 className=" text-sm">8 subjects</h1>
          </div>
          <h1 className=" underline">View</h1>
        </div>
        <div className=" bg-white w-44 h-auto rounded-2xl drop-shadow-lg flex flex-col gap-5 items-center py-10">
          <div className=" w-16 h-16 flex items-center justify-center rounded-xl bg-green-800">
            <IoBookSharp className="text-white text-2xl" />
          </div>
          <div className=" flex flex-col gap-1 items-center">
            <h1 className=" text-lg font-semibold">Class 10</h1>
            <h1 className=" text-sm">8 subjects</h1>
          </div>
          <h1 className=" underline">View</h1>
        </div>
      </div>
    </div>
  );
}

export default Section_three;
