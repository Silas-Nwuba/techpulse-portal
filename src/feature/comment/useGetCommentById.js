import { useQuery } from "@tanstack/react-query";
import { getCommentId } from "../../service/apiComment";
import { useParams } from "react-router-dom";

const useGetCommentById = () => {
  const { commentId } = useParams();
  const { data, error, isLoading } = useQuery({
    queryKey: ["comment"],
    queryFn: () => getCommentId(commentId),
    retry: false,
  });
  return { data, error, isLoading };
};

export default useGetCommentById;
