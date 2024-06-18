import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { editPost as editPostApi } from "../../service/apiPost";
const useEditPost = () => {
  const queryClient = useQueryClient();
  const location = window.location.origin;
  const { mutate: editPost, isPending: isEditing } = useMutation({
    mutationKey: ["editPost"],
    mutationFn: ({ newPostData, id }) => editPostApi(newPostData, id),
    onSuccess: (data) => {
      window.location.href = `${location}/post`;
      queryClient.setQueryData(["post"], data);
      queryClient.invalidateQueries({
        queryKey: ["editPost"],
      });
      // toast.success("Post successfully edited", {
      //   id: "sucess1",
      // });
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
