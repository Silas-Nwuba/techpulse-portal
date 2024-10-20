import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { editCategory as editCategoryApi } from "../../service/apiCategory";

export const useEditCategory = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: editCategory, isPending: isEditing } = useMutation({
    mutationKey: ["category"],
    mutationFn: (updatedData) => editCategoryApi(updatedData),
    onSuccess: (data) => {
      queryClient.setQueryData(["category"], data);
      queryClient.invalidateQueries({
        queryKey: ["category"],
      });
      navigate("/post/category");
      toast.success("Category successfully edited", {
        id: "sucess1",
      });
    },
    onError: (error) => {
      toast.error(error.message, {
        id: "errorId",
      });
    },
  });
  return { editCategory, isEditing };
};
