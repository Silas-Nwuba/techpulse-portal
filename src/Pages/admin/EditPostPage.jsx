import React from "react";
import EditPost from "../../feature/post/EditPost";
import { useEffect } from "react";

const EditPostPage = () => {
  useEffect(() => {
    document.body.classList.remove("bg-white");
    document.body.classList.add("bg-[#f9fafc]");
    window.scrollTo({ top: 0 });
    return () => {
      document.body.classList.remove("bg-white");
    };
  });
  return <EditPost />;
};

export default EditPostPage;
