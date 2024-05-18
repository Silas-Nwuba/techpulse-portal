import React from "react";
import { FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { formatPostDate } from "../utils/helper";
import { FaCalendarCheck } from "react-icons/fa";
const TechnologyContent = ({ data }) => {
  return (
    <div className="block lg:flex gap-6 mt-10">
      {data.slice(1, 2).map((data) => {
        return (
          <Link
            to={`news/article/${data.id}${Math.floor(Math.random() * 1000)}`}
            className="relative w-[900px] h-[420px]"
            key={data.id}
          >
            <img
              src={data.image}
              alt={data.title}
              className=" w-[900px] h-[420px] object-cover cursor-pointer transition-transform duration-300 ease-in-out flex-shrink-0"
            />
            <span className="absolute bottom-10 mx-4 z-[20000]">
              <h1 className="text-[24px] text-white font-bold cursor-pointer">
                {data.title}
              </h1>
              <div className="flex gap-3 pt-2 font-medium">
                <div className="flex items-center text-stone-100 text-[11px] gap-1">
                  <FaUser />
                  <span className="text-[11px] z-[20000]">{data.author}</span>
                </div>
                <div className="flex gap-1 items-center text-[11px] text-stone-100 ">
                  <FaCalendarCheck />
                  <span>{formatPostDate(data.createdDate)}</span>
                </div>
              </div>
            </span>
            <div className="bg-black z-[9999] w-full h-full opacity-40 absolute top-0"></div>
          </Link>
        );
      })}
      <span className="space-y-5 xl:mt-0 mt-20">
        {data.slice(1, 5).map((data) => {
          return (
            <Link
              to={`news/article/${data.id}${Math.floor(Math.random() * 1000)}`}
              className="flex gap-5"
              key={data.id}
            >
              <img
                src={data.image}
                alt={data.title}
                className="object-cover w-[100px] h-[91px] hover:opacity-70 cursor-pointer transition-transform duration-300 ease-in-out"
              />
              <div className="space-y-2">
                <h1 className="text-[15px] text-stone-600 font-semibold hover:text-[#007bff] transition-all cursor-pointer">
                  {data.title}
                </h1>
              </div>
            </Link>
          );
        })}
      </span>
    </div>
  );
};

export default TechnologyContent;