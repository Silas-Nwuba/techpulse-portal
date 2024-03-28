import React from "react";

const TableSkeletonSpinner = () => {
  return (
    <div className="mt-10 space-y-3">
      <div className="w-full h-10 rounded-md skeleton"></div>
      <div className="w-[60%] h-10 rounded-md skeleton"></div>
      <div className="w-[55%] h-10 rounded-md skeleton"></div>
    </div>
  );
};

export default TableSkeletonSpinner;
