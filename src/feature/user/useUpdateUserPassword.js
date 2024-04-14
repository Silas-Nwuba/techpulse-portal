import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentUserPassword } from "../../service/apiAuth";
import toast from "react-hot-toast";

export const useUpdateUserPassword = () => {
  const queryclient = useQueryClient();
  const { mutate: updatePassword, isPending: isLoadingPassword } = useMutation({
    mutationFn: updateCurrentUserPassword,
    onSuccess: ({ user }) => {
      queryclient.setQueryData(["user"], user);
      toast.success("User password updated successfully!", {
        id: "successId",
      });
    },
    onError: (error) => {
      toast.success(error.message, {
        id: "errorId",
      });
    },
  });
  return { updatePassword, isLoadingPassword };
};
