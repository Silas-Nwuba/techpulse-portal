import React from "react";

const LatestPostLoaderSpinner = () => {
  return (
    <div className="space-y-3 mt-10">
      <div className="flex gap-2">
        <div className="w-[120px] h-[70px] rounded-md skeleton"></div>
        <div className="space-y-1">
          <div className="w-[200px] h-[12px]  rounded-md mt-2 skeleton"></div>
          <div className="w-[200px] h-[12px]  rounded-md mt-2 skeleton"></div>
        </div>
      </div>
      <div className="flex gap-2">
        <div className="w-[120px] h-[70px] rounded-md skeleton"></div>
        <div className="space-y-1">
          <div className="w-[200px] h-[12px] rounded-md mt-2 skeleton"></div>
          <div className="w-[200px] h-[12px] rounded-md mt-2 skeleton"></div>
        </div>
      </div>
      <div className="flex gap-2">
        <div className="w-[120px] h-[70px] rounded-md skeleton"></div>
        <div className="space-y-1">
          <div className="w-[200px] h-[12px]  rounded-md mt-2 skeleton"></div>
          <div className="w-[200px] h-[12px]  rounded-md mt-2 skeleton"></div>
        </div>
      </div>
      <div className="flex gap-2">
        <div className="w-[120px] h-[70px] rounded-md skeleton"></div>
        <div className="space-y-1">
          <div className="w-[200px] h-[12px]  rounded-md mt-2 skeleton"></div>
          <div className="w-[200px] h-[12px]  rounded-md mt-2 skeleton"></div>
        </div>
      </div>
    </div>
  );
};

export default LatestPostLoaderSpinner;
