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
    <>
      <div
        className={`flex md:${display} justify-between my-5 ml-7 px-2 ${padding}`}
      >
        <Link to={"/login"} className="ml-2 flex items-center gap-3">
          <h1
            to={"/"}
            className={`text-xl lg:text-[24px] leading-[1.75rem] font-semibold tracking-wider text-[#6C4DE6] logo text-center dark:text-[#e3e3e3]`}
          >
            TekMatas
          </h1>
        </Link>
        <HiXMark
          className={`text-2xl block font-semibold md:${showIcon} cursor-pointer dark:text-[#E7E9EA]`}
          onClick={handleSidebarClose}
        />
      </div>

      <div className="dark:bg-[#172340] bg-slate-50 w-full h-[0.5px]"></div>
    </>
  );
};
export default Logo;
