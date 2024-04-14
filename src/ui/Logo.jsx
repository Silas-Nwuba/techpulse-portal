import React from "react";
import { HiXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";
const Logo = ({ sidebarOpen, setIsSidebarOpen }) => {
  const visible = sidebarOpen;
  let display = "hidden";
  if (visible) {
    display = "block";
  }
  return (
    <div className="flex items-center justify-between gap-4 shadow-md py-3 px-3 md:px-0 md:py-0 md:shadow-none md:ml-5 md:mt-10 md:mx-5 ">
      <span>
        <Link
          to={"/"}
          className="font-semibold text-2xl text-center text-[#007bff] dark:text-stone-300 py-5 md:ml-5 tracking-widest"
        >
          TechPulse
        </Link>
      </span>
      <span
        className={`cursor-pointer hover:bg-gray-200 rounded-full p-1 md:${display}`}
        onClick={() => setIsSidebarOpen(false)}
      >
        <HiXMark className="text-xl dark:text-slate-50" />
      </span>
    </div>
  );
};
export default Logo;
