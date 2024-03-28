import React, { useState } from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <span
      className="bg-gray-100 rounded-full w-[35px] h-[35px] flex flex-col justify-center items-center cursor-pointer hover:bg-slate-200 "
      onClick={() => setIsDarkMode((darkMode) => !darkMode)}
    >
      {!isDarkMode && <HiOutlineSun className="text-[22px] text-[#007bff]" />}
      {isDarkMode && <HiOutlineMoon className="text-[22px] text-[#007bff]" />}
    </span>
  );
};

export default DarkModeToggle;
