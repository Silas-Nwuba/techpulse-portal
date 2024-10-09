import { useQuery } from "@tanstack/react-query";
import { getCookie } from "../../service/ApiCookie";

export const useGetCookie = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ["cookie"],
    queryFn: getCookie,
  });
  return { data, isPending, error };
};
