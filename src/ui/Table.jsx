import React from "react";
const Table = ({ children }) => {
  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-700 overflow-x-scroll">
      {children}
    </table>
  );
};
const Header = ({ children }) => {
  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-[#4A5568]">
      {children}
    </thead>
  );
};
const Row = ({ children }) => {
  return (
<<<<<<< HEAD
    <tr className="border border-stone-100 dark:border-none dark:text-white dark:even:bg-[#4A5568] even:bg-[#f8fafc]">
=======
    <tr className="border border-stone-100 dark:border-none dark:text-white dark:even:bg-[#4A5568]">
>>>>>>> 2240043135df3e38123bbfa092520827935184bb
      {children}
    </tr>
  );
};
const Body = ({ data, render }) => {
  if (!data?.length)
    return (
      <tbody className="border border-stone-100 dark:border-none w-full">
        <tr>
          <td className="px-6 py-3 dark:text-white">
            No data to show at the moment
          </td>
        </tr>
      </tbody>
    );
  return <tbody className="dark:text-white">{data.map(render)}</tbody>;
};
Table.Header = Header;
Table.Body = Body;
Table.Row = Row;

export default Table;
