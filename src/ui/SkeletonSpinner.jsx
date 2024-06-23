import React from "react";

const SkeletonSpinner = () => {
  return (
    <div>
      <div className="w-full h-[200px] rounded-md bg-[#d6d0d0]  dark:bg-[#4c596e] animate-pulse mb-4"></div>
      <div className="w-[80%] h-[25px] rounded-full bg-[#d6d0d0]  dark:bg-[#4c596e] animate-pulse mb-2"></div>
      <div className="w-[70%] h-[20px] rounded-full bg-[#d6d0d0]  dark:bg-[#4c596e] animate-pulse"></div>
    </div>
  );
};

export default SkeletonSpinner;
