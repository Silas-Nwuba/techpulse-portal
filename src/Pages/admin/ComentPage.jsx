import React, { useEffect } from "react";
import CommentTable from "../../feature/comment/CommentTable";
import { useUserDropdown } from "../../context/UserDropdownContextApi";
const ComentPage = () => {
  const { dispatch } = useUserDropdown();
  useEffect(() => {
<<<<<<< HEAD
    window.scrollTo({ top: 0 });
=======
>>>>>>> 2240043135df3e38123bbfa092520827935184bb
    dispatch({ type: "closeUserDropdown", payload: false });
  }, [dispatch]);
  return (
    <>
      <CommentTable />
    </>
  );
};

export default ComentPage;
