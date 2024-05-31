import React from "react";
import { HiMiniPlay } from "react-icons/hi2";
import { Link } from "react-router-dom";
import GadgetLoaderSpinner from "./GadgetLoaderSpinner";
import GadgetContent from "./GadgetContent";
import { useGetallPost } from "../feature/post/useGetallPost";

const Gadget = () => {
  const { data, isLoading } = useGetallPost();
  const gadgetArr = data?.filter((data) => data.category === "Gadget");
  return (
    <section className="mt-10">
      <div className="flex justify-between items-center">
        <span className="flex item-center gap-2">
          <h2 className="text-2xl font-semibold text-stone-800 tracking-wide uppercase">
            Gadget
          </h2>
          <HiMiniPlay className="text-[#007bff] text-xl mt-[5px]" />
        </span>
        <Link to={"/gadget"} className="text-[#007bff] text-sm">
          See More
        </Link>
      </div>
      <div className="bg-slate-100 w-full h-[2px] mt-3 relative">
        <div className="bg-sky-500 w-[50px] h-full border-2 border-sky-500 absolute bottom-0"></div>
      </div>
      {isLoading && <GadgetLoaderSpinner />}
      {!isLoading && gadgetArr?.length === 0 && (
        <p className="mt-10 text-center text-[15px]">
          No older posts available. Check back soon!
        </p>
      )}
      {!isLoading && gadgetArr?.length !== 0 && (
        <GadgetContent data={gadgetArr} />
      )}
    </section>
  );
};
export default Gadget;
