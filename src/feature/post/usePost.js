import { QueryClient, useInfiniteQuery } from "@tanstack/react-query";
import { getPost } from "../../service/apiPost";
import { Page_Size } from "../../utils/constant";
const queryClient = new QueryClient();
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
      if (lastPage.length < Page_Size) return;
      return allPage.length + 1;
    },
    initialData: () => {
      return null;
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
