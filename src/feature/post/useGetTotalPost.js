import { useQuery } from "@tanstack/react-query";
import { getTotalPost } from "../../service/apiPost";

const useGetTotalPost = () => {
  const { data: totalPost, error: getTotalPostErr } = useQuery({
    queryKey: ["post"],
    queryFn: getTotalPost,
  });
  return { totalPost, getTotalPostErr };
};

export default useGetTotalPost;
