import React from "react";
import { HiMiniPlay } from "react-icons/hi2";
import { Link } from "react-router-dom";
import SmartphoneLoaderSpinner from "./SmartphoneLoaderSpinner";
import { useGetallPost } from "../feature/post/useGetallPost";
import SmartphoneContent from "./SmartphoneContent";
const Smartphone = () => {
  const { data, isLoading } = useGetallPost();
  const smartphoneArr = data?.filter((item) => item.category === "Smartphone");
  return (
    <section className="mt-20">
      <div className="flex justify-between items-center">
        <span className="flex item-center gap-2">
          <h2 className="text-2xl font-semibold text-stone-800 tracking-wide uppercase">
            Smartphone
          </h2>
          <HiMiniPlay className="text-[#007bff] text-xl mt-[5px]" />
        </span>
        <Link className="text-[#007bff] text-sm">See More</Link>
      </div>
      <div className="bg-[#ebeaea] w-full h-[2px] mt-3">
        <div className="bg-sky-500 w-20 h-full"></div>
      </div>
      {isLoading && <SmartphoneLoaderSpinner />}
      {!isLoading && smartphoneArr?.length !== 0 && (
        <SmartphoneContent data={smartphoneArr} />
      )}
    </section>
  );
};
export default Smartphone;
