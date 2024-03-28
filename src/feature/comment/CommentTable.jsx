import React, { useEffect } from "react";
import Table from "../../ui/Table";
import Pagination from "../../ui/Pagination";
import CommentRow from "./CommentRow";
import { useComment } from "./useComment";
import TableSkeletonSpinner from "../../ui/TableSkeletonSpinner";
import TableOperation from "../../ui/TableOperation";
import Error from "../../ui/Error";

// const text = [
//   {
//     id: 100,
//     name: "silas",
//     email: "nwubasilas@yahoo.com",
//     date: "2024-03-04",
//     status: "Approved",
//   },
//   {
//     id: 101,
//     name: "angela",
//     email: "nwubasilas@yahoo.com",
//     date: "2024-03-04",
//     status: "Pending",
//   },
//   {
//     id: 102,
//     name: "emeka",
//     email: "nwubasilas@yahoo.com",
//     date: "2024-03-04",
//     status: "Approved",
//   },
//   {
//     id: 103,
//     name: "prince",
//     email: "nwubasilas@yahoo.com",
//     date: "2024-03-04",
//     status: "Pending",
//   },
//   {
//     id: 104,
//     name: "ebuka",
//     email: "nwubasilas@yahoo.com",
//     date: "2024-03-04",
//     status: "Approved",
//   },
//   {
//     id: 103,
//     name: "prince",
//     email: "nwubasilas@yahoo.com",
//     date: "2024-03-04",
//     status: "Pending",
//   },
//   {
//     id: 104,
//     name: "ebuka",
//     email: "nwubasilas@yahoo.com",
//     date: "2024-03-04",
//     status: "Approved",
//   },
// ];
const CommentTable = () => {
  const { comments, count, error, isLoading } = useComment();
  useEffect(() => {
    document.title = "Comment - TechPulse";
    return () => {
      document.title = "TechPulse";
    };
  }, []);
  if (isLoading) return <TableSkeletonSpinner />;
  if (error) return <Error />;
  return (
    <div className="mt-40 md:mt-10 bg-white shadow-sm rounded-sm  p-4 mb-10 w-full overflow-x-auto">
      <TableOperation />
      <Table>
        <Table.Header>
          <Table.Row>
            <th scope="col" className="px-6 py-3 text-[#333333]">
              Id
            </th>
            <th scope="col" className="px-6 py-3 text-[#333333]">
              Username
            </th>
            <th scope="col" className="px-6 py-3 text-[#333333]">
              Email
            </th>

            <th scope="col" className="px-6 py-3 text-[#333333]">
              Comment Date
            </th>
            <th scope="col" className="px-6 py-3 text-[#333333]">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </Table.Row>
        </Table.Header>
        <Table.Body
          data={comments}
          render={(comment) => (
            <CommentRow comment={comment} key={comment.id} />
          )}
        />
      </Table>
      <Pagination count={count} />
    </div>
  );
};

export default CommentTable;
