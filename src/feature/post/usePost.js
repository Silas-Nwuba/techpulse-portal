import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getPost } from "../../service/apiPost";

export const usePost = () => {
  const queryClient = useQueryClient();
  const {
    isError,
    isLoading,
    data: post,
  } = useQuery({
    queryKey: ["post"],
    queryFn: getPost,
  });
  queryClient.setQueryData("post", post);

  const postData = queryClient.getQueryData("post") || [];

  return { isError, isLoading, postData };
};
