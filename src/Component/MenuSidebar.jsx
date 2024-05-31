import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
const MenuSidebar = ({ setShowMenu }) => {
  const inputRef = useRef(null);
  const handleCloseSideMenu = (e) => {
    setShowMenu(false);
  };

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
    document.documentElement.style.overflowY = "hidden";
    return () => {
      document.documentElement.style.overflowY = "visible";
    };
  });

  return (
    <div
      className={`bg-sky-500 w-full h-screen pt-2 px-10 pb-10 z-[50000] transition duration-300 ease-out`}
    >
      <input
        type="text"
        placeholder="Search"
        className="bg-sky-300 rounded-md py-2 text-sm px-4 text-white placeholder:text-white focus:outline-none w-full mt-5"
        ref={inputRef}
      />
      <div className="bg-stone-300 w-full"></div>
      <nav className="mt-10">
        <ul className="space-y-10 text-slate-50">
          <li>
            <NavLink to={"/"} onClick={handleCloseSideMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/technology"} onClick={handleCloseSideMenu}>
              Technology
            </NavLink>
          </li>
          <li>
            <NavLink to={"/business"} onClick={handleCloseSideMenu}>
              Business
            </NavLink>
          </li>
          <li>
            <NavLink to={"/smartphone"} onClick={handleCloseSideMenu}>
              SmartPhone
            </NavLink>
          </li>
          <li>
            <NavLink to={"/gadget"} onClick={handleCloseSideMenu}>
              Gadget
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default MenuSidebar;
