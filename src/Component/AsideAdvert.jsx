import React from "react";

const AsideAdvert = ({ height = "h-[100px]", marginTop = "10px" }) => {
  return (
    <div
      className={`flex mt-10  lg:mt-[${marginTop}] ${height} bg-gray-50 dark:bg-[#2c2c2c] flex-col  relative`}
    >
      <p
        className={` text-center py-3 text-stone-600 dark:text-[#b0b0b0]  text-[18px] mb-1 font-medium`}
      >
        Ad space
      </p>
    </div>
  );
};

export default AsideAdvert;
