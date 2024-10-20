import React from "react";

export const OverLay = ({ children }) => {
  return (
    <div className="fixed top-0 left-0 z-[1000] w-full h-[100vh] transition-opacity bg-[rgba(0,0,0,0.6)] dark:bg-[rgba(0,0,0,0.9)]">
      {children}
    </div>
  );
};
// [#5B708366
