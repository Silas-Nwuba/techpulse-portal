import React, { useEffect } from "react";
import CommentTable from "../../feature/comment/CommentTable";
import { useUserDropdown } from "../../context/UserDropdownContextApi";
const ComentPage = () => {
  const { dispatch } = useUserDropdown();
  useEffect(() => {
    dispatch({ type: "closeUserDropdown", payload: false });
  }, [dispatch]);
  return (
    <>
      <CommentTable />
    </>
  );
};

export default ComentPage;
