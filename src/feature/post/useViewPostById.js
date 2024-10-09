import { useQuery } from "@tanstack/react-query";
import { getViewPostById } from "../../service/apiPost";

export const useViewPostById = (id) => {
  const { data, isLoading } = useQuery({
    queryKey: ["viewbyId"],
    queryFn: () => getViewPostById(id),
  });
  return { data: data, isLoading };
};
