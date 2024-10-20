import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCategory as deleteCategoryApi } from "../../service/apiCategory";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export const useDeleteCategory = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: deleteCategory, isPending: isDeleting } = useMutation({
    mutationFn: deleteCategoryApi,
    onSuccess: () => {
      toast.success("Category successfully deleted", {
        id: "successId",
      });
      navigate("/post/category");
      queryClient.invalidateQueries({
        queryKey: ["category"],
      });
    },
    onError: () =>
      toast.error(
        "Delete operation failed due to existing references from other records.",
        { id: "errorId" }
      ),
  });
  return { deleteCategory, isDeleting };
};
