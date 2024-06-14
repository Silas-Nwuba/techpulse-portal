import React from "react";
import { HiXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";
const Logo = ({ setIsSidebarOpen }) => {
  return (
    <div className="flex md:block justify-between items-center px-10">
      <Link to={"/login"} className="">
        {/* <img src="\image\logo 2.png" alt="logo" className="w-[30px] h-[30px]" /> */}
        <h1
          to={"/"}
          className="font-semibold text-xl lg:text-2xl  text-[#007bff] text-center py-5 tracking-widest dark:text-[#e8edf3]"
        >
          TechPulse
        </h1>
      </Link>
      <HiXMark
        className="text-2xl block font-semibold cursor-pointer md:hidden dark:text-[#CBD5E0]"
        onClick={() => {
          setIsSidebarOpen(false);
          document.documentElement.style.overflowY = "auto";
        }}
      />
    </div>
  );
};
export default Logo;
