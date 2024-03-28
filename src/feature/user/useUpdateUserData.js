import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentUserData } from "../../service/apiAuth";
import toast from "react-hot-toast";
export function useUpdateUserData() {
  const queryClient = useQueryClient();
  const { mutate: updateUser, isPending: isUpdating } = useMutation({
    mutationFn: updateCurrentUserData,
    onSuccess: ({ user }) => {
      toast.success("User data successfully updated!", {
        id: "success",
      });
      queryClient.setQueryData(["user"], user);
    },
    onError: (err) => toast.error(err.message),
  });
  return { updateUser, isUpdating };
}
