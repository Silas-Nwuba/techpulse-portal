import React from "react";
import { HiXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useSidebarContext } from "../context/SidebarContext";

const Logo = ({ display = "block", showIcon = "hidden", padding }) => {
  const { dispatch } = useSidebarContext();
  const handleSidebarClose = () => {
    dispatch({ type: "closeSidebarMenu", payload: false });
    document.documentElement.style.overflowY = "auto";
  };

  return (
    <div
      className={`flex md:${display} justify-between items-center px-5 ${padding}`}
    >
      <Link to={"/login"} className="ml-5">
        <h1
          to={"/"}
          className={`font-semibold uppercase text-xl lg:text-2xl  text-[#007bff] text-center tracking-widest dark:text-[#e8edf3]`}
        >
          TechZonie
        </h1>
      </Link>
      <HiXMark
        className={`text-2xl block font-semibold md:${showIcon} cursor-pointer dark:text-[#CBD5E0]`}
        onClick={handleSidebarClose}
      />
    </div>
  );
};
export default Logo;
