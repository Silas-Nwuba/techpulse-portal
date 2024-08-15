import { useQuery } from "@tanstack/react-query";
import { getCommentId } from "../../service/apiComment";
import { useParams } from "react-router-dom";

const useGetCommentById = () => {
  const { id } = useParams();

  const { data, error, isLoading } = useQuery({
    queryKey: ["comment"],
    queryFn: () => getCommentId(id),
    retry: false,
  });
  return { data, error, isLoading };
};

export default useGetCommentById;
