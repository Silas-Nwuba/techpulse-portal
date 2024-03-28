import React from "react";
import SkeletonSpinner from "./SkeletonSpinner";

const PostLoaderSpinner = () => {
  return (
    <div className="md:mt-[40px] mt-[120px]">
      <div className="md:w-[20%] w-[40%] h-[40px] rounded-md skeleton mb-4"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-5 mb-10 mt-5">
        <SkeletonSpinner />
        <SkeletonSpinner />
        <SkeletonSpinner />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-5 mb-10 mt-5">
        <SkeletonSpinner />
        <SkeletonSpinner />
        <SkeletonSpinner />
      </div>
    </div>
  );
};

export default PostLoaderSpinner;
