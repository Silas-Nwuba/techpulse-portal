import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center text-center mt-40">
      <img src="\image\pageNotFound.png" alt="404" className="w-40 h-40" />
      <span className="space-y-3 mt-4">
        <h1>
          Hmm...this page doesn’t exist. Try searching for something else.
        </h1>
        <p onClick={() => navigate(-1)} className="text-sky-600 cursor-pointer">
          Go back
        </p>
      </span>
    </div>
  );
};

export default PageNotFound;
