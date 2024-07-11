import Image from "next/image";
import React from "react";
import girl from "../../assets/callGirl.png";
import { Rowdies } from "next/font/google";

const rowdies = Rowdies({ subsets: ["latin"], weight: "400" });

function Section_two() {
  return (
    <div className=" w-full px-16 flex justify-between gap-10 items-center">
      <div className=" w-1/2 ">
        <Image src={girl} />
      </div>
      <div className=" w-1/2 flex flex-col gap-10 ">
        <h1 className={`${rowdies.className} text-3xl w-2/3`}>
          Benifits from out online Learning
        </h1>
        <div className=" flex flex-col gap-5">
          <div className=" flex gap-5 items-center">
            <div className=" w-14 h-14 rounded-full bg-rose-500"></div>
            <div
              className=" flex flex-col gap-1 justify-center
            "
            >
              <h1 className=" font-semibold">A Teacher for a student</h1>
              <h1 className=" text-xs">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
                ex iste placeat,
              </h1>
            </div>
          </div>
          <div className=" flex gap-5 items-center">
            <div className=" w-14 h-14 rounded-full bg-rose-500"></div>
            <div
              className=" flex flex-col gap-1 justify-center
            "
            >
              <h1 className=" font-semibold">1-1 Live class</h1>
              <h1 className=" text-xs">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
                ex iste placeat,
              </h1>
            </div>
          </div>
          <div className=" flex gap-5 items-center">
            <div className=" w-14 h-14 rounded-full bg-rose-500"></div>
            <div
              className=" flex flex-col gap-1 justify-center
            "
            >
              <h1 className=" font-semibold">Monthly Assessments</h1>
              <h1 className=" text-xs">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
                ex iste placeat,
              </h1>
            </div>
          </div>
          <div className=" flex gap-5 items-center">
            <div className=" w-14 h-14 rounded-full bg-rose-500"></div>
            <div
              className=" flex flex-col gap-1 justify-center
            "
            >
              <h1 className=" font-semibold">Individual attention and care</h1>
              <h1 className=" text-xs">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
                ex iste placeat,
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section_two;
