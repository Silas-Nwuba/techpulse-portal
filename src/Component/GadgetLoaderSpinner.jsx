import React from "react";

const GadgetLoaderSpinner = () => {
  return (
    <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2  gap-5 lg:gap-10  mt-10">
      <div className="flex gap-2">
        <div className="w-[130px] h-[70px] lg:w-[200px] rounded-md skeleton flex-shrink-0"></div>
        <div className="space-y-2 w-full">
          <div className="w-full h-[12px] lg:w-[200px]  rounded-md mt-2 skeleton"></div>
          <div className="w-full lg:w-[200px] h-[12px]  rounded-md mt-2 skeleton"></div>
          <div className="w-full lg:w-[200px] h-[12px] rounded-md mt-2 skeleton"></div>
        </div>
      </div>
      <div className="flex gap-2">
        <div className="w-[130px] h-[70px] lg:w-[200px] rounded-md skeleton flex-shrink-0"></div>
        <div className="space-y-2 w-full">
          <div className="w-full h-[12px] lg:w-[200px]  rounded-md mt-2 skeleton"></div>
          <div className="w-full lg:w-[200px] h-[12px]  rounded-md mt-2 skeleton"></div>
          <div className="w-full lg:w-[200px] h-[12px] rounded-md mt-2 skeleton"></div>
        </div>
      </div>
      <div className="flex gap-2">
        <div className="w-[130px] h-[70px] lg:w-[200px] rounded-md skeleton flex-shrink-0"></div>
        <div className="space-y-2 w-full">
          <div className="w-full h-[12px] lg:w-[200px]  rounded-md mt-2 skeleton"></div>
          <div className="w-full lg:w-[200px] h-[12px]  rounded-md mt-2 skeleton"></div>
          <div className="w-full lg:w-[200px] h-[12px] rounded-md mt-2 skeleton"></div>
        </div>
      </div>
      <div className="flex gap-2">
        <div className="w-[130px] h-[70px] lg:w-[200px] rounded-md skeleton flex-shrink-0"></div>
        <div className="space-y-2 w-full">
          <div className="w-full h-[12px]  lg:w-[200px]  rounded-md mt-2 skeleton"></div>
          <div className="w-full lg:w-[200px] h-[12px]  rounded-md mt-2 skeleton"></div>
          <div className="w-full lg:w-[200px] h-[12px] rounded-md mt-2 skeleton"></div>
        </div>
      </div>
    </div>
  );
};

export default GadgetLoaderSpinner;
