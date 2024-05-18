import { useQuery } from "@tanstack/react-query";
import { getAllPost } from "../../service/apiPost";

export const useGetallPost = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["allPost"],
    queryFn: getAllPost,
  });

  return { data, isLoading };
};
