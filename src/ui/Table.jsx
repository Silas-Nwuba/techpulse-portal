import React from "react";
const Table = ({ children }) => {
  return (
    <table className="w-full text-sm rounded-sm text-left rtl:text-right text-gray-700">
      {children}
    </table>
  );
};
const Header = ({ children }) => {
  return (
    <thead className="text-[13px] font-normal capitalize dark:border-b-[0.5px] border border-slate-50 dark:border-0 dark:border-b-[#172340] dark:bg-[#363d4b] bg-slate-50">
      {children}
    </thead>
  );
};
const Row = ({ children }) => {
  return (
    <tr className="text-[14px] px-[.85rem] py-[.85rem] dark:hover:bg-opacity-[0.2] transition-all font-normal dark:text-[#ced4da]">
      {children}
    </tr>
  );
};
const Body = ({ data, render }) => {
  if (!data?.length)
    return (
      <tbody className="dark:border-none w-full dark:text-[#ced4da] mt-3">
        No records found
      </tbody>
    );
  return (
    <tbody className="dark:text-white whitespace-nowrap">
      {data.map(render)}
    </tbody>
  );
};
Table.Header = Header;
Table.Body = Body;
Table.Row = Row;

export default Table;
