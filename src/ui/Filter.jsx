import React from "react";
import { useSearchParams } from "react-router-dom";
import FilterButton from "./FilterButton";
const Filter = ({ filterField, option }) => {
  console.log(filterField, option);

  const [searchParam, setSearchParam] = useSearchParams();
  const currentFilterd = searchParam.get(filterField) || option.at(0).value;
  const handleFilter = (e) => {
    searchParam.set(filterField, e.target.textContent.toString().toLowerCase());
    setSearchParam(searchParam);
  };
  return (
    <div className="block space-y-5 space-x-5 md:space-x-0 md:space-y-0 relative right-4 md:flex md:items-center md:justify-end md:gap-5 px-1 py-3 mb-5">
      {option.map((option) => (
        <FilterButton
          option={option}
          onclick={handleFilter}
          active={option.value === currentFilterd}
          key={option.value}
        />
      ))}
    </div>
  );
};
export default Filter;
