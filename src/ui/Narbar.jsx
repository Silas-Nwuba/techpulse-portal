import React from "react";
import {
  HiOutlineBars3,
  HiOutlineMagnifyingGlass,
  HiOutlineSun,
} from "react-icons/hi2";
import { NavLink } from "react-router-dom";

const Narbar = () => {
  return (
    <nav className="text-stone-700 bg-white w-full shadow-sm flex items-center justify-between px-5  py-3 md:px-20 cursor-pointer">
      <div className="flex items-center gap-2">
        <HiOutlineBars3 className="mr-3 text-[30px] md:hidden" />
        <h2 className="text-sky-600 font-semibold text-[25px] font-serif">
          TechPulse
        </h2>
        <ul className="list-none hidden md:flex md:justify-around md:items-center md:gap-10 mx-10 cursor-pointer">
          <NavLink
            to={"/home"}
            className="flex items-center hover:text-sky-500 transition-colors duration-100 "
          >
            Home
          </NavLink>
          <li className="hover:text-sky-500 transition-colors duration-100">
            Profile
          </li>
          <NavLink
            to={"/contact"}
            className="hover:text-sky-500 transition-colors duration-100"
          >
            Contact
          </NavLink>
        </ul>
      </div>
      <div className="flex items-center gap-10 cursor-pointer">
        {/* <span>
          <input
            type="text"
            className="w-[100%] py-2 px-3 placeholder:text-sm focus:outline-none bg-gray-50 rounded-sm"
            placeholder="Search.."
          />
        </span> */}

        <HiOutlineMagnifyingGlass className="text-xl" />
        <HiOutlineSun className="text-xl hover:text-sky-500 transition-colors duration-100" />
      </div>
    </nav>
  );
};
export default Narbar;
