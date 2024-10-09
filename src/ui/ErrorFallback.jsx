import React from "react";
const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div className="bg-white w-[90%] sm:w-[70%] md:w-[50%] xl:w-[35%] rounded-sm shadow-sm transform absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-center pt-10">
      {/* <span className="bg-red-100  w-12 h-12 rounded-full flex flex-col justify-center items-center mx-auto">
        <HiOutlineExclamationTriangle className="text-red-700 font-semibold text-2xl text-center" />
      </span> */}
      <h1 className="leading-5 mt-4 text-[16px] dark:text-[#b9b9b9]">
        We're sorry, but something went wrong
      </h1>

      <button className="bg-[#6C4DE6] hover:bg-[#5f6ae9] w-[30%] mx-auto my-4 text-center transition duration-500 ease-in-out  py-2 text-white font-medium text-[16px] rounded-full flex items-center justify-center pr-2">
        Refresh
      </button>
    </div>
  );
};

export default ErrorFallback;
