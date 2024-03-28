import React from "react";
import { HiOutlineCalendar } from "react-icons/hi2";

const PopularPost = () => {
  return (
    <div className="bg-white p-4 mt-10 shadow-sm rounded-md">
      {/* <div className="block sm:flex sm:gap-5 sm:items-center">
        <div className="w-[60px] h-[50px] rounded-sm skeleton"></div>
        <div className="w-full  mt-5 sm:mt-0">
          <div className="w-[80%] h-[15px] skeleton rounded-full mb-1"></div>
          <div className="w-[40%] h-[10px] skeleton rounded-full"></div>
        </div>
      </div> */}

      <h1 className="font-semibold text-xl pt-2 px-2 text-stone-700  mb-5">
        Popular News
      </h1>
      <div className="flex gap-3 border-b border-stone-300 mb-4">
        <img
          src="/image/images (5).jpg"
          alt="postimage"
          className=" w-[50px] object-cover h-[50px] mb-5 xl:mb-5  xl:w-[50px] xl:h-[50px] cursor-pointer"
        />
        <span>
          <h1 className="text-sm font-bold text-stone-600">
            The Good and Bad of Musk’s Grok AI
          </h1>
          <span className="flex gap-1 items-center">
            <HiOutlineCalendar className="text-sm text-sky-500" />
            <p className="mt-1 text-xs">02 Feb 2024</p>
          </span>
        </span>
      </div>
      <div className="flex gap-3 border-b border-stone-300 mb-4">
        <img
          src="/image/images (6).jpg"
          alt="postimage"
          className="w-[70px] object-cover h-[70px] mb-5 xl:mb-5  xl:w-[50px] xl:h-[50px] cursor-pointer"
        />
        <span>
          <h1 className="text-sm font-bold text-stone-600">
            The Good and Bad of Musk’s Grok AI
          </h1>
          <span className="flex gap-1 items-center">
            <HiOutlineCalendar className="text-sm text-sky-500" />
            <p className="mt-1 text-xs">02 Feb 2024</p>
          </span>
        </span>
      </div>
      <div className="flex gap-3 border-b border-stone-300 mb-4 ">
        <img
          src="/image/images (7).jpg"
          alt="postimage"
          className="w-[70px] object-cover h-[70px] mb-5  xl:mb-5  xl:w-[50px] xl:h-[50px] cursor-pointer"
        />
        <span>
          <h1 className="text-sm font-bold text-stone-600">
            The Good and Bad of Musk’s Grok AI
          </h1>
          <span className="flex gap-1 items-center">
            <HiOutlineCalendar className="text-sm text-sky-500" />
            <p className="mt-1 text-xs">02 Feb 2024</p>
          </span>
        </span>
      </div>
      <div className="text-center">
        <h3 className="pt-1 text-sky-400 font-medium text-sm cursor-pointer">
          Load more
        </h3>
      </div>
    </div>
  );
};

export default PopularPost;
