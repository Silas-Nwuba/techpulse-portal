import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../service/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }) => loginApi(email, password),
    onSuccess: (user) => {
      navigate("/dashboard", { replace: true });
      queryClient.setQueryData(["user"], user.user);
    },
    onError: (error) => {
      if (error.message === "Failed to fetch") {
        toast.error("Please check internet connection", { id: "errorId" });
      } else toast.error(error.message, { id: "errorId" });
    },
  });
  return { login, isPending };
};

export default useLogin;
