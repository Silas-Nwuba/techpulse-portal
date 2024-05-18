import React from "react";

const FullPageLoaderSpinner = ({ children }) => {
  return (
    <div className="top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 absolute">
      <div className="border-transparent w-[2.5rem] h-[2.5rem] border-t-sky-500 border-r-sky-500 rounded-full animate-spin border-4"></div>
      {children}
    </div>
  );
};

export default FullPageLoaderSpinner;
