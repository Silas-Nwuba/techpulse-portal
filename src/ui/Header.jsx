import React from "react";
import DarkModeToggle from "./DarkModeToggle";
import Avatar from "./Avatar";
import { HiOutlineBars3 } from "react-icons/hi2";

const Header = ({ setSidebarOpen }) => {
  const handleSidebar = () => {
    setSidebarOpen(true);
  };
  return (
    <div className="bg-white p-4 flex justify-between items-center px-2 shadow-sm z-[9999] md:z-50 header fixed top-0 md:px-5 md:sticky">
      <h1 className="text-stone-600 text-[16px] hidden font-medium md:block">
        Welcome back admin!
      </h1>
      <div
        className="flex items-center gap-6 bg-gray-100 rounded-full w-[37px] h-[37px] hover:bg-slate-200 md:hidden ml-2"
        onClick={handleSidebar}
      >
        <HiOutlineBars3 className="text-[28px] w-20 cursor-pointer font-semibold" />
      </div>
      <div className="flex items-center gap-6 mr-3 md:mr-1">
        <DarkModeToggle />
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
