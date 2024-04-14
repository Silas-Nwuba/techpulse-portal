import React from "react";
import PostDetails from "./PostDetails";
import { Link } from "react-router-dom";
import {
  RiFacebookFill,
  RiLinkedinFill,
  RiTwitterXFill,
  RiWhatsappFill,
  RiYoutubeFill,
} from "react-icons/ri";
import { HiChevronRight } from "react-icons/hi2";
import ViewComment from "../feature/comment/ViewComment";
import CreateComment from "../feature/comment/CreateComment";

const Content = () => {
  return (
    <div className="w-[100%] self-start col-span-2  mt-3 ">
      <div className="bg-white pb-2 mb-7 rounded-xl shadow-sm">
        <div className="p-6">
          {/* <div className="w-[80%] h-5 rounded-full skeleton"></div>
          <div className="w-[100%] h-40 rounded-md mt-5 skeleton"></div>
          <div className="w-[80%] h-5 rounded-full mt-5 skeleton"></div> */}
          <ul className="flex items-center cursor-pointer">
            <Link to={"/home"} className="text-sm text-sky-500 ">
              Home
            </Link>
            <HiChevronRight className="text-sm ml-1" />
            <li className="text-sm text-stone-400">Technology</li>
          </ul>
          <div>
            <div className="mb-6 ">
              <h2 className="text-3xl text-stone-600 mt-4 font-semibold w-[100%] sm:w-[90%]  leading-[40px] tracking-wide">
                The Good and Bad of Musk’s Grok AI Good and Bad of Musk’s
              </h2>
              <PostDetails />
            </div>

            <img
              src="\image\tech-image-1.jpg"
              alt="postImage"
              className="w-full h-full object-cover rounded-md"
            />
            <div className="mt-5 text-[16px]">
              <p className="leading-7 text-justify text-stone-500">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </p>
              <p className="leading-7 text-justify text-stone-500 mt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </p>
              <p className="leading-7 text-justify text-stone-500 mt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </p>
              <p className="leading-7 text-justify text-stone-500 mt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 mb-10">
          <div className="border-t border-stone-400 w-full mb-5"></div>
          <div className="flex flex-wrap gap-5 cursor-pointer ml-5">
            <div className="bg-sky-700  w-[80px] py-2 rounded-md hover:bg-sky-800 hover:transition-all hover:duration-200">
              <RiFacebookFill className="text-stone-50 text-xl text-center mx-auto font-bold" />
            </div>
            <div className="bg-sky-500 py-2 rounded-md  w-[80px] hover:bg-sky-600 hover:transition-all hover:duration-200">
              <RiTwitterXFill className="text-stone-50 text-xl text-center mx-auto font-bold" />
            </div>
            <div className="bg-[#1c791c] py-2 rounded-md w-[80px] hover:bg-[#43c043] hover:transition-all hover:duration-200">
              <RiWhatsappFill className=" text-stone-50 text-xl text-center mx-auto font-bold" />
            </div>
            <div className="bg-red-600 py-2 rounded-md w-[80px] hover:bg-red-500 hover:transition-all hover:duration-200">
              <RiYoutubeFill className=" text-stone-50 text-xl text-center mx-auto font-bold" />
            </div>
            <div className="bg-sky-600  py-2 rounded-md w-[80px]  hover:bg-sky-500 hover:transition-all hover:duration-200">
              <RiLinkedinFill className=" text-stone-50 text-xl text-center mx-auto font-bold" />
            </div>
          </div>
        </div>
      </div>
      <ViewComment />
      <CreateComment />
    </div>
  );
};

export default Content;
