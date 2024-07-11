import React from "react";
import logo from "../assets/ET ASSESTS WEBP/logo_easytuition.in.webp";
import Image from "next/image";
function Navbar() {
  return (
    <div className=" w-full h-auto flex items-center justify-between px-10 pt-5">
      <Image src={logo} width={200} />
      <div className=" flex items-center gap-5">
        <h1>Home</h1>
        <h1>About</h1>
        <h1>Teachers</h1>
        <h1>Study meterial</h1>
        <h1>Contact</h1>
      </div>
      <div className=" flex items-center gap-5 px-10 ">
        <h1 className=" underline ">Login</h1>
        <div className=" px-5 py-3 bg-gradient-to-r from-blue-600 via-blue-500 to-[#7ACFD0] rounded-xl">
        <h1 className=" text-white">Join Today</h1>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
