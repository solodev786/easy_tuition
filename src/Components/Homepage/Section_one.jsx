import React from "react";
import { Rowdies } from "next/font/google";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { Rating } from "@mui/material";
import Image from "next/image";
import girl from "../../assets/teacher.png";

const rowdies = Rowdies({ subsets: ["latin"], weight: "400" });

function Section_one() {
  return (
    <div className=" flex items-center justify-between px-16 ">
      <div className=" w-1/2 flex flex-col gap-5">
        <div className=" w-2/3 px-1 py-1 rounded-full h-12 bg-gradient-to-r from-blue-500  to-[#7ACFD0] flex items-center justify-start gap-5">
          <div className="w-20 h-full bg-white rounded-full flex items-center justify-center">
            100%
          </div>
          <h1 className=" text-white">The new best experience you never had</h1>
        </div>
        <div className={`${rowdies.className} w-full text-5xl flex flex-col`}>
          <div className=" flex gap-2 items-center">
            <h1>Find your</h1>
            <AvatarGroup max={4}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
              <Avatar
                alt="Trevor Henderson"
                src="/static/images/avatar/5.jpg"
              />
            </AvatarGroup>
          </div>
        <h1 className="bg-gradient-to-r from-blue-900 to-[#7ACFD0] bg-clip-text text-transparent">
            Perfect mentor
          </h1>
        </div>
        <h1 className=" w-2/3">
          Easy tuition is an online platform where students can select their
          teachers and study through 1-1 live class
        </h1>
        <div className=" flex gap-10 items-center">
          <div className=" w-44 text-white h-14 bg-gradient-to-r flex items-center justify-center from-blue-600 to-[#7ACFD0] rounded-bl-3xl rounded-tr-3xl">
            <h1>Get started now</h1>
          </div>
        </div>
        <div className=" flex gap-5 items-start mt-10">
          <div className=" flex flex-col gap-2 items-center">
            <div className=" w-[1px] h-20 bg-blue-400"></div>
            <div className=" w-4 h-4 rounded-full bg-blue-500"></div>
            <div className=" w-[1px] h-16 bg-blue-400"></div>
          </div>
          <div className=" flex flex-col gap-3">
            <h1 className=" font-semibold">Muhammed shijas</h1>
            <h1 className=" w-1/2">
              Easy tuition is not just an app its a complete different education
              system. go ahead with them they will take care of your childrens
            </h1>
            <Rating value={5} />
          </div>
        </div>
      </div>
      <div className=" w-1/2 h-full flex items-center justify-center">
        <Image src={girl} />
      </div>
    </div>
  );
}

export default Section_one;
