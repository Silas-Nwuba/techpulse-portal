import React from "react";

const MiniLoaderSpinner = ({ borderTop, borderRight, borderLeft }) => {
  return (
    <div
      className={`border-transparent w-[1.6rem] h-[1.6rem] mx-auto ${borderRight} ${borderTop} ${borderLeft} rounded-full animate-spin border-4`}
    ></div>
  );
};

export default MiniLoaderSpinner;
