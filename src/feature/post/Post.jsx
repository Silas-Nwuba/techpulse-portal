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
import Cursor from "quill/blots/cursor";
const Post = () => {
  const navigate = useNavigate();
  //prettier-ignore
  const { data, isError,isLoading,fetchNextPage,hasNextPage, isFetchingNextPage} = usePost();
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
            {pages.data?.map((post) => (
              <PostContent post={post} key={post.id} />
            ))}
          </div>
        ))}
      {hasNextPage && (
        <span className="flex flex-col items-center">
          <button
            type="button"
            className={`rounded-full ${
              isFetchingNextPage ? "cursor-wait" : "cursor-pointer"
            } text-sm transition-all ease-in-out text-stone-100 bg-[#007bff]  hover:bg-[#4c8ccf] w-40 py-2 px-4 mb-10 font-medium mt-5`}
            disabled={!hasNextPage}
            onClick={() => fetchNextPage()}
          >
            {isFetchingNextPage ? "Loading more.." : "Load more"}
          </button>
        </span>
      )}
    </div>
  );
};
export default Post;
