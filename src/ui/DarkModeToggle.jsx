import React from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { useDarkMode } from "../context/DarkModeContext";
import { Toaster } from "react-hot-toast";
const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <>
      <span
        className="bg-gray-100 dark:bg-[#2D3748] rounded-full w-[35px] h-[35px] flex flex-col justify-center items-center cursor-pointer hover:bg-slate-200 dark:hover:bg-[#4A5568]"
        onClick={() => toggleDarkMode((darkMode) => !darkMode)}
      >
        {!isDarkMode && (
          <>
            <HiOutlineSun className="text-[22px] text-[#007bff] dark:text-[#4299E1]" />
            <Toaster
              position="top-center"
              gutter={12}
              containerStyle={{ margin: "8px" }}
              toastOptions={{
                success: {
                  duration: 3000,
                },
                error: {
                  duration: 5000,
                },
                style: {
                  fontSize: "15px",
                  padding: "16px 24px",
                  top: 0,
                },
              }}
            />
          </>
        )}
        {isDarkMode && (
          <>
            <HiOutlineMoon className="text-[22px] text-[#007bff] dark:text-[#4299E1]" />
            <Toaster
              position="top-center"
              gutter={12}
              containerStyle={{ margin: "8px" }}
              toastOptions={{
                success: {
                  duration: 3000,
                },
                error: {
                  duration: 5000,
                },
                className: "dark:bg-[#2D3748]",
                style: {
                  fontSize: "15px",
                  padding: "16px 24px",
                  color: isDarkMode ? "#eeeeee" : "",
                  zIndex: "30000",
                  top: 0,
                },
              }}
            />
          </>
        )}
      </span>
    </>
  );
};

export default DarkModeToggle;
