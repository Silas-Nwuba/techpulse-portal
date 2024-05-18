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
    <section className="mt-8">
      <div className="flex justify-between items-center">
        <span className="flex item-center gap-2">
          <h2 className="text-lg font-semibold text-stone-800 tracking-wide uppercase">
            Older news
          </h2>
          <HiMiniPlay className="text-[#007bff] text-lg mt-[5px]" />
        </span>
        <Link className="text-[#007bff] text-sm">See More</Link>
      </div>
      <div className="bg-[#ebeaea] w-full h-[2px] mt-3">
        <div className="bg-sky-500 w-20 h-full"></div>
      </div>
      {isLoading && <OlderPostLoaderSpinner />}
      {!isLoading && olderPostArr?.length !== 0 && (
        <OlderPostContent data={olderPostArr} />
      )}
    </section>
  );
};

export default OlderPost;
