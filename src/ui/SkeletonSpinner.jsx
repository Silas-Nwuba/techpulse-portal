import React from "react";

const SkeletonSpinner = () => {
  return (
    <div>
      <div className="w-full h-[200px] rounded-md skeleton mb-4"></div>
      <div className="w-[80%] h-[25px] rounded-full skeleton mb-2"></div>
      <div className="w-[70%] h-[20px] rounded-full skeleton"></div>
    </div>
  );
};

export default SkeletonSpinner;
