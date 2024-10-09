import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const PageNotFound = () => {
  useEffect(() => {
    document.title = "404 Error";
    return () => {
      document.title = "404 Error";
    };
  }, []);

  const navigate = useNavigate();
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-full text-center">
      <span className="space-y-3 mt-4">
        <h1 className="dark:text-[#b9b9b9] text-2xl font-semibold">
          This page doesn’t exist. Try searching for something else.
        </h1>
        <p
          onClick={() => navigate(-1)}
          className="text-[#6C4DE6] cursor-pointer"
        >
          Go back
        </p>
      </span>
    </div>
  );
};

export default PageNotFound;
