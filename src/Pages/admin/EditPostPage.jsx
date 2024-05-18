import React from "react";
import EditPost from "../../feature/post/EditPost";
import { useEffect } from "react";

const EditPostPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  });
  return <EditPost />;
};

export default EditPostPage;
