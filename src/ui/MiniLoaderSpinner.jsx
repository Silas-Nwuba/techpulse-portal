import React from "react";

const MiniLoaderSpinner = () => {
  return (
    <div
      className={`border-transparent w-[1.2rem] h-[1.2rem] mx-auto border-r-white border-t-white border-l-white   rounded-full animate-spin border-[3px]`}
    ></div>
  );
};

export default MiniLoaderSpinner;
