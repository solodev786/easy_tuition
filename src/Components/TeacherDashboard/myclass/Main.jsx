import React from "react";

function Main() {
  return (
    <div className=" w-full  rounded-3xl bg-blue-50 px-10 py-10">
      <div className=" flex flex-col gap-10">
        <h1 className=" text-2xl">Your class</h1>
        <div className=" flex flex-col gap-2">
          <div className=" flex flex-col">
            <h1>Weekly schedules</h1>
            <h1 className=" text-gray-500">
              Today, <span>July 29, tuesday</span>
            </h1>
          </div>
        </div>
        <div className=" flex w-full flex-col gap-5 h-[500px] overflow-scroll">
          <h1>Today</h1>
          <div className=" w-1/3 px-5 py-4 flex justify-between items-center bg-blue-100 rounded-3xl">
            <div className=" flex items-center gap-5">
              <div className=" w-12 h-12 rounded-full bg-gray-500"></div>
              <div className=" flex flex-col">
                <h1>Sushin</h1>
                <h1 className=" text-sm text-gray-500">Biology class</h1>
                <h1 className=" text-xs text-gray-500">10:00 Am - 11:00 Am</h1>
              </div>
            </div>
            <div className=" flex items-center gap-2 text-sm">
              <h1 className=" text-red-500 px-2 py-2 bg-white rounded-xl">
                Postpond
              </h1>
              <h1 className=" text-green-500 px-2 py-2 bg-white rounded-xl">
                Join
              </h1>
            </div>
          </div>
          <div className=" w-1/3 px-5 py-4 flex justify-between items-center bg-blue-100 rounded-3xl">
            <div className=" flex items-center gap-5">
              <div className=" w-12 h-12 rounded-full bg-gray-500"></div>
              <div className=" flex flex-col">
                <h1>Sushin</h1>
                <h1 className=" text-sm text-gray-500">Biology class</h1>
                <h1 className=" text-xs text-gray-500">10:00 Am - 11:00 Am</h1>
              </div>
            </div>
            <div className=" flex items-center gap-2 text-sm">
              <h1 className=" text-red-500 px-2 py-2 bg-white rounded-xl">
                Postpond
              </h1>
              <h1 className=" text-green-500 px-2 py-2 bg-white rounded-xl">
                Join
              </h1>
            </div>
          </div>
          <h1>Tomorrow</h1>
          <div className=" w-1/3 px-5 py-4 flex justify-between items-center bg-blue-100 rounded-3xl">
            <div className=" flex items-center gap-5">
              <div className=" w-12 h-12 rounded-full bg-gray-500"></div>
              <div className=" flex flex-col">
                <h1>Sushin</h1>
                <h1 className=" text-sm text-gray-500">Biology class</h1>
                <h1 className=" text-xs text-gray-500">10:00 Am - 11:00 Am</h1>
              </div>
            </div>
            <div className=" flex items-center gap-2 text-sm">
              <h1 className=" text-red-500 px-2 py-2 bg-white rounded-xl">
                Postpond
              </h1>
              <h1 className=" text-green-500 px-2 py-2 bg-white rounded-xl">
                Join
              </h1>
            </div>
          </div>
          <div className=" w-1/3 px-5 py-4 flex justify-between items-center bg-blue-100 rounded-3xl">
            <div className=" flex items-center gap-5">
              <div className=" w-12 h-12 rounded-full bg-gray-500"></div>
              <div className=" flex flex-col">
                <h1>Sushin</h1>
                <h1 className=" text-sm text-gray-500">Biology class</h1>
                <h1 className=" text-xs text-gray-500">10:00 Am - 11:00 Am</h1>
              </div>
            </div>
            <div className=" flex items-center gap-2 text-sm">
              <h1 className=" text-red-500 px-2 py-2 bg-white rounded-xl">
                Postpond
              </h1>
              <h1 className=" text-green-500 px-2 py-2 bg-white rounded-xl">
                Join
              </h1>
            </div>
          </div>
          <div className=" w-1/3 px-5 py-4 flex justify-between items-center bg-blue-100 rounded-3xl">
            <div className=" flex items-center gap-5">
              <div className=" w-12 h-12 rounded-full bg-gray-500"></div>
              <div className=" flex flex-col">
                <h1>Sushin</h1>
                <h1 className=" text-sm text-gray-500">Biology class</h1>
                <h1 className=" text-xs text-gray-500">10:00 Am - 11:00 Am</h1>
              </div>
            </div>
            <div className=" flex items-center gap-2 text-sm">
              <h1 className=" text-red-500 px-2 py-2 bg-white rounded-xl">
                Postpond
              </h1>
              <h1 className=" text-green-500 px-2 py-2 bg-white rounded-xl">
                Join
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
