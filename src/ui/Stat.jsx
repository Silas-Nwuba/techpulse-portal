import React from "react";
//prettier-ignore
const Stat = ({color,name,data,percentbg,percentcolor,percent,children}) => {

  return (
    <div className="bg-white border-[white]  dark:bg-[#0c1427] border dark:border-[#172340] rounded-md py-5 md:py-3 w-[100%]">
      <h1 className="text-[#000000] capitalize dark:text-[#E7E9EA] font-semibold text-[.875rem] md:text-[16px] my-3 ml-5">
        {name}
      </h1>
      <div className=" flex justify-between items-center px-5 gap-2 w-full">
        <div className="flex gap-2 ">
          <span
            className={`${color} bg-opacity-10  dark:bg-opacity-40 rounded-full  p-3 opacity-100`}
            >
            {children}
          </span>
          <span className="leading-6">
            <h2 className="text-stone-[#333333] dark:text-[#ced4da] text-[#000000] font-semibold text-[32px] my-1 mt-3">
              {data}
            </h2>
          </span>
        </div>
        <div
          className={` ${percentbg} ${percentcolor} bg-opacity-10 dark:bg-opacity-20 text-[14px] font-medium rounded-[5px] leading-[.95] py-[0.35em] px-[1em] text-center`}
        >
          <p>{percent}</p>
        </div>
      </div>
    </div>
  );
};

export default Stat;
