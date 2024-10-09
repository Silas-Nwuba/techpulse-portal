import React from "react";

const FullPageLoaderSpinner = ({ children }) => {
  return (
    <div className="top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 absolute">
      <div className="dark:border-[#172340]  w-[40px] h-[40px] dark:border-t-[#6C4DE6] border-t-[#6C4DE6] rounded-full animate-spin border-[4px]"></div>
      {/* {children} */}
    </div>
  );
};

export default FullPageLoaderSpinner;
