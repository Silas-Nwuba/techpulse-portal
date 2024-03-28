import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../service/apiAuth";
import toast from "react-hot-toast";

export const useSignup = () => {
  const {
    mutate: signUp,
    error,
    isPending: isLoading,
  } = useMutation({
    // mutationKey: ["user"],
    mutationFn: ({ email, password, fullname, role, avatar }) =>
      signupApi(email, password, fullname, role, avatar),
    onSuccess: () => {
      toast.success("User successfully created!", {
        id: "successId",
      });
    },
    onError: () => {
      toast.error(`An error occur user was not created!`, { id: "errorId" });
    },
  });
  return { signUp, error, isLoading };
};
