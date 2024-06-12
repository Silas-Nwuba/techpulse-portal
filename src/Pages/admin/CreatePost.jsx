import React, { useEffect } from "react";
import CreatePost from "../../feature/post/CreatePost";

const CreatePostPage = () => {
  useEffect(() => {
    document.body.classList.remove("bg-white");
    document.body.classList.add("bg-[#f9fafc]");
    return () => {
      document.body.classList.remove("bg-white");
    };
  });
  return <CreatePost />;
};

export default CreatePostPage;
