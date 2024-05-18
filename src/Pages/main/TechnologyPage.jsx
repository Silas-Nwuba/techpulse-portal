import React, { useEffect } from "react";
import { FaClock, FaComment, FaUser } from "react-icons/fa";
import { HiMiniPlay } from "react-icons/hi2";
import { Link } from "react-router-dom";

const TechnologyPage = () => {
  useEffect(() => {
    // window.scrollTo({ top: 0 });
    document.title = "TechPulse - Technology";
    return () => {
      document.title = "TechPulse - Tech to the world";
    };
  }, []);
  return (
    <section>
      <div>
        <span className="flex item-center gap-2">
          <h2 className="text-2xl font-semibold text-stone-800 tracking-wide uppercase">
            Technology
          </h2>
          <HiMiniPlay className="text-[#007bff] text-xl mt-[5px]" />
        </span>
        <div className="bg-[#ebeaea] w-full h-[2px] mt-3">
          <div className="bg-sky-500 w-20 h-full"></div>
        </div>
      </div>
      <div className="mt-10 grid lg:grid-cols-2  xl:grid-cols-3 gap-5">
        <Link className="flex gap-4">
          <img
            src="/image/infinix.jpeg"
            alt=""
            className="w-[100px] h-[100px] object-cover hover:opacity-70 cursor-pointer transition-transform pb-3 duration-300 ease-in-out"
          />
          <span className="space-y-1">
            <h1 className="text-[15px] text-stone-800 font-semibold hover:text-[#007bff] transition-all cursor-pointer">
              Infinix NOTE 40 Series Takes Centre Stage With All-Round
              FastCharge 2.0
            </h1>
            <div className="flex gap-3 pt-2">
              <div className="flex items-center text-[(rgb(84, 86, 88))] text-[11px] gap-1">
                <FaUser className="text-stone-400" />
                <span className="text-[11px]">Ebuka</span>
              </div>
              <div className="flex gap-1 items-center text-[11px] text-[(rgb(84, 86, 88))]">
                <FaClock className="text-stone-400" />
                <span>02 Feb 2024</span>
              </div>
              <div className="flex items-center text-[11px] text-[(rgb(84, 86, 88))] gap-1">
                <FaComment className="text-stone-400" />
                <span>10</span>
              </div>
            </div>
          </span>
        </Link>
        <Link className="flex gap-4">
          <img
            src="/image/infinix.jpeg"
            alt=""
            className="w-[100px] h-[100px] object-cover hover:opacity-70 cursor-pointer transition-transform pb-3 duration-300 ease-in-out"
          />
          <span className="space-y-1">
            <h1 className="text-[15px] text-stone-800 font-semibold hover:text-[#007bff] transition-all cursor-pointer">
              Infinix NOTE 40 Series Takes Centre Stage With All-Round
              FastCharge 2.0
            </h1>
            <div className="flex gap-3 pt-2">
              <div className="flex items-center text-[(rgb(84, 86, 88))] text-[11px] gap-1">
                <FaUser className="text-stone-400" />
                <span className="text-[11px]">Ebuka</span>
              </div>
              <div className="flex gap-1 items-center text-[11px] text-[(rgb(84, 86, 88))]">
                <FaClock className="text-stone-400" />
                <span>02 Feb 2024</span>
              </div>
              <div className="flex items-center text-[11px] text-[(rgb(84, 86, 88))] gap-1">
                <FaComment className="text-stone-400" />
                <span>10</span>
              </div>
            </div>
          </span>
        </Link>
        <Link className="flex gap-4">
          <img
            src="/image/infinix.jpeg"
            alt=""
            className="w-[100px] h-[100px] object-cover hover:opacity-70 cursor-pointer transition-transform pb-3 duration-300 ease-in-out"
          />
          <span className="space-y-1">
            <h1 className="text-[15px] text-stone-800 font-semibold hover:text-[#007bff] transition-all cursor-pointer">
              Infinix NOTE 40 Series Takes Centre Stage With All-Round
              FastCharge 2.0
            </h1>
            <div className="flex gap-3 pt-2">
              <div className="flex items-center text-[(rgb(84, 86, 88))] text-[11px] gap-1">
                <FaUser className="text-stone-400" />
                <span className="text-[11px]">Ebuka</span>
              </div>
              <div className="flex gap-1 items-center text-[11px] text-[(rgb(84, 86, 88))]">
                <FaClock className="text-stone-400" />
                <span>02 Feb 2024</span>
              </div>
              <div className="flex items-center text-[11px] text-[(rgb(84, 86, 88))] gap-1">
                <FaComment className="text-stone-400" />
                <span>10</span>
              </div>
            </div>
          </span>
        </Link>
        <Link className="flex gap-4">
          <img
            src="/image/infinix.jpeg"
            alt=""
            className="w-[100px] h-[100px] object-cover hover:opacity-70 cursor-pointer transition-transform pb-3 duration-300 ease-in-out"
          />
          <span className="space-y-1">
            <h1 className="text-[15px] text-stone-800 font-semibold hover:text-[#007bff] transition-all cursor-pointer">
              Infinix NOTE 40 Series Takes Centre Stage With All-Round
              FastCharge 2.0
            </h1>
            <div className="flex gap-3 pt-2">
              <div className="flex items-center text-[(rgb(84, 86, 88))] text-[11px] gap-1">
                <FaUser className="text-stone-400" />
                <span className="text-[11px]">Ebuka</span>
              </div>
              <div className="flex gap-1 items-center text-[11px] text-[(rgb(84, 86, 88))]">
                <FaClock className="text-stone-400" />
                <span>02 Feb 2024</span>
              </div>
              <div className="flex items-center text-[11px] text-[(rgb(84, 86, 88))] gap-1">
                <FaComment className="text-stone-400" />
                <span>10</span>
              </div>
            </div>
          </span>
        </Link>
        <Link className="flex gap-4">
          <img
            src="/image/infinix.jpeg"
            alt=""
            className="w-[100px] h-[100px] object-cover hover:opacity-70 cursor-pointer transition-transform pb-3 duration-300 ease-in-out"
          />
          <span className="space-y-1">
            <h1 className="text-[15px] text-stone-800 font-semibold hover:text-[#007bff] transition-all cursor-pointer">
              Infinix NOTE 40 Series Takes Centre Stage With All-Round
              FastCharge 2.0
            </h1>
            <div className="flex gap-3 pt-2">
              <div className="flex items-center text-[(rgb(84, 86, 88))] text-[11px] gap-1">
                <FaUser className="text-stone-400" />
                <span className="text-[11px]">Ebuka</span>
              </div>
              <div className="flex gap-1 items-center text-[11px] text-[(rgb(84, 86, 88))]">
                <FaClock className="text-stone-400" />
                <span>02 Feb 2024</span>
              </div>
              <div className="flex items-center text-[11px] text-[(rgb(84, 86, 88))] gap-1">
                <FaComment className="text-stone-400" />
                <span>10</span>
              </div>
            </div>
          </span>
        </Link>
      </div>

      <div className="my-20  bg-slate-50 py-10 flex flex-col justify-center items-center">
        <img src="\image\google-ads.PNG" alt="" className="w-[500px] " />
      </div>
    </section>
  );
};

export default TechnologyPage;
