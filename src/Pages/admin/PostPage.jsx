import React, { useEffect } from "react";
import Post from "../../feature/post/Post";
import { useUserDropdown } from "../../context/UserDropdownContextApi";

const PostPage = () => {
  const { dispatch } = useUserDropdown();
  useEffect(() => {
<<<<<<< HEAD
    window.scrollTo({ top: 0 });
=======
>>>>>>> 2240043135df3e38123bbfa092520827935184bb
    dispatch({ type: "closeUserDropdown", payload: false });
  }, [dispatch]);
  return <Post />;
};

export default PostPage;
