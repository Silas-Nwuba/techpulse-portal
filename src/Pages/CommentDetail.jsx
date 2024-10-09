import React, { useEffect } from "react";
import CommentDetailBox from "../feature/comment/CommentDetailBox";
import { useUserDropdown } from "../context/UserDropdownContextApi";

const CommentDetail = () => {
  const { dispatch } = useUserDropdown();
  useEffect(() => {
    window.scrollTo({ top: 0 });
    dispatch({ type: "closeUserDropdown", payload: false });
    document.title = "TekMatas | CommentDetails";
  }, [dispatch]);
  return <CommentDetailBox />;
};

export default CommentDetail;
