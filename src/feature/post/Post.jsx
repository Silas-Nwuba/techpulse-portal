import React, { useEffect } from "react";
import PostContent from "./PostContent";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";
import PostLoaderSpinner from "../../ui/PostLoaderSpinner";
import { useUserDropdown } from "../../context/UserDropdownContextApi";
import Error from "../../ui/Error";
import { usePost } from "./usePost";
import MiniLoaderSpinner from "../../ui/MiniLoaderSpinner";
import { useInView } from "react-intersection-observer";
const Post = () => {
  const navigate = useNavigate();
  //prettier-ignore
  const { data, isError,isLoading,fetchNextPage,hasNextPage} = usePost();
  const { ref, inView } = useInView();
  const { dispatch } = useUserDropdown();
  useEffect(() => {
    document.title = "Post | TechPulse";
    if (inView && hasNextPage) {
      fetchNextPage();
    }
    return () => {
      document.title = "Dashboard | TechPulse";
    };
  }, [inView, hasNextPage, fetchNextPage]);

  if (isLoading) return <PostLoaderSpinner />;
  if (isError) return <Error />;
  if (!data) return <Error />;
  const handleAddPost = () => {
    navigate("/post/create");
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
        marginBottom="mb-5"
      />
      {data &&
        data?.pages?.map((pages, index) => (
          <div
            className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 w-full gap-7 mb-10 mt-2 md:mt-0"
            key={index}
          >
            {/* {!hasNextPage ? (
              <p className="dark:text-[#CBD5E0]">
                No post is found please add a new post.
              </p>
            ) : (
              ""
            )} */}
            {pages.data?.map((post) => (
              <PostContent post={post} key={post.id} />
            ))}
          </div>
        ))}
      {hasNextPage && (
        <div className="flex justify-center" ref={ref}>
          <MiniLoaderSpinner
            borderRight="border-r-[#007bff]"
            borderTop="border-t-[#007bff]"
          />
        </div>
      )}
    </div>
  );
};
export default Post;
