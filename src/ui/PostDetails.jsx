import React from "react";
import {
  HiOutlineCalendar,
  HiOutlineChatBubbleLeft,
  HiOutlineUser,
} from "react-icons/hi2";
import { Link } from "react-router-dom";

const PostDetails = () => {
  return (
    <div className="flex flex-wrap gap-5 items-center text-stone-600 text-sm mt-3">
      <span className="flex gap-1 items-center">
        <HiOutlineUser className="text-sky-600" />
        <p className="mt-1">Ebuka</p>
      </span>
      <span className="flex gap-1 items-center">
        <HiOutlineCalendar className="text-sky-600" />
        <p className="mt-1">02 Feb 2024</p>
      </span>
      <Link
        to="/news"
        className="flex gap-1 items-center cursor-pointer hover:text-sky-200 transition-all duration-200 leading-4"
      >
        <HiOutlineChatBubbleLeft className="text-sky-600 " />
        <p> 28 comment</p>
      </Link>
    </div>
  );
};

export default PostDetails;
