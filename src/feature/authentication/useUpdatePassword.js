import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { updatePassword as updatePasswordApi } from "../../service/apiAuth";
export const useUpdatePassword = () => {
  const naviagate = useNavigate();
  const { mutate: updatePassword, isPending: isUpdatingPassword } = useMutation(
    {
      mutationFn: updatePasswordApi,
      onSuccess: () => {
        naviagate("admin/login");
        toast.success("password updated successfully!", {
          id: "successId",
        });
      },
      onError: (error) => {
        toast.success(error.message, {
          id: "errorId",
        });
      },
    }
  );
  return { updatePassword, isUpdatingPassword };
};
