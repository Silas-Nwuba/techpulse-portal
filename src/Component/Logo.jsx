import React from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <div className="flex gap-1 items-center">
      <HiOutlineBars3 className="text-[28px] w-20 cursor-pointer font-semibold hidden" />
      <Link to={"/"} className="flex items-center">
        <img src="\image\logo 2.png" alt="logo" className="w-[30px] h-[30px]" />
        <h1
          to={"/"}
          className="font-semibold text-xl lg:text-2xl font-sans  text-white text-center px-2 py-5  tracking-widest"
        >
          TechPulse
        </h1>
      </Link>
    </div>
  );
};
export default Logo;
