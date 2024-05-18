import React from "react";

const TechLoaderSpinner = () => {
  return (
    <div className="block lg:flex gap-6 mt-10">
      <div className="h-[300px] w-full lg:w-[300px] rounded-md skeleton"></div>
      <div className="space-y-3">
        <div className="flex gap-5">
          <div className="w-[150px] h-[90px] rounded-md skeleton"></div>
          <div className="space-y-2">
            <div className="w-[300px] h-[20px] rounded-md skeleton"></div>
            <div className="w-[300px] h-[20px] rounded-md skeleton"></div>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="w-[150px] h-[90px] rounded-md skeleton"></div>
          <div className="space-y-2">
            <div className="w-[300px] h-[20px] rounded-md skeleton"></div>
            <div className="w-[300px] h-[20px] rounded-md skeleton"></div>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="w-[150px] h-[90px] rounded-md skeleton"></div>
          <div className="space-y-2">
            <div className="w-[300px] h-[20px] rounded-md skeleton"></div>
            <div className="w-[300px] h-[20px] rounded-md skeleton"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechLoaderSpinner;
