import React from "react";
import DarkModeToggle from "./DarkModeToggle";
import Avatar from "./Avatar";
import { HiOutlineBars3 } from "react-icons/hi2";
import { useSidebarContext } from "../context/SidebarContext";
const Header = () => {
  const { dispatch } = useSidebarContext();
  const handleMobileSidebar = () => {
    dispatch({ type: "openSidebarMenu", payload: true });
    document.documentElement.style.overflowY = "hidden";
  };
  return (
    <div className="bg-white dark:bg-[#1A202C] dark:border-b dark:border-[#2D3748] p-4 flex  justify-between items-center px-2 shadow-sm z-[9999] md:z-50 header fixed top-0 md:px-5 md:sticky w-full">
      <h1 className="text-stone-500 text-[16px] dark:text-[#E2E8F0] hidden  md:block">
        Welcome back, admin
      </h1>
      <div
        className="flex items-center gap-6 bg-gray-300 rounded-full w-[37px] h-[37px] hover:bg-slate-200 md:hidden ml-2 dark:bg-[#2D3748]"
        onClick={handleMobileSidebar}
      >
        <HiOutlineBars3 className="text-[28px] w-20 cursor-pointer font-semibold dark:text-[#E2E8F0]" />
      </div>
      <div className="flex items-center gap-6 mr-3 md:mr-1">
        <DarkModeToggle />
        <Avatar />
      </div>
    </div>
  );
};
export default Header;
