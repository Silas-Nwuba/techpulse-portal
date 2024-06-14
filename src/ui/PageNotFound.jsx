import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-full text-center">
      <img
        src="/image/notFound-1.png"
        alt="404"
        className=" max-h-40  mx-auto"
      />
      <span className="space-y-3 mt-4">
        <h1 className="dark:text-[#CBD5E0]">
          This page doesn’t exist. Try searching for something else.
        </h1>
        <p onClick={() => navigate(-1)} className="text-sky-600 cursor-pointer">
          Go back
        </p>
      </span>
    </div>
  );
};

export default PageNotFound;
