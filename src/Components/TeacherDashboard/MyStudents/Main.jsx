import React from "react";

function Main() {
  return (
    <div className=" w-full  rounded-3xl bg-blue-50 px-10 py-10">
      <div className=" flex flex-col gap-10">
        <div className=" flex items-center gap-5">
          <div className=" w-52 h-20 bg-gradient-to-r from-violet-600 to-violet-400 rounded-3xl flex items-center justify-start px-5">
            <div className=" flex flex-col gap-1 text-white">
              <h1 className="">Total students</h1>
              <h1 className=" text-2xl font-bold">2</h1>
            </div>
          </div>
          <div className=" w-52 h-20 bg-gradient-to-r from-gray-200 to-gray-300 rounded-3xl flex items-center justify-start px-5">
            <div className=" flex flex-col gap-1 text-black">
              <h1 className="">Graduated students</h1>
              <h1 className=" text-2xl font-bold">1</h1>
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-5">
          <h1>My students</h1>
          <div className=" flex flex-wrap items-center gap-5">
            <div className=" flex items-center w-96 justify-between px-5 h-auto py-2 min-h-20 bg-white drop-shadow-xl rounded-3xl">
              <div className=" flex items-center gap-5">
                <div className=" w-12 h-12 rounded-full bg-violet-600"></div>
                <div className=" flex flex-col">
                  <h1 className=" ">Febin</h1>
                  <h1 className=" text-xs text-gray-500">10th standard</h1>
                  <h1 className=" text-xs text-gray-500">Biology student</h1>
                </div>
              </div>
              <div className=" ">
                <h1 className=" underline text-blue-500 cursor-pointer text-sm">View details</h1>
              </div>
            </div>
            <div className=" flex items-center w-96 justify-between px-5 h-auto py-2 min-h-20 bg-white drop-shadow-xl rounded-3xl">
              <div className=" flex items-center gap-5">
                <div className=" w-12 h-12 rounded-full bg-violet-600"></div>
                <div className=" flex flex-col">
                  <h1 className=" ">Febin</h1>
                  <h1 className=" text-xs text-gray-500">10th standard</h1>
                  <h1 className=" text-xs text-gray-500">Biology student</h1>
                </div>
              </div>
              <div className=" ">
                <h1 className=" underline text-blue-500 cursor-pointer text-sm">View details</h1>
              </div>
            </div>
            <div className=" flex items-center w-96 justify-between px-5 h-auto py-2 min-h-20 bg-white drop-shadow-xl rounded-3xl">
              <div className=" flex items-center gap-5">
                <div className=" w-12 h-12 rounded-full bg-violet-600"></div>
                <div className=" flex flex-col">
                  <h1 className=" ">Febin</h1>
                  <h1 className=" text-xs text-gray-500">10th standard</h1>
                  <h1 className=" text-xs text-gray-500">Biology student</h1>
                </div>
              </div>
              <div className=" ">
                <h1 className=" underline text-blue-500 cursor-pointer text-sm">View details</h1>
              </div>
            </div>
            <div className=" flex items-center w-96 justify-between px-5 h-auto py-2 min-h-20 bg-white drop-shadow-xl rounded-3xl">
              <div className=" flex items-center gap-5">
                <div className=" w-12 h-12 rounded-full bg-violet-600"></div>
                <div className=" flex flex-col">
                  <h1 className=" ">Febin</h1>
                  <h1 className=" text-xs text-gray-500">10th standard</h1>
                  <h1 className=" text-xs text-gray-500">Biology student</h1>
                </div>
              </div>
              <div className=" ">
                <h1 className=" underline text-blue-500 cursor-pointer text-sm">View details</h1>
              </div>
            </div>
            <div className=" flex items-center w-96 justify-between px-5 h-auto py-2 min-h-20 bg-white drop-shadow-xl rounded-3xl">
              <div className=" flex items-center gap-5">
                <div className=" w-12 h-12 rounded-full bg-violet-600"></div>
                <div className=" flex flex-col">
                  <h1 className=" ">Febin</h1>
                  <h1 className=" text-xs text-gray-500">10th standard</h1>
                  <h1 className=" text-xs text-gray-500">Biology student</h1>
                </div>
              </div>
              <div className=" ">
                <h1 className=" underline text-blue-500 cursor-pointer text-sm">View details</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
