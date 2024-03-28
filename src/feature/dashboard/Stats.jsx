import React from "react";
import Stat from "../../ui/Stat";
import {
  HiOutlineChatBubbleLeft,
  HiOutlinePencilSquare,
  HiOutlineUserGroup,
} from "../../../node_modules/react-icons/hi2";
import { usePost } from "../post/usePost";
import { useComment } from "../comment/useComment";
import { useUser } from "../authentication/useUser";
import { formatNumber } from "../../utils/formatNumber";

const Stats = () => {
  const { postData } = usePost();
  const { count, comments } = useComment();
  const { user } = useUser();
  // const approved = comments.map((comment) => comment.status === "Approved");
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10 md:grid-cols-2 lg:grid-cols-4 col-span-1 md:mt-5">
      <Stat name="User" color="bg-sky-400" data={formatNumber(1)}>
        <HiOutlineUserGroup className="text-2xl text-white" />
      </Stat>
      <Stat name="Post" color="bg-indigo-400" data={formatNumber(9)}>
        <HiOutlinePencilSquare className="text-2xl text-white font-semibold" />
      </Stat>
      <Stat name="Comment" color="bg-orange-400" data={formatNumber(1000)}>
        <HiOutlineChatBubbleLeft className="text-2xl text-white " />
      </Stat>
      <Stat name="Approved" color="bg-green-400" data={formatNumber(1000)}>
        <HiOutlineChatBubbleLeft className="text-2xl text-white" />
      </Stat>
    </div>
  );
};
export default Stats;
