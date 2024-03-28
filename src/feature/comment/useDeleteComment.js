import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteComment as deleteCommentApi } from "../../service/apiComment";
import { useNavigate } from "react-router-dom";

const useDeleteComment = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
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
      navigate(-1);
    },
  });
  return { deleteComment, error, isDeleting };
};

export default useDeleteComment;
