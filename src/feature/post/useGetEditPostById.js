import { useQuery } from "@tanstack/react-query";
import { getEditPostById } from "../../service/apiPost";
import { useParams } from "react-router-dom";

const useGetEditPostById = () => {
  const { id } = useParams();
  console.log(typeof id);
  const { data, error, isFetching } = useQuery({
    queryKey: ["editById"],
    queryFn: () => getEditPostById(id),
  });

  return { error, data, isFetching };
};
export default useGetEditPostById;
