import React from "react";

const Stat = ({ color, name, data, children }) => {
  return (
    <div
      className={`bg-white rounded-md py-3 flex items-center px-5  gap-4 shadow-sm w-full`}
    >
      <span className={`${color} rounded-full p-4`}>{children}</span>
      <span className="leading-6">
        <h1 className="text-stone-[#333333] font-medium text-[16px]">{name}</h1>
        <h3 className="text-stone-[#333333] font-semibold text-[18px] ">
          {data}
        </h3>
      </span>
    </div>
  );
};
export default Stat;
