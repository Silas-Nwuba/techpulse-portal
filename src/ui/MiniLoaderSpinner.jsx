import React from "react";

const MiniLoaderSpinner = ({
  borderTop = "border-t-gray-50",
  borderRight = "border-r-gray-50",
}) => {
  return (
    <div
      className={`border-transparent w-[1.6rem] h-[1.6rem] mx-auto ${borderRight} ${borderTop} rounded-full animate-spin border-4`}
    ></div>
  );
};

export default MiniLoaderSpinner;
