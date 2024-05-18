import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
const MenuSidebar = ({ showMenuScroll }) => {
  const inputRef = useRef(null);
  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
    document.documentElement.style.overflowY = "hidden";
    return () => {
      document.documentElement.style.overflowY = "visible";
    };
  });
  return (
    <div
      className={`bg-sky-500 w-full h-full pt-2 px-10 pb-10 z-[50000] transition duration-300 ease-out fixed ${
        showMenuScroll ? "top-[65px]" : ""
      }`}
    >
      <input
        type="text"
        placeholder="Search"
        className="bg-sky-300 rounded-md py-2 text-sm px-4 text-white placeholder:text-white focus:outline-none w-full mt-5"
        ref={inputRef}
      />
      <div className="bg-stone-300 w-full"></div>
      <nav className="mt-10">
        <ul className="space-y-8 text-slate-50">
          <li>
            <NavLink>Home</NavLink>
          </li>
          <li>
            <NavLink>Technology</NavLink>
          </li>
          <li>
            <NavLink>Business</NavLink>
          </li>
          <li>
            <NavLink>Smartphone</NavLink>
          </li>
          <li>
            <NavLink>Gadget</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default MenuSidebar;
