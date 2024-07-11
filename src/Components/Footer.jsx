"use client";
import React from "react";
import logo from "../assets/ET ASSESTS WEBP/logo_easytuition.in.webp";
import Image from "next/image";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebook, FaWhatsapp, FaTwitter } from "react-icons/fa";
function Footer() {
  return (
    <div className=" flex flex-col h-auto w-full bg-gradient-to-r from-blue-600  to-[#7ACFD0] mt-10">
      <div className="  flex items-center  h-96 text-white">
        <div className=" flex items-start justify-evenly w-full">
          <div className=" flex flex-col gap-5 ">
            <Image src={logo} width={200} />
            <h1 className=" text-sm w-72">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit distinctio ullam ab tempore, voluptatum maiores in
              corrupti magni ad modi
            </h1>
          </div>
          <div className=" flex flex-col gap-3 ">
            <h1 className=" text-lg font-semibold">Quick links</h1>
            <h1>About</h1>
            <h1>Class</h1>
            <h1>Study meterial</h1>
            <h1>Contact</h1>
          </div>
          <div className=" flex flex-col gap-4 ">
            <h1 className=" text-lg font-semibold">Contact us</h1>
            <div className=" flex items-center gap-2">
              <FiPhone />
              <h1>7736447760</h1>
            </div>
            <h1>easytuition@meskc.in</h1>
            <div className=" flex items-center gap-2">
              <IoLocationOutline />
              <h1>MES kalladi college, mannarkkad</h1>
            </div>
          </div>
          <div className=" flex flex-col gap-4 ">
            <h1 className=" text-lg font-semibold">Social media</h1>
            <div className=" flex items-center gap-5">
              <FaFacebook />
              <FaWhatsapp />
              <FaTwitter />
            </div>
          </div>
        </div>
      </div>
        
    </div>
  );
}

export default Footer;
