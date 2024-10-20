import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createCategory as createCategoryApi } from "../../service/apiCategory";

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
      console.log(error.message);
      if (error.message.includes("duplicate key value")) {
        toast.error("Category already exists", {
          id: "errorId",
        });
      } else {
        toast.error(error.message, {
          id: "errorId",
        });
      }
    },
  });
  return { createCategory, isCreating, isError };
};
export default useCreateCategory;
