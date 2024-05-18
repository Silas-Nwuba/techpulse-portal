import React from "react";

const BusinessLoaderSpinner = ({ marginTop = "10px" }) => {
  return (
    <>
      <div className={`grid grid-cols-3 gap-4 ${marginTop}`}>
        <div className="space-y-4">
          <div className="w-full h-[250px] skeleton rounded-md"></div>
          <div className="space-y-2">
            <div className="w-[200px] h-[10px] skeleton rounded-md"></div>
            <div className="w-[200px] h-[10px] skeleton rounded-md"></div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="w-full h-[250px] skeleton rounded-md"></div>
          <div className="space-y-2">
            <div className="w-[200px] h-[10px] skeleton rounded-md"></div>
            <div className="w-[200px] h-[10px] skeleton rounded-md"></div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="w-full h-[250px] skeleton rounded-md"></div>
          <div className="space-y-2">
            <div className="w-[200px] h-[10px] skeleton rounded-md"></div>
            <div className="w-[200px] h-[10px] skeleton rounded-md"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessLoaderSpinner;
