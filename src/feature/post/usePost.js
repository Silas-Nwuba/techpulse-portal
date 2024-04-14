import { useInfiniteQuery } from "@tanstack/react-query";
import { getPost } from "../../service/apiPost";
import { Page_Size } from "../../utils/constant";
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
      if (lastPage.length < Page_Size || lastPage === undefined) return;
      return allPage.length + 1;
    },
  });
  console.log(data);
  return {
    data,
    isError,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  };
};
