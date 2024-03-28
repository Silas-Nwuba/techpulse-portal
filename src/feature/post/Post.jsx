import React, { useEffect, useState } from "react";
import PostContent from "./PostContent";
import { usePost } from "./usePost";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";
import PostLoaderSpinner from "../../ui/PostLoaderSpinner";
import { useUserDropdown } from "../../context/UserDropdownContextApi";
import Error from "../../ui/Error";
const Post = () => {
  const navigate = useNavigate();
  let { isError, isLoading, postData } = usePost();
  const [isComponentMountLoading, setIsComponentMountLoading] = useState(false);
  const { dispatch } = useUserDropdown();
  useEffect(() => {
    setIsComponentMountLoading(true);
    if (Array.isArray(postData)) {
      setIsComponentMountLoading(false);
    }
    document.title = "Post - TechPulse";
    return () => {
      document.title = "Post - TechPulse";
    };
  }, [postData]);

  if (isLoading || isComponentMountLoading) {
    return <PostLoaderSpinner />;
  }
  if (isError) return <Error />;
  if (postData.length === 0) return;
  const handleAddPost = () => {
    navigate("/admin/post/create");
    dispatch({ type: "closeUserDropdown", payload: false });
  };
  return (
    <div className="mt-[100px] md:mt-10">
      <Button
        onClick={handleAddPost}
        name="New Post"
        backgroundColor="bg-[#007bff]"
        width="w-[120px]"
        hover="hover:bg-sky-500"
        marginBottom="mb-10"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-6 mb-10 mt-2 md:mt-0">
        {Array.isArray(postData) &&
          postData.map((post) => <PostContent post={post} key={post.id} />)}
      </div>
    </div>
  );
};

export default Post;
