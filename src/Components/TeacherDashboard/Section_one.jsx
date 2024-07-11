import React from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { IoNewspaperOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";

function Section_one() {
  return (
    <div className=" w-full  rounded-3xl bg-blue-50 px-10 py-10 ">
      <div className=" w-full flex justify-between items-center">
        <div className=" flex w-full flex-col gap-10">
          <div className=" flex items-start justify-between">
            <div className=" flex flex-col gap-2">
              <h1 className=" text-4xl font-semibold w-1/2">
                Hello Nishila 👋
              </h1>
              <h1 className=" w-2/3">
                Nice to have you back,what an exiting day! Get ready and
                continue teaching,Have a nice day
              </h1>
            </div>
            <div className=" w-14 h-14 bg-blue-100 rounded-full"></div>
          </div>
          <div className=" flex w-full items-start gap-2 ">
            <div className=" flex flex-col gap-2 w-1/3">
              <div className=" w-full h-auto  bg-white rounded-3xl py-5 px-5 drop-shadow-xl   border-black">
                <div className=" flex flex-col gap-5">
                  <h1>Today class</h1>
                  <div className=" flex flex-col gap-2">
                    <div className=" px-5 py-2 flex items-center justify-between bg-blue-50 rounded-2xl">
                      <div className=" flex items-center gap-5">
                        <div className=" w-10 h-10 rounded-lg bg-blue-500"></div>
                        <div className=" flex flex-col gap-1">
                          <h1>Nourin</h1>
                          <div className=" text-xs text-gray-500 flex flex-col">
                            <h1>Biology</h1>
                            <h1>01:00 PM - 02:00PM</h1>
                          </div>
                        </div>
                      </div>
                      <h1 className=" text-blue-500">Join</h1>
                    </div>
                    <div className=" px-5 py-2 flex items-center justify-between bg-blue-50 rounded-2xl">
                      <div className=" flex items-center gap-5">
                        <div className=" w-10 h-10 rounded-lg bg-blue-500"></div>
                        <div className=" flex flex-col gap-1">
                          <h1>Nourin</h1>
                          <div className=" text-xs text-gray-500 flex flex-col">
                            <h1>Biology</h1>
                            <h1>01:00 PM - 02:00PM</h1>
                          </div>
                        </div>
                      </div>
                      <h1 className=" text-blue-500">Join</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" w-full h-72 bg-white rounded-3xl drop-shadow-xl py-5 px-5">
                <div className=" flex flex-col gap-5">
                  <h1>Notifications</h1>
                  <div className=" flex flex-col gap-2">
                    {/*  */}
                    <div className=" w-full px-5 py-2 bg-blue-50 rounded-2xl flex items-center justify-between text-sm">
                      <div className=" flex items-center gap-5">
                        <div className=" w-2 h-2 rounded-full bg-blue-500"></div>
                        <div className=" flex flex-col  ">
                          <h1>You have a new student</h1>
                          <h1 className=" text-gray-500">1 min ago</h1>
                        </div>
                      </div>
                      <h1 className=" text-red-500 ">Delete</h1>
                    </div>
                    <div className=" w-full px-5 py-2 bg-blue-50 rounded-2xl flex items-center justify-between text-sm">
                      <div className=" flex items-center gap-5">
                        <div className=" w-2 h-2 rounded-full bg-blue-500"></div>
                        <div className=" flex flex-col  ">
                          <h1>You have a new student</h1>
                          <h1 className=" text-gray-500">1 min ago</h1>
                        </div>
                      </div>
                      <h1 className=" text-red-500 ">Delete</h1>
                    </div>
                    <div className=" w-full px-5 py-2 bg-blue-50 rounded-2xl flex items-center justify-between text-sm">
                      <div className=" flex items-center gap-5">
                        <div className=" w-2 h-2 rounded-full bg-blue-500"></div>
                        <div className=" flex flex-col  ">
                          <h1>You have a new student</h1>
                          <h1 className=" text-gray-500">1 min ago</h1>
                        </div>
                      </div>
                      <h1 className=" text-red-500 ">Delete</h1>
                    </div>
                    {/*  */}
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex flex-col gap-2 w-1/3">
              <div className=" w-full h-auto bg-white rounded-3xl py-5 px-5 drop-shadow-xl   border-black">
                <div className=" flex flex-col gap-5">
                  <h1>My students</h1>
                  <div className=" flex flex-col gap-2">
                    <div className=" flex flex-col gap-2 bg-blue-50 rounded-2xl px-5 py-2">
                      <div className=" flex flex-col gap-2    ">
                        <div className=" w-full items-center flex justify-between">
                          <div className=" flex items-center gap-5">
                            <div className=" w-10 h-10 rounded-lg bg-blue-500"></div>
                            <div className=" flex flex-col ">
                              <h1>Aleena</h1>
                              <h1 className=" text-gray-500">Chemistry</h1>
                            </div>
                          </div>
                          <h1 className=" text-gray-500 text-sm">8th class </h1>
                        </div>
                      </div>
                      <div className=" w-full gap-3">
                        <div className=" flex gap-3">
                          <div className=" flex flex-col gap-1">
                            <h1 className=" text-gray-500 text-sm">
                              Attendance
                            </h1>
                            <h1>90%</h1>
                          </div>
                          <div className=" flex flex-col gap-1">
                            <h1 className=" text-gray-500 text-sm">
                              Assignments
                            </h1>
                            <h1>3</h1>
                          </div>
                          <div className=" flex flex-col gap-1">
                            <h1 className=" text-gray-500 text-sm">
                              Perfomance
                            </h1>
                            <h1 className=" text-green-500">Good</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" flex flex-col gap-2 bg-blue-50 rounded-2xl px-5 py-2">
                      <div className=" flex flex-col gap-2    ">
                        <div className=" w-full items-center flex justify-between">
                          <div className=" flex items-center gap-5">
                            <div className=" w-10 h-10 rounded-lg bg-blue-500"></div>
                            <div className=" flex flex-col ">
                              <h1>Aleena</h1>
                              <h1 className=" text-gray-500">Chemistry</h1>
                            </div>
                          </div>
                          <h1 className=" text-gray-500 text-sm">8th class </h1>
                        </div>
                      </div>
                      <div className=" w-full gap-3">
                        <div className=" flex gap-3">
                          <div className=" flex flex-col gap-1">
                            <h1 className=" text-gray-500 text-sm">
                              Attendance
                            </h1>
                            <h1>90%</h1>
                          </div>
                          <div className=" flex flex-col gap-1">
                            <h1 className=" text-gray-500 text-sm">
                              Assignments
                            </h1>
                            <h1>3</h1>
                          </div>
                          <div className=" flex flex-col gap-1">
                            <h1 className=" text-gray-500 text-sm">
                              Perfomance
                            </h1>
                            <h1 className=" text-green-500">Good</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" w-full h-[200px] bg-white rounded-3xl drop-shadow-2xl px-5 py-5">
                <div className=" flex flex-col gap-5">
                  <h1>Task to do</h1>
                  <div className=" flex flex-col gap-2">
                    <div className=" flex items-center justify-between px-5 py-2 bg-blue-50 rounded-3xl">
                      <div className=" flex items-center gap-5">
                        <FaRegEdit />
                        <h1>Conduct an assignment</h1>
                      </div>
                      <MdDeleteOutline className=" text-xl" />
                    </div>
                    <div className=" flex items-center justify-between px-5 py-2 bg-blue-50 rounded-3xl">
                      <div className=" flex items-center gap-5">
                        <FaRegEdit />
                        <h1>Conduct an assignment</h1>
                      </div>
                      <MdDeleteOutline className=" text-xl" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className=" flex flex-col gap-2 w-1/3">
              <div className=" w-full min-h-60 bg-white rounded-3xl py-5 px-5 drop-shadow-xl  border-black">
                <div className=" flex flex-col gap-5">
                  <h1 className=" ">Your earnings</h1>
                  <div className=" flex flex-col ">
                    <h1>This month</h1>
                    <h1 className=" text-4xl font-semibold">5k</h1>
                  </div>
                </div>
              </div>
              <div className=" w-full h-72 bg-white rounded-3xl drop-shadow-2xl px-5 py-5">
                <div className=" flex flex-col gap-5">
                  <div className=" flex flex-col">
                    <h1>Quick actions</h1>
                    <h1 className=" text-sm text-gray-500">
                      do something quickly
                    </h1>
                  </div>
                  <div className=" flex items-center justify-start gap-2">
                    <div className=" w-1/3 h-20 bg-blue-50 rounded-2xl flex items-center justify-center">
                      <div className=" flex flex-col gap-2 items-center w-full">
                        <AiOutlineMessage className=" text-2xl" />
                        <h1 className=" text-sm"> message</h1>
                      </div>
                    </div>
                    <div className=" w-1/3 h-20 bg-blue-50 rounded-2xl flex items-center justify-center">
                      <div className=" flex flex-col gap-2 items-center w-full">
                        <PiStudentFill className=" text-2xl" />
                        <h1 className=" text-sm">students</h1>
                      </div>
                    </div>
                    <div className=" w-1/3 h-20 bg-blue-50 rounded-2xl flex items-center justify-center">
                      <div className=" flex flex-col gap-2 items-center w-full">
                        <IoNewspaperOutline className=" text-2xl" />
                        <h1 className=" text-sm">meterials</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section_one;
