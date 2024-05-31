import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { editPost as editPostApi } from "../../service/apiPost";
const useEditPost = () => {
  const queryClient = useQueryClient();
  const { mutate: editPost, isPending: isEditing } = useMutation({
    mutationKey: ["editPost"],
    mutationFn: ({ newPostData, id }) => editPostApi(newPostData, id),
    onSuccess: (data) => {
      toast.success("Post successfully edited", {
        id: "sucessId",
      });
      window.location.href = "http://localhost:5173/admin/post";
      queryClient.setQueryData(["post"], data);
      queryClient.invalidateQueries({
        queryKey: ["editPost"],
      });
    },
    onError: (error) => {
      toast.error(error.message, {
        id: "errorId",
      });
    },
  });
  return { editPost, isEditing };
};
export default useEditPost;
