import React from "react";
import { useDarkMode } from "../context/DarkModeContext";
import { Toaster } from "react-hot-toast";

const ToastPopUp = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <Toaster
      position="top-center"
      gutter={12}
      toastOptions={{
        error: {
          duration: 5000,
        },
        className: "dark:bg-[#2D3748]",
        style: {
          color: isDarkMode ? "#eeeeee" : "#e",
          zIndex: "30000",
        },
      }}
    />
  );
};

export default ToastPopUp;
