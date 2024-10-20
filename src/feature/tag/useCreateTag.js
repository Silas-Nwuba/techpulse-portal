import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTag as createTagApi } from "../../service/apiTag";

import toast from "react-hot-toast";
export const useCreateTag = () => {
  const queryClient = useQueryClient();
  const {
    mutate: createTag,
    isPending: isCreating,
    isError,
  } = useMutation({
    mutationFn: createTagApi,
    onSuccess: () => {
      toast.success("Tag Created Successfully", {
        id: "successId",
      });
      queryClient.invalidateQueries({ queryKey: ["tag"] });
    },
    onError: (error) => {
      toast.error(error);
    },
  });
  return { createTag, isCreating, isError };
};
