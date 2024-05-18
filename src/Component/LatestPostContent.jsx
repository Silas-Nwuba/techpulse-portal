import React from "react";
import { FaClock, FaComment, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { formatPostDate } from "../utils/helper";
const LatestPostContent = ({ data }) => {
  return (
    <div className="flex flex-col mt-10 space-y-5">
      {data.slice(0, 4).map((data) => (
        <div key={data.id}>
          <Link className="flex gap-3">
            <span>
              <img
                src={`${data.image}`}
                alt=""
                className="object-cover w-[200px] h-[100px] hover:opacity-70 cursor-pointer transition-transform pb-3 duration-300 ease-in-out"
              />
            </span>
            <span>
              <h1 className="text-[16px] text-stone-600 font-semibold hover:text-[#007bff] transition-all cursor-pointer">
                {data.title}
              </h1>
              {/* <p className="text-sm text-stone-600">{}</p> */}
              <div className="flex gap-3 pt-2">
                <div className="flex items-center text-[(rgb(84, 86, 88))] text-[11px] gap-1">
                  <FaUser className="text-stone-400" />
                  <span className="text-[11px]">{data.author}</span>
                </div>
                <div className="flex gap-1 items-center text-[11px] text-[(rgb(84, 86, 88))]">
                  <FaClock className="text-stone-400" />
                  <span>{formatPostDate(data.createdDate)}</span>
                </div>
                <div className="flex items-center text-[11px] text-[(rgb(84, 86, 88))] gap-1">
                  <FaComment className="text-stone-400" />
                  <span>10</span>
                </div>
              </div>
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default LatestPostContent;