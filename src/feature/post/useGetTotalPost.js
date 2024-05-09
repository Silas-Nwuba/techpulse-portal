import { useQuery } from "@tanstack/react-query";
import { getTotalPost } from "../../service/apiPost";

const useGetTotalPost = () => {
<<<<<<< HEAD
  const {
    data: totalPost,
    error: getTotalPostErr,
    isLoading: isTotalPost,
  } = useQuery({
    queryKey: ["post"],
    queryFn: getTotalPost,
  });
  return { totalPost, getTotalPostErr, isTotalPost };
=======
  const { data: totalPost, error: getTotalPostErr } = useQuery({
    queryKey: ["post"],
    queryFn: getTotalPost,
  });
  return { totalPost, getTotalPostErr };
>>>>>>> 2240043135df3e38123bbfa092520827935184bb
};

export default useGetTotalPost;
