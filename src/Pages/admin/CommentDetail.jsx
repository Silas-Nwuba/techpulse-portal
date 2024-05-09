import React, { useEffect } from "react";
import CommentDetailBox from "../../feature/comment/CommentDetailBox";
import { useUserDropdown } from "../../context/UserDropdownContextApi";

const CommentDetail = () => {
  const { dispatch } = useUserDropdown();
  useEffect(() => {
<<<<<<< HEAD
    window.scrollTo({ top: 0 });
=======
>>>>>>> 2240043135df3e38123bbfa092520827935184bb
    dispatch({ type: "closeUserDropdown", payload: false });
  }, [dispatch]);
  return <CommentDetailBox />;
};

export default CommentDetail;
