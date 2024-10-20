import { useQuery } from "@tanstack/react-query";
import { getTag } from "../../service/apiTag";

export const useGetAllTag = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["tag"],
    queryFn: getTag,
  });

  return { data, isLoading };
};
