import React, { useEffect } from "react";
import Post from "../feature/post/Post";
import { useUserDropdown } from "../context/UserDropdownContextApi";
const PostPage = () => {
  const { dispatch } = useUserDropdown();
  useEffect(() => {
    window.scrollTo({ top: 0 });
    dispatch({ type: "closeUserDropdown", payload: false });
    document.title = "TekMatas | Post";
  }, [dispatch]);
  return <Post />;
};

export default PostPage;
