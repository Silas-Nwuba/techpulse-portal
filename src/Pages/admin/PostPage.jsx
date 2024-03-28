import React, { useEffect } from "react";
import Post from "../../feature/post/Post";
import { useUserDropdown } from "../../context/UserDropdownContextApi";

const PostPage = () => {
  const { dispatch } = useUserDropdown();
  useEffect(() => {
    dispatch({ type: "closeUserDropdown", payload: false });
  }, [dispatch]);
  return <Post />;
};

export default PostPage;
