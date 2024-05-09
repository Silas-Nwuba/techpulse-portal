<<<<<<< HEAD
import React, { useEffect} from "react";
import PostContent from "./PostContent";
=======
import React, { useEffect } from "react";
import PostContent from "./PostContent";
// import { usePost } from "./usePost";
>>>>>>> 2240043135df3e38123bbfa092520827935184bb
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";
import PostLoaderSpinner from "../../ui/PostLoaderSpinner";
import { useUserDropdown } from "../../context/UserDropdownContextApi";
import Error from "../../ui/Error";
import { usePost } from "./usePost";
import MiniLoaderSpinner from "../../ui/MiniLoaderSpinner";
import { useInView } from "react-intersection-observer";
<<<<<<< HEAD
import toast from "react-hot-toast";

const Post = () => {
  const navigate = useNavigate();
  //prettier-ignore
  const { data, isError,isLoading,fetchNextPage,hasNextPage} = usePost();
  const { ref, inView } = useInView();
  const { dispatch } = useUserDropdown();
  useEffect(() => {
  document.title = "Post - TechPulse";
=======
const Post = () => {
  const navigate = useNavigate();
  const { data, isError, isLoading, fetchNextPage, hasNextPage } = usePost();
  const { ref, inView } = useInView();
  const { dispatch } = useUserDropdown();
  console.log(data);

  useEffect(() => {
    document.title = "Post - TechPulse";
>>>>>>> 2240043135df3e38123bbfa092520827935184bb
    if (inView && hasNextPage) {
      fetchNextPage();
    }
    return () => {
      document.title = "Post - TechPulse";
    };
<<<<<<< HEAD
  }, [inView,  hasNextPage, fetchNextPage]);

  if (isLoading) return <PostLoaderSpinner />;
  if (isError) return <Error />;
  if(!data) return <Error />;
=======
  }, [inView, hasNextPage, fetchNextPage]);

  if (isLoading) {
    return <PostLoaderSpinner />;
  }
  if (isError) return <Error />;

  if (!data.pages.length) return;

>>>>>>> 2240043135df3e38123bbfa092520827935184bb
  const handleAddPost = () => {
    navigate("/admin/post/create");
    dispatch({ type: "closeUserDropdown", payload: false });
  };
<<<<<<< HEAD
=======

>>>>>>> 2240043135df3e38123bbfa092520827935184bb
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
      {data &&
<<<<<<< HEAD
        data?.pages?.map((pages, index) => (
          <div
            className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 w-full gap-6 mb-4 mt-2 md:mt-0"
            key={index}
          >
            {pages.data?.length === 0 ? <p> No post is found please add a new post.</p> : 
             pages.data?.map((post) => (
              <PostContent post={post} key={post.id} />
            ))} 
           
=======
        data.pages.map((pages, index) => (
          <div
            className="grid sm:grid-cols-2 grid-cols-1  md:grid-cols-3 w-full gap-6 mb-10 mt-2 md:mt-0"
            key={index}
          >
            {pages.map((post) => (
              <PostContent post={post} key={post.id} />
            ))}
>>>>>>> 2240043135df3e38123bbfa092520827935184bb
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
