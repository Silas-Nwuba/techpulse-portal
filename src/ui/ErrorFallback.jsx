import React from "react";
import { HiOutlineExclamationTriangle } from "react-icons/hi2";
import Button from "./Button";
const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div className="bg-white w-[90%] sm:w-[70%] md:w-[50%] xl:w-[35%] rounded-sm shadow-sm transform absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-center pt-10">
      <span className="bg-red-100  w-12 h-12 rounded-full flex flex-col justify-center items-center mx-auto">
        <HiOutlineExclamationTriangle className="text-red-700 font-semibold text-2xl text-center" />
      </span>
      <h1 className="leading-5 mt-4 text-[16px]">
        We're sorry, but something went wrong
      </h1>

      <Button
        backgroundColor="bg-gradient-to-r from-cyan-500 to-blue-400"
        color="text-white"
        width="w-[130px]"
        name="Try again"
        onClick={resetErrorBoundary}
      />
    </div>
  );
};

export default ErrorFallback;
