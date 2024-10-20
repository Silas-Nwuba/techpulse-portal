import { useQuery } from "@tanstack/react-query";
import { getCategory } from "../../service/apiCategory";

export const useGetAllCategory = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["category"],
    queryFn: getCategory,
  });

  return { data, isLoading };
};
