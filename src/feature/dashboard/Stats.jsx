import React from "react";
import Stat from "../../ui/Stat";
import {
  HiOutlineChatBubbleLeft,
  HiOutlinePencilSquare,
  HiOutlineUserGroup,
} from "../../../node_modules/react-icons/hi2";
import { useComment } from "../comment/useComment";
import { formatNumber } from "../../utils/formatNumber";
import Error from "../../ui/Error";
import FullPageLoaderSpinner from "../../ui/FullPageLoaderSpinner";
import { usePost } from "../post/usePost";
const Stats = () => {
  const {data, isLoading:isPostCount, error:postErr} = usePost();
  const { comments, error: commentErr, isLoading: isComment } = useComment();
  const approved = comments?.filter((comment) => comment.status === "Approved");

  if (postErr|| commentErr) return <Error />;
  if (isPostCount || isComment) return <FullPageLoaderSpinner />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10 md:grid-cols-2 lg:grid-cols-4 col-span-1 md:mt-5">
      <Stat name="User" color="bg-sky-400" data={formatNumber(1)}>
        <HiOutlineUserGroup className="text-2xl text-sky-800" />
      </Stat>
      <Stat name="Post" color="bg-indigo-400" data={formatNumber(data?.pages?.[0].count) }>
        <HiOutlinePencilSquare className="text-2xl font-semibold text-indigo-800" />
      </Stat>
      <Stat
        name="Comment"
        color="bg-orange-400"
        data={formatNumber(comments?.length)}
      >
        <HiOutlineChatBubbleLeft className="text-2xl text-orange-800" />
      </Stat>
      <Stat
        name="Approved"
        color="bg-green-400"
        data={formatNumber(approved?.length)}
      >
        <HiOutlineChatBubbleLeft className="text-2xl text-green-800" />
      </Stat>
    </div>
  );
};
export default Stats;
