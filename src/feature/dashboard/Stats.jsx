import React from "react";
import Stat from "../../ui/Stat";
import { HiOutlinePencilSquare } from "../../../node_modules/react-icons/hi2";
import { useComment } from "../comment/useComment";
import { formatNumber } from "../../utils/formatNumber";
import { useGetCookie } from "../cookie/useGetCookieByDate";
import { useGetallPost } from "../post/useGetallPost";
import { comment } from "postcss";
const Stats = () => {
  const { comments } = useComment();
  const { data: post } = useGetallPost();
  //prettier-ignore
  const { data: cookies, } = useGetCookie();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5 md:grid-cols-2 lg:grid-cols-4 col-span-1 md:mt-5 w-full">
      <Stat
        name="Total Vistors"
        color="bg-[#EE3232]"
        data={formatNumber(cookies?.length)}
        percentbg={"bg-[#2d9d66]"}
        percentcolor={"text-[#40ec99]"}
        percent={`${Math.floor((cookies?.length / 1000) * 100)} %`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 text-[#EE3232] opacity-100 dark:opacity-80"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
          />
        </svg>
      </Stat>
      <Stat
        name="Posts"
        color="bg-[#228488]"
        data={formatNumber(post?.length)}
        percentbg={"bg-[#f97316]"}
        percentcolor={"text-[#f97316]"}
        percent={`${Math.floor((post?.length / 1000) * 100)} %`}
      >
        <HiOutlinePencilSquare className="text-2xl font-semibold text-[#36d3d8] opacity-100 dark:opacity-80" />
      </Stat>
      <Stat
        name="Comments"
        color="bg-green-400"
        data={formatNumber(comments?.length)}
        percentbg={"bg-[#6571ff]"}
        percentcolor={"text-[#6571ff]"}
        percent={`${Math.floor((comment?.length / 1000) * 100)} %`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 text-2xl text-green-400 opacity-100 dark:opacity-80"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
          />
        </svg>
      </Stat>
      <Stat
        name="Views"
        color="bg-yellow-400"
        data={formatNumber(comments?.length)}
        percentbg={"bg-green-500"}
        percentcolor={"text-green-500"}
        percent={`${Math.floor((comment?.length / 1000) * 100)} %`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 text-2xl text-yellow-400 opacity-100 dark:opacity-80"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
          />
        </svg>
      </Stat>
    </div>
  );
};
export default Stats;
