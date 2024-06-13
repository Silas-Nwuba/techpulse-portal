import React from "react";
import { HiXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";
const Logo = ({ setIsSidebarOpen }) => {
  return (
    <div className=" flex items-center justify-between  px-5">
      <Link to={"/"} className="flex items-center gap-3">
        <img src="\image\logo 2.png" alt="logo" className="w-[30px] h-[30px]" />
        <h1
          to={"/"}
          className="font-semibold text-xl lg:text-2xl  text-[#007bff] text-center py-5  tracking-widest"
        >
          TechPulse
        </h1>
      </Link>
      <HiXMark
        className="text-2xl block font-semibold cursor-pointer md:hidden"
        onClick={() => setIsSidebarOpen(false)}
      />
    </div>
  );
};
export default Logo;
