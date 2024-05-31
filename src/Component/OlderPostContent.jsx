import React from "react";
import { Link } from "react-router-dom";

const OlderPostContent = ({ data }) => {
  return (
    <>
      {data?.slice(0, 4).map((data) => (
        <Link
          to={`/${
            data?.category.charAt(0).toLowerCase() + data?.category.slice(1)
          }/article/${data?.id}`}
          className="flex gap-3 mt-5"
          key={data?.id}
        >
          <img
            src={data?.image}
            alt={data?.title}
            className="object-cover w-[100px] h-[100px] hover:opacity-70 cursor-pointer transition-transform duration-300 ease-in-out"
          />
          <div className="space-y-1">
            <h1 className="text-[16px] text-[rgb(32, 34, 36)] font-semibold hover:text-[#007bff] transition-all cursor-pointer">
              {data?.title}
            </h1>

            {/* <p className="text-sm text-stone-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
            </p> */}
          </div>
        </Link>
      ))}
    </>
  );
};

export default OlderPostContent;
