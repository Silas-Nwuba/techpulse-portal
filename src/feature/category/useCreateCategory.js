import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createCategory as createCategoryApi } from "../../service/ApiCategory";

const useCreateCategory = () => {
  const queryClient = useQueryClient();
  const {
    mutate: createCategory,
    isPending: isCreating,
    isError,
  } = useMutation({
    mutationFn: createCategoryApi,
    onSuccess: () => {
      toast.success("Category Created Successfully", {
        id: "successId",
      });
      queryClient.invalidateQueries({ queryKey: ["category"] });
    },
    onError: (error) => {
      toast.error(error, {
        id: "errorId",
      });
    },
  });
  return { createCategory, isCreating, isError };
};
export default useCreateCategory;
