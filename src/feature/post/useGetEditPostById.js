import { useQuery } from "@tanstack/react-query";
import { getEditPostData } from "../../service/apiPost";
import { useParams } from "react-router-dom";

const useGetEditPostById = () => {
  const { id } = useParams();
  const { data, error, isFetching } = useQuery({
    queryKey: ["editById"],
    queryFn: () => getEditPostData(id),
    retry: false,
  });

  return { error, data, isFetching };
};
export default useGetEditPostById;
