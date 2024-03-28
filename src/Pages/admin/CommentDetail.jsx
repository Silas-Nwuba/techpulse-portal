import React, { useEffect } from "react";
import CommentDetailBox from "../../feature/comment/CommentDetailBox";
import { useUserDropdown } from "../../context/UserDropdownContextApi";

const CommentDetail = () => {
  const { dispatch } = useUserDropdown();
  useEffect(() => {
    dispatch({ type: "closeUserDropdown", payload: false });
  }, [dispatch]);
  return <CommentDetailBox />;
};

export default CommentDetail;
