import React from "react";
import Filter from "./Filter";
import { useSearchParams } from "react-router-dom";

const TableOperation = () => {
  const [searchParam] = useSearchParams();
  const status = searchParam.get("status");
  return (
    <div className="block xl:flex xl:items-center xl:justify-between w-full py-2 px-3 rounded-sm">
      {/* <h1 className="text-[16px] font-semibold text-stone-600 dark:text-[#d0d6e1]">
        {status === null && "All Comment"}
        {status === "All" && "All Comment"}
        {status === "Pending" && "Pending Comment"}
        {status === "Approved" && "Approved Comment"}
      </h1> */}
      <Filter
        filterField="status"
        option={[{ value: "All" }, { value: "Pending" }, { value: "Approved" }]}
      />
    </div>
  );
};

export default TableOperation;
