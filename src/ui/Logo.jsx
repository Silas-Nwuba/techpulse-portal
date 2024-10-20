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
        className={`flex md:${display} justify-between mt-5 mb-[12px] ml-7 px-2 ${padding}`}
      >
        <Link to={"/login"} className="ml-2 flex items-center gap-3">
          <h1
            to={"/"}
            className={`text-2xl  dark:text-[#6C4DE6] leading-[1.75rem] tracking-wider font-semibold  text-[#6C4DE6] logo text-center`}
          >
            TekMatas
          </h1>
        </Link>
        <HiXMark
          className={`text-xl block font-semibold mr-3 text-[#8d8d8d] md:${showIcon} cursor-pointer dark:text-[#899BB1] xl:hidden`}
          onClick={handleSidebarClose}
        />
      </div>

      <div className="dark:bg-[#172340] bg-slate-50 w-full h-[0.5px]"></div>
    </>
  );
};
export default Logo;
