import React, { useState } from "react";
import { HiMiniPlay } from "react-icons/hi2";
import { Link } from "react-router-dom";
import LatestPostLoaderSpinner from "./LatestPostLoaderSpinner";
import { useGetallPost } from "../feature/post/useGetallPost";
import { differenceInDays, parseISO } from "date-fns";
import LatestPostContent from "./LatestPostContent";
const LatestPost = () => {
  const { data, isLoading } = useGetallPost();
  const [noPost, setNoPost] = useState("");

  let latestPostArr = data?.filter(
    (item) => differenceInDays(new Date(), parseISO(item.createdDate)) === 0
  );

  if (latestPostArr?.length === 0) {
    // No posts with a difference of 0 days, check for posts with a difference of 1 day
    const previousPostArr = data?.filter(
      (item) => differenceInDays(new Date(), parseISO(item.createdDate)) === 1
    );

    if (previousPostArr?.length > 0) {
      // If there are posts with a difference of 1 day, display them
      latestPostArr = previousPostArr;
    } else {
      // Handle the case where there are no posts with a difference of 0 or 1 day
      setNoPost("No new posts available. Check back soon!");
    }
  }

  return (
    <section>
      <div className="flex justify-between items-center mt-10 xl:mt-0">
        <span className="flex item-center gap-2">
          <h2 className="text-lg font-semibold text-stone-800 tracking-wide uppercase">
            Latest news
          </h2>
          <HiMiniPlay className="text-[#007bff] text-lg mt-[5px]" />
        </span>
        <Link className="text-[#007bff] text-sm">See More</Link>
      </div>
      <div className="bg-[#ebeaea] w-full h-[2px] mt-3">
        <div className="bg-sky-500 w-20 h-full"></div>
      </div>

      {isLoading && <LatestPostLoaderSpinner />}
      {latestPostArr?.length === 0 && (
        <p className="mt-10 text-center text-[15px]">{noPost}</p>
      )}
      {!isLoading && latestPostArr?.length !== 0 && (
        <LatestPostContent data={latestPostArr} />
      )}
    </section>
  );
};

export default LatestPost;
