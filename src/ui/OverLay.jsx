import React from "react";

export const OverLay = ({ children }) => {
  return (
    <div className="fixed top-0 left-0 z-[10000] w-full h-[100vh] backdrop-blur-sm bg-[rgba(0,0,0,0.3)]">
      {children}
    </div>
  );
};
