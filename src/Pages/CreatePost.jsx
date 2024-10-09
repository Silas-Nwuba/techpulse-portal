import React, { useEffect } from "react";
import CreatePost from "../feature/post/CreatePost";

const CreatePostPage = () => {
  useEffect(() => {
    document.title = "TekMatas | Add Post";
  }, []);

  return <CreatePost />;
};

export default CreatePostPage;
