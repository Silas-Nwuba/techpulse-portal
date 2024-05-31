import React, { useEffect } from "react";

const LoaderSpinner = () => {
  useEffect(() => {
    document.documentElement.style.overflowY = "hidden";
    return () => {
      document.documentElement.style.overflowY = "visible";
    };
  });
  return (
    <div className="bg-[rgb(0,0,0,0.5)] w-full h-screen fixed top-0 z-[99999] left-0 cursor-wait">
      <div className="flex gap-3 items-center absolute top-2/4 left-2/4 -translate-x-2/4">
        <div className="w-5 h-5 rounded-full bg-sky-600 animate-bounce"></div>
        <div className="w-5 h-5  rounded-full bg-orange-600 animate-bounce"></div>
        <div className="w-5 h-5  rounded-full bg-white animate-bounce"></div>
      </div>
    </div>
  );
};

export default LoaderSpinner;
