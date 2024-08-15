import { useInfiniteQuery } from "@tanstack/react-query";
import { getPost } from "../../service/apiPost";
import { Post_Per_page } from "../../utils/constant";

export const usePost = () => {
  const {
    data,
    isError,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["post"],
    queryFn: getPost,
    getNextPageParam: (lastPage, allPage) => {
      if (
        !lastPage ||
        lastPage.data?.length === undefined ||
        lastPage?.data?.length < Post_Per_page ||
        !Array.isArray(lastPage.data) ||
        lastPage?.data?.length === 0
      ) {
        return null;
      } else if (lastPage?.data.length === undefined)
        console.log("error from usePost");
      return allPage.length + 1;
    },
  });
  return {
    data,
    isError,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  };
};
