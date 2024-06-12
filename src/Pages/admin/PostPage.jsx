import React, { useEffect } from "react";
import Post from "../../feature/post/Post";
import { useUserDropdown } from "../../context/UserDropdownContextApi";

const PostPage = () => {
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
  return <Post />;
};

export default PostPage;
