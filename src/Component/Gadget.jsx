import React from "react";
import { FaClock, FaComment, FaUser } from "react-icons/fa";
import { HiMiniPlay } from "react-icons/hi2";
import { Link } from "react-router-dom";
import GadgetLoaderSpinner from "./GadgetLoaderSpinner";
import GadgetContent from "./GadgetContent";
import { useGetallPost } from "../feature/post/useGetallPost";

const Gadget = () => {
  const { data, isLoading } = useGetallPost();
  const gadgetArr = data?.filter((data) => data.category === "Gadget");
  return (
    <section className="mt-20">
      <div className="flex justify-between items-center">
        <span className="flex item-center gap-2">
          <h2 className="text-2xl font-semibold text-stone-800 tracking-wide uppercase">
            Gadget
          </h2>
          <HiMiniPlay className="text-[#007bff] text-xl mt-[5px]" />
        </span>
        <Link className="text-[#007bff] text-sm">See More</Link>
      </div>
      <div className="bg-[#ebeaea] w-full h-[2px] mt-3">
        <div className="bg-sky-500 w-20 h-full"></div>
      </div>
      {isLoading && <GadgetLoaderSpinner />}
      {!isLoading && gadgetArr?.length !== 0 && (
        <GadgetContent data={gadgetArr} />
      )}
    </section>
  );
};
export default Gadget;
