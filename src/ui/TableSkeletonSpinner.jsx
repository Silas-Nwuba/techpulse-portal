import React from "react";

const TableSkeletonSpinner = () => {
  return (
    <div className="mt-40 space-y-3 md:mt-10">
      <div className="w-full h-5 rounded-md skeleton"></div>
      <div className="w-[60%] h-5 rounded-md skeleton"></div>
      <div className="w-[55%] h-5 rounded-md skeleton"></div>
    </div>
  );
};

export default TableSkeletonSpinner;
