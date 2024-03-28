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
    <div className="ml-5 flex items-center justify-between gap-4 mt-10 mx-5">
      <span>
        <Link
          to={"/"}
          className="font-semibold text-2xl text-center text-[#007bff] py-5 md:ml-5 tracking-widest"
        >
          TechPulse
        </Link>
      </span>
      <span
        className={`cursor-pointer hover:bg-gray-200 rounded-full p-1 md:${display}`}
        onClick={() => setIsSidebarOpen(false)}
      >
        <HiXMark className="text-xl" />
      </span>
    </div>
  );
};

export default Logo;
