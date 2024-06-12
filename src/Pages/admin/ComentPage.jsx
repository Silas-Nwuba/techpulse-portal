import React, { useEffect } from "react";
import CommentTable from "../../feature/comment/CommentTable";
import { useUserDropdown } from "../../context/UserDropdownContextApi";
const ComentPage = () => {
  const { dispatch } = useUserDropdown();
  useEffect(() => {
    document.body.classList.remove("bg-white");
    document.body.classList.add("bg-[#f9fafc]");
    window.scrollTo({ top: 0 });
    dispatch({ type: "closeUserDropdown", payload: false });
    return () => {
      document.body.classList.remove("bg-white");
    };
  }, [dispatch]);
  return (
    <>
      <CommentTable />
    </>
  );
};

export default ComentPage;
