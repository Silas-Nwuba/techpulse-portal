import React from "react";
const HeaderAdvert = ({ marginTop, backgroundColor, height }) => {
  return (
    <div
      className={`px-3 ${marginTop} ${backgroundColor} ${height} dark:text-[#b0b0b0]`}
    >
      <p className="text-center py-2 text-stone-600  text-[18px] mb-1 font-medium ">
        Ad space
      </p>
    </div>
  );
};
export default HeaderAdvert;
