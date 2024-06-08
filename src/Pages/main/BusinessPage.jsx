import React, { useEffect } from "react";
import { FaClock, FaComment, FaUser } from "react-icons/fa";
import { HiMiniPlay } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useGetallPost } from "../../feature/post/useGetallPost";
import { formatPostDate } from "../../utils/helper";
import PageLoaderSpinner from "../../Component/PageLoaderSpinner";

const BusinessPage = () => {
  const { data, isLoading } = useGetallPost();
  const businessPostErr = data?.filter((data) => data.category === "Business");
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.title = "Business | TechPulse";
    return () => {
      document.title = "TechPulse: Tech to the world";
    };
  }, []);
  return (
    <section className="min-h-screen">
      <div>
        <span className="flex item-center gap-2">
          <h2 className="text-xl font-semibold text-stone-800 tracking-wide uppercase dark:text-[#e0e0e0]">
            Business
          </h2>
          <HiMiniPlay className="text-[#007bff] text-lg mt-[5px]" />
        </span>
        <div className="bg-[#ebeaea] w-full h-[2px] mt-3 dark:bg-[#2c2c2c]">
          <div className="bg-sky-500 w-20 h-full"></div>
        </div>
      </div>
      <div className="mt-10 grid lg:grid-cols-2  xl:grid-cols-3 gap-5">
        {isLoading && <PageLoaderSpinner />}
        {!isLoading && businessPostErr?.length === 0 && (
          <p className="mt-5 text-center text-[15px]">
            No smartphone posts available. Check back soon!
          </p>
        )}
        {!isLoading &&
          businessPostErr.length !== 0 &&
          businessPostErr?.map((item) => {
            return (
              <Link
                to={`/${
                  item.category.charAt(0).toLowerCase() + item.category.slice(1)
                }/article/${item.id}`}
                className="flex gap-4"
                key={item.id}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[100px] h-[100px] object-cover hover:opacity-70 cursor-pointer transition-transform pb-3 duration-300 ease-in-out"
                />
                <span className="space-y-1">
                  <h1 className="text-[15px] text-stone-800 focus:text-[#007bff]  dark:text-[#e0e0e0] font-semibold hover:text-[#007bff] transition-all cursor-pointer">
                    {item.title}
                  </h1>
                  <div className="flex gap-3 pt-2">
                    <div className="flex items-center text-[(rgb(84, 86, 88))]  dark:text-stone-300 text-[11px] gap-1">
                      <FaUser className="text-stone-400" />
                      <span className="text-[11px]">{item.author}</span>
                    </div>
                    <div className="flex gap-1 items-center text-[11px] dark:text-stone-300 text-[(rgb(84, 86, 88))]">
                      <FaClock className="text-stone-400" />
                      <span>{formatPostDate(item.createdDate)}</span>
                    </div>
                    <div className="flex items-center text-[11px] dark:text-stone-300 text-[(rgb(84, 86, 88))] gap-1">
                      <FaComment className="text-stone-400" />
                      <span>10</span>
                    </div>
                  </div>
                </span>
              </Link>
            );
          })}
      </div>
      {/* <div className="my-80  bg-slate-50 py-10 flex flex-col justify-center items-center">
        <img src="\image\google-ads.PNG" alt="" className="w-[500px] " />
      </div> */}
    </section>
  );
};

export default BusinessPage;
