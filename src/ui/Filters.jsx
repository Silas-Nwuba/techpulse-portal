import React from "react";
import CategoryDropdown from "./CategoryDropDown";
import StatusDropdown from "./StatusDropdown";

const Filters = ({
  setOpenDropdownIndex,
  isCategoryOpen,
  setCategoryOpen,
  isStatusOpen,
  setStatusOpen,
}) => {
  return (
    <>
      <CategoryDropdown
        setOpenDropdownIndex={setOpenDropdownIndex}
        isCategoryOpen={isCategoryOpen}
        setCategoryOpen={setCategoryOpen}
      />
      <StatusDropdown
        setOpenDropdownIndex={setOpenDropdownIndex}
        isStatusOpen={isStatusOpen}
        setStatusOpen={setStatusOpen}
      />
    </>
  );
};

export default Filters;
