import React from "react";
import { HiMiniPlay } from "react-icons/hi2";
import { Link } from "react-router-dom";
import BusinessLoaderSpinner from "./BusinessLoaderSpinner";
import { useGetallPost } from "../feature/post/useGetallPost";
import BusinessContent from "./BusinessContent";
const Business = () => {
  const { data, isLoading } = useGetallPost();
  const businessArr = data?.filter((data) => data.category === "Business");
  return (
    <section className="mt-10">
      <div className="flex justify-between items-center">
        <span className="flex item-center gap-2">
          <h2 className="text-2xl font-semibold text-stone-800 tracking-wide uppercase">
            Business
          </h2>
          <HiMiniPlay className="text-[#007bff] text-xl mt-[5px]" />
        </span>
        <Link to={"/business"} className="text-[#007bff] text-sm">
          See More
        </Link>
      </div>
      <div className="bg-slate-100 w-full h-[2px] mt-3 relative">
        <div className="bg-sky-500 w-[50px] h-full border-2 border-sky-500 absolute bottom-0"></div>
      </div>
      {isLoading && (
        <div className="space-y-5 mt-10">
          <BusinessLoaderSpinner />
        </div>
      )}
      {!isLoading && businessArr?.length === 0 && (
        <p className="mt-10 text-center text-[15px]">
          No business posts available. Check back soon!
        </p>
      )}

      {!isLoading && businessArr?.length !== 0 && (
        <div className="mt-10 grid grid-cols-1 gap-10 md:gap-7 md:grid-cols-3">
          {businessArr?.map((data) => (
            <BusinessContent data={data} key={data.id} />
          ))}
        </div>
      )}
    </section>
  );
};
export default Business;
