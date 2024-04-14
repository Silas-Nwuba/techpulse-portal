import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editComment as editCommentApi } from "../../service/apiComment";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useEditComment = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: editComment, isPending: isEditingComment } = useMutation({
    mutationFn: (commentId) =>
      editCommentApi(commentId, { status: "Approved" }),
    onSuccess: () => {
      toast.success("Comment approved successfully", {
        id: "successId",
      });
      queryClient.invalidateQueries({
        queryKey: "comment",
      });
      navigate(-1);
    },
    onError: (error) => {
      toast.error("Comment failed to approve", { id: "errorId" });
    },
  });

  return { editComment, isEditingComment };
};

export default useEditComment;
