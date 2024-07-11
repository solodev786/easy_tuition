import { Rowdies } from "next/font/google";
import React from "react";

const rowdies = Rowdies({ subsets: ["latin"], weight: "400" });

function Section_five() {
  return (
    <div className=" px-16 w-full flex flex-col gap-16 items-center">
      <div className=" flex flex-col gap-5 items-center">
        <h1
          className={`${rowdies.className} bg-gradient-to-r from-blue-900 to-[#7ACFD0] bg-clip-text text-transparent text-5xl font-semibold`}
        >
          Study meterial
        </h1>
        <h1 className=" text-gray-500 text-xl">
          We have tons of usefull study meterials
        </h1>
      </div>
      <div className=" flex items-center gap-10 justify-center w-full">
        <div className=" w-1/3 h-80 border border-black rounded-3xl px-10 py-10 flex flex-col gap-5">
          <h1 className=" text-2xl font-semibold">Newton's Law</h1>
          <h1 className=" w-full">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
            necessitatibus nisi explicabo nulla rerum eius consequatur, tenetur,
            nam, soluta beatae ratione similique.
          </h1>
          <div className=" flex items-center justify-between w-full">
            <h1>Class 8 - CBSC</h1>
            <div className="flex items-center rounded-2xl justify-center w-32 h-12 border border-black">
              <h1 className=" underline">View</h1>
            </div>
          </div>
        </div>
        <div className=" w-1/3 h-80 border border-black rounded-3xl px-10 py-10 flex flex-col gap-5">
          <h1 className=" text-2xl font-semibold">Newton's Law</h1>
          <h1 className=" w-full">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
            necessitatibus nisi explicabo nulla rerum eius consequatur, tenetur,
            nam, soluta beatae ratione similique.
          </h1>
          <div className=" flex items-center justify-between w-full">
            <h1>Class 8 - CBSC</h1>
            <div className="flex items-center rounded-2xl justify-center w-32 h-12 border border-black">
              <h1 className=" underline">View</h1>
            </div>
          </div>
        </div>
        <div className=" w-1/3 h-80 border border-black rounded-3xl px-10 py-10 flex flex-col gap-5">
          <h1 className=" text-2xl font-semibold">Newton's Law</h1>
          <h1 className=" w-full">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
            necessitatibus nisi explicabo nulla rerum eius consequatur, tenetur,
            nam, soluta beatae ratione similique.
          </h1>
          <div className=" flex items-center justify-between w-full">
            <h1>Class 8 - CBSC</h1>
            <div className="flex items-center rounded-2xl justify-center w-32 h-12 border border-black">
              <h1 className=" underline">View</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section_five;
