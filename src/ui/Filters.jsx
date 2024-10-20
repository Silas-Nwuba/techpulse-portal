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
      <CategoryDropdown />
    </>
  );
};

export default Filters;
