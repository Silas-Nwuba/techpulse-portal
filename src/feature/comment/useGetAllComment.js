import { useQuery } from "@tanstack/react-query";
import { getComment } from "../../service/apiComment";
const useGetAllComment = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["all comments"],
    queryFn: getComment,
  });
  return { data, isLoading, error };
};

export default useGetAllComment;
