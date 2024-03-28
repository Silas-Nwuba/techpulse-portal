import React from "react";
// import {
//   HiOutlineCalendar,
//   HiOutlineChatBubbleLeft,
//   HiOutlineUser,
// } from "react-icons/hi2";
import { Link } from "react-router-dom";
import PostDetails from "./PostDetails";

const LastestPost = () => {
  return (
    <div className="flex flex-col gap-5  bg-white xl:w-[100%] rounded-xl self-start col-span-3 shadow-sm mt-5 py-3 ">
      <h1 className="font-semibold pt-4 text-stone-700 text-[24px] px-5">
        Latest News
      </h1>
      {/* <div className="block gap-4 mt-2 sm:flex px-5 w-full ">
        <div className=" w-full h-[200px] sm:w-[250px] sm:h-[170px] bg-gray-100 skeleton mb-2"></div>
        <div className="w-full">
          <div className="w-[50%]  sm:w-[120px] h-[10px]  bg-gray-100 rounded-full  skeleton"></div>
          <div className="h-[20px] w-[230px] sm:w-[60%] sm:h-[20px] bg-gray-100 rounded-full mt-1 mb-2  skeleton"></div>
          <div className="w-[100%] h-[10px] bg-gray-100 rounded-full mt-1  skeleton"></div>
          <div className="w-[100%] h-[10px] bg-gray-100 rounded-full mt-1  skeleton"></div>
          <div className="w-[100%] h-[10px] bg-gray-100 rounded-full mt-1  skeleton"></div>
          <div className="w-[100%] h-[10px] bg-gray-100 rounded-full mt-1  skeleton"></div>
          <div className="w-[100%] h-[10px] bg-gray-100 rounded-full mt-1  skeleton"></div>
          <div className="flex  gap-10 items-center mt-2">
            <div className="w-[50px] h-[10px] sm:w-[100px] sm:h-[15px]  rounded-full mt-1 skeleton"></div>
            <div className="w-[50px] h-[10px] sm:w-[100px] sm:h-[15px]  rounded-full mt-1 skeleton"></div>
            <div className="w-[50px] h-[10px] sm:w-[100px] sm:h-[15px]  rounded-full mt-1 skeleton"></div>
          </div>
        </div>
      </div> */}

      <div className="block gap-10 xl:gap-5 md:flex px-5 mb-2">
        <Link to="/news/The Good and Bad of Musk’s Grok AI">
          <img
            src="\image\tech-image-1.jpg"
            alt="postimage"
            className="mb-5 w-full xl:max-w-[350px] xl:max-h-[350px] md:mb-0 cursor-pointer rounded-md"
          />
        </Link>

        <div>
          <p className="font-semibold text-sky-600 text-sm  mb-1 uppercase">
            Technology
          </p>
          <Link
            to={"/news/The Good and Bad of Musk’s Grok AI"}
            className="text-xl font-bold text-stone-800 cursor-pointer hover:text-sky-500 transition-colors duration-150"
          >
            The Good and Bad of Musk’s Grok AI
          </Link>
          <p className="text-sm text-stone-500 leading-7">
            To say Elon Musk is an interesting guy would be an understatement.
            He goes from brilliant to bozo and back again in a blink. It’s like
          </p>
          <PostDetails />
        </div>
      </div>
      <div className="block gap-10  xl:gap-5 md:flex px-5 mb-2">
        <Link to="/news/The Good and Bad of Musk’s Grok AI">
          <img
            src="\image\tech-image-1.jpg"
            alt="postimage"
            className=" mb-5  w-full xl:max-w-[350px] xl:max-h-[350px] md:mb-0 cursor-pointer rounded-md"
          />
        </Link>

        <div>
          <p className="font-semibold text-sky-600 text-sm  mb-1 uppercase">
            Technology
          </p>
          <Link
            to={"/news/The Good and Bad of Musk’s Grok AI"}
            className="text-xl font-bold text-stone-800 cursor-pointer hover:text-sky-500 transition-colors duration-150"
          >
            The Good and Bad of Musk’s Grok AI
          </Link>
          <p className="text-sm text-stone-500 leading-7">
            To say Elon Musk is an interesting guy would be an understatement.
            He goes from brilliant to bozo and back again in a blink. It’s like
          </p>
          <PostDetails />
        </div>
      </div>
      <div className="block gap-10  xl:gap-5 md:flex px-5 mb-2">
        <Link to="/news/The Good and Bad of Musk’s Grok AI">
          <img
            src="\image\tech-image-1.jpg"
            alt="postimage"
            className="mb-5 w-full xl:max-w-[350px] xl:max-h-[350px] md:mb-0 cursor-pointer rounded-md"
          />
        </Link>

        <div>
          <p className="font-semibold text-sky-600 text-sm mb-1 uppercase">
            Technology
          </p>
          <Link
            to={"/news/The Good and Bad of Musk’s Grok AI"}
            className="text-xl font-bold text-stone-800 cursor-pointer hover:text-sky-500 transition-colors duration-150"
          >
            The Good and Bad of Musk’s Grok AI
          </Link>
          <p className="text-sm text-stone-500 leading-7">
            To say Elon Musk is an interesting guy would be an understatement.
            He goes from brilliant to bozo and back again in a blink. It’s like
          </p>
          <PostDetails />
        </div>
      </div>

      <div className="border-t text-center  text-sm  cursor-pointer border-stone-300 w-full mt-10">
        <h3 className="pt-3 text-sky-400 font-medium">Load more</h3>
      </div>
    </div>
  );
};

export default LastestPost;
