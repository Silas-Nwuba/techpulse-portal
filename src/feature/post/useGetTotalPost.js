import { useQuery } from "@tanstack/react-query";
import { getTotalPost } from "../../service/apiPost";

const useGetTotalPost = () => {
  const {
    data: totalPost,
    error: getTotalPostErr,
    isLoading: isTotalPost,
  } = useQuery({
    queryKey: ["post"],
    queryFn: getTotalPost,
  });
  return { totalPost, getTotalPostErr, isTotalPost };
};

export default useGetTotalPost;
