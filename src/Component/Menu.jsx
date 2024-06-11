import React from "react";
import { NavLink, useMatch } from "react-router-dom";
import { HiBars3, HiXMark } from "react-icons/hi2";
import Logo from "../Component/Logo";

const Menu = ({ showMenu, handleShowMenu, handleCloseMenu }) => {
  const homeMatch = useMatch("/home");
  const technologyeMatch = useMatch("/technology");
  const businessMatch = useMatch("/business");
  const smartphoneMatch = useMatch("/smartphone");
  const gadgetMatch = useMatch("/gadget");

  return (
    <section
      className={`flex justify-between bg-[#1e88e5] dark:bg-[#1e1e1e] shadow-sm px-2 md:px-5 xl:px-10 w-full items-center z-[20000] transition-opacity duration-300 ease-in-out`}
    >
      <Logo />
      <nav>
        <ul className="md:flex gap-4 xl:gap-10 text-stone-100 dark:text-[#e0e0e0] tracking-wide relative font-semibold text-sm hidden">
          <li
            className={`hover:text-white dark:hover:text-[#1e88e5] transition-all duration-300 hidden lg:block ease-in-out ${
              homeMatch ? "text-white font-semibold dark:text-[#1e88e5]" : ""
            }`}
          >
            <NavLink to={"/home"}>Home</NavLink>
          </li>
          <li
            className={`hover:text-white dark:hover:text-[#1e88e5] transition-all duration-300 hidden lg:block ease-in-out ${
              technologyeMatch
                ? "text-white font-semibold dark:text-[#1e88e5]"
                : ""
            }`}
          >
            <NavLink to={"/technology"}>Technology</NavLink>
          </li>
          <li
            className={`hover:text-white dark:hover:text-[#1e88e5] transition-all duration-300 hidden lg:block ease-in-out ${
              businessMatch
                ? "text-white font-semibold dark:text-[#1e88e5]"
                : ""
            }`}
          >
            <NavLink to={"/business"}>Business</NavLink>
          </li>
          <li
            className={`hover:text-white dark:hover:text-[#1e88e5] transition-all duration-300 hidden lg:block ease-in-out ${
              smartphoneMatch
                ? "text-white font-semibold dark:text-[#1e88e5]"
                : ""
            }`}
          >
            <NavLink to={"/smartphone"}>SmartPhone</NavLink>
          </li>
          <li
            className={`hover:text-white dark:hover:text-[#1e88e5] transition-all duration-300 hidden lg:block ease-in-out ${
              gadgetMatch ? "text-white font-semibold dark:text-[#1e88e5]" : ""
            }`}
          >
            <NavLink to={"gadget"}>Gadget</NavLink>
          </li>
        </ul>
      </nav>
      <span className="flex items-center gap-5">
        <input
          type="text"
          placeholder="Search"
          className="bg-sky-300 dark:bg-[#414040] rounded-md py-2 dark:placeholder:text-stone-200 placeholder:text-white text-sm px-4 text-white focus:outline-none w-full hidden lg:block"
        />
        {showMenu ? (
          <HiXMark
            className="text-[30px] text-slate-50 w-20 dark:text-[#e0e0e0] cursor-pointer ml-[140px] font-bold block "
            onClick={handleCloseMenu}
          />
        ) : (
          <HiBars3
            className="text-[37px] w-20 cursor-pointer dark:text-[#e0e0e0]  block text-slate-50 lg:hidden "
            onClick={handleShowMenu}
          />
        )}
      </span>
    </section>
  );
};
export default Menu;
