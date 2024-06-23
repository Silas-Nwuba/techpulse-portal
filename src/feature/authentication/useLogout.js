import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../service/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useUserDropdown } from "../../context/UserDropdownContextApi";
const useLogout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { dispatch } = useUserDropdown();
  const { mutate: logout, isPending: isLogout } = useMutation({
    mutationKey: ["user"],
    mutationFn: logoutApi,
    onSuccess: () => {
      navigate("login", { replace: true });
      queryClient.removeQueries();
      dispatch({ type: "closeUserDropdown", payload: false });
    },
    onError: (error) => {
      if (error.message === "Failed to fetch") {
        toast.error("No internet connection", { id: "errorId" });
      } else {
        toast.error("Failed to logout", { id: "errorId" });
      }
    },
  });
  return { logout, isLogout };
};
export default useLogout;
