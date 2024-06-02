import React from "react";
import { HiMiniPlay } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useGetallPost } from "../feature/post/useGetallPost";
import OlderPostLoaderSpinner from "./OlderPostLoaderSpinner";
import OlderPostContent from "./OlderPostContent";
import { differenceInDays, parseISO } from "date-fns";
const OlderPost = () => {
  const { data, isLoading } = useGetallPost();
  let olderPostArr = data?.filter(
    (item) => differenceInDays(new Date(), parseISO(item.createdDate)) > 0
  );
  return (
    <section className="mt-20 mb-20 xl:mb-0">
      <div className="flex justify-between items-center">
        <span className="flex item-center gap-2">
          <h2 className="text-lg font-semibold text-stone-800 tracking-wide uppercase dark:text-[#e0e0e0]">
            Older news
          </h2>
          <HiMiniPlay className="text-[#007bff] text-lg mt-[5px] dark:text-stone-100" />
        </span>
        <Link
          to={"/older"}
          className="text-[#007bff] text-sm dark:text-[#1e88e5]"
        >
          See More
        </Link>
      </div>
      <div className="bg-slate-100 w-full h-[2px] mt-3 relative dark:bg-[#2c2c2c]">
        <div className="bg-sky-500 w-[50px] h-full border-2 border-sky-500 absolute bottom-0"></div>
      </div>

      {isLoading && <OlderPostLoaderSpinner />}
      {!isLoading && olderPostArr?.length === 0 && (
        <p className="mt-10 text-center text-[15px]">
          No older posts available. Check back soon!
        </p>
      )}
      {!isLoading && olderPostArr?.length !== 0 && (
        <OlderPostContent data={olderPostArr} />
      )}
    </section>
  );
};

export default OlderPost;
