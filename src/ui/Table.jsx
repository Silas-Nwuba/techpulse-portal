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
    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
      {children}
    </thead>
  );
};
const Row = ({ children }) => {
  return <tr className="border border-stone-100 ">{children}</tr>;
};
const Body = ({ data, render }) => {
  if (!data?.length)
    return (
      <tbody className="border border-stone-100 w-full">
        <tr>
          <td className="px-6 py-3">No data to show at the moment</td>
        </tr>
      </tbody>
    );
  return <tbody>{data.map(render)}</tbody>;
};
Table.Header = Header;
Table.Body = Body;
Table.Row = Row;

export default Table;
