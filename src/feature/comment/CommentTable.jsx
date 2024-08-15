import React, { useEffect } from "react";
import Table from "../../ui/Table";
import Pagination from "../../ui/Pagination";
import CommentRow from "./CommentRow";
import { useComment } from "./useComment";
import FullPageLoaderSpinner from "../../ui/FullPageLoaderSpinner";
import TableOperation from "../../ui/TableOperation";
import Error from "../../ui/Error";
const CommentTable = () => {
  const { comments, count, error, isLoading } = useComment();
  useEffect(() => {
    document.title = "Comment | TechPulse";
    return () => {
      document.title = "Dashboard | TechPulse";
    };
  }, []);
  if (isLoading) return <FullPageLoaderSpinner />;
  if (error) return <Error />;
  return (
    <div className="mt-40 md:mt-10 bg-white rounded-md dark:bg-[#2D3748] shadow-sm  p-4 mb-10 w-full overflow-x-auto">
      <TableOperation />
      <Table>
        <Table.Header>
          <Table.Row>
            <th
              scope="col"
              className="px-6 py-3 text-[#333333] dark:text-[#E2E8F0]"
            >
              Id
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-[#333333] dark:text-[#E2E8F0]"
            >
              Username
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-[#333333] dark:text-[#E2E8F0]"
            >
              Email
            </th>

            <th
              scope="col"
              className="px-6 py-3 text-[#333333] dark:text-[#E2E8F0]"
            >
              Comment Date
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-[#333333] dark:text-[#E2E8F0]"
            >
              Status
            </th>
            <th scope="col" className="px-6 py-3 dark:text-[#E2E8F0]">
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
