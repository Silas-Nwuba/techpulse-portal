import React from "react";

export const OverLay = ({ children }) => {
  return (
    <div className="fixed top-0 left-0 z-[1000] w-full h-[100vh]  bg-[rgba(0,0,0,0.4)] dark:bg-[#5B708366]">
      {children}
    </div>
  );
};
