import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePost as deletePostApi } from "../../service/apiPost";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useDeletePost = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: deletePost, isPending: isDeleting } = useMutation({
    mutationFn: deletePostApi,
    onSuccess: () => {
      toast.success("Post successfully deleted", {
        id: "successId",
      });
      navigate("/post/allPost");
      queryClient.invalidateQueries({
        queryKey: ["post"],
      });
    },
    onError: () =>
      toast.error(
        "Delete operation failed due to existing references from other records.",
        {
          id: "errorId",
        }
      ),
  });
  return { deletePost, isDeleting };
};
