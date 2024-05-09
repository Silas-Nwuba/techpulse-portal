import React from "react";
import { HiXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";
<<<<<<< HEAD
=======

>>>>>>> 2240043135df3e38123bbfa092520827935184bb
const Logo = ({ sidebarOpen, setIsSidebarOpen }) => {
  const visible = sidebarOpen;
  let display = "hidden";
  if (visible) {
    display = "block";
  }
<<<<<<< HEAD
  return (
    <div className="flex items-center justify-between gap-4 shadow-md py-3 px-3 md:px-0 md:py-0 md:shadow-none md:ml-5 md:mt-3 md:mx-5 ">
      <span>
        <Link
          to={"/"}
          className="font-semibold text-2xl text-center text-[#007bff] dark:text-stone-300 py-5 md:ml-5 tracking-widest"
=======

  return (
    <div className="ml-5 flex items-center justify-between gap-4 mt-10 mx-5">
      <span>
        <Link
          to={"/"}
          className="font-semibold text-2xl text-center text-[#007bff]  dark:text-[#4299E1] py-5 md:ml-5 tracking-widest"
>>>>>>> 2240043135df3e38123bbfa092520827935184bb
        >
          TechPulse
        </Link>
      </span>
      <span
<<<<<<< HEAD
        className={`cursor-pointer hover:bg-gray-200  dark:bg-[#2D3748] rounded-full p-1 md:${display}`}
=======
        className={`cursor-pointer hover:bg-gray-200 rounded-full p-1 md:${display}`}
>>>>>>> 2240043135df3e38123bbfa092520827935184bb
        onClick={() => setIsSidebarOpen(false)}
      >
        <HiXMark className="text-xl dark:text-slate-50" />
      </span>
    </div>
  );
};
<<<<<<< HEAD
=======

>>>>>>> 2240043135df3e38123bbfa092520827935184bb
export default Logo;
