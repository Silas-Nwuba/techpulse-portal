import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteComment as deleteCommentApi } from "../../service/apiComment";
import { useNavigate } from "react-router-dom";

const useDeleteComment = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const {
    mutate: deleteComment,
    error,
    isPending: isDeleting,
  } = useMutation({
    mutationKey: ["comment"],
    mutationFn: (commentId) => deleteCommentApi(commentId),
    onSuccess: () => {
      toast.success("Comment deleted successfully", { id: "sucessId" });
      queryClient.invalidateQueries({ active: "comment" });
      navigate("/comment", { replace: true });
    },
    error: (error) => {
      toast.success(error.message, { id: "sucessId" });
    },
  });
  return { deleteComment, error, isDeleting };
};
export default useDeleteComment;
