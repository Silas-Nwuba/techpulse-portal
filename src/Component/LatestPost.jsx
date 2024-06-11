import React from "react";
import { HiMiniPlay } from "react-icons/hi2";
import { Link } from "react-router-dom";
import LatestPostLoaderSpinner from "./LatestPostLoaderSpinner";
import { useGetallPost } from "../feature/post/useGetallPost";
import { differenceInDays, parseISO } from "date-fns";
import LatestPostContent from "./LatestPostContent";
const LatestPost = () => {
  const { data, isLoading } = useGetallPost();
  let latestPostArr = data?.filter(
    (item) => differenceInDays(new Date(), parseISO(item.createdDate)) === 1
  );

  return (
    <section className="xl:mb-10">
      <div className="flex justify-between items-center mt-20 xl:mt-0">
        <span className="flex item-center gap-2">
          <h2 className="text-lg font-semibold text-stone-800 dark:text-[#e0e0e0] tracking-wide uppercase">
            Latest news
          </h2>
          <HiMiniPlay className="text-[#007bff] text-lg mt-[5px]" />
        </span>
        <Link
          to={"/latest"}
          className="text-[#007bff] text-sm dark:text-[#1e88e5]"
        >
          See More
        </Link>
      </div>
      <div className="bg-slate-100 w-full h-[2px] mt-3 relative dark:bg-[#2c2c2c] ">
        <div className="bg-sky-500 w-[50px] h-full border-2 border-sky-500 absolute bottom-0"></div>
      </div>

      {isLoading && <LatestPostLoaderSpinner />}
      {!isLoading && latestPostArr?.length === 0 && (
        <p className="mt-10 text-center text-[15px] dark:text-[#e0e0e0]">
          No latest posts available. Check back soon!
        </p>
      )}
      {!isLoading && latestPostArr?.length !== 0 && (
        <LatestPostContent data={latestPostArr} />
      )}
    </section>
  );
};

export default LatestPost;
