import React from "react";

const Stat = ({ color, name, data, children }) => {
  return (
    <div
      className={`bg-white dark:bg-[#2D3748]  rounded-md py-5 md:py-3 flex items-center px-5  gap-4 shadow w-full`}
    >
      <span className={`${color} rounded-full p-4`}>{children}</span>
      <span className="leading-6">
        <h1 className="text-stone-[#333333] dark:text-[#CBD5E0] font-medium text-lg">
          {name}
        </h1>
        <h3 className="text-stone-[#333333] dark:text-[#CBD5E0] font-semibold text-[18px] ">
          {data}
        </h3>
      </span>
    </div>
  );
};
export default Stat;
