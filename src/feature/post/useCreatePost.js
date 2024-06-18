import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createPost as createPostApi } from "../../service/apiPost";
const useCreatePost = () => {
  const queryClient = useQueryClient();
  const {
    mutate: createPost,
    isPending: isCreating,
    isError,
  } = useMutation({
    mutationFn: createPostApi,
    onSuccess: () => {
      toast.success("Post publish successfully", {
        id: "successId",
      });
      queryClient.invalidateQueries({ queryKey: ["post"] });
      window.scrollTo({ top: 0 });
    },
    onError: (error) => {
      toast.error(error, {
        id: "errorId",
      });
    },
  });

  return { createPost, isCreating, isError };
};

export default useCreatePost;
