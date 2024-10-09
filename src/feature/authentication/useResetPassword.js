import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { resetPassword as resetPasswordApi } from "../../service/apiAuth";

export const useResetPassword = () => {
  const { mutate: resetPassword, isPending: isReseting } = useMutation({
    mutationFn: resetPasswordApi,
    onSuccess: (data) => {
      toast.success("Message has been sent to your email!", {
        id: "successId",
      });
    },
    onError: (error) => {
      if (error.message === "Failed to fetch") {
        toast.error("Please check internet connection", { id: "errorId" });
      } else toast.error(error.message, { id: "errorId" });
      toast.error(error.message);
    },
  });
  return { resetPassword, isReseting };
};
