import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getComment } from "../../service/apiComment";
import { useSearchParams } from "react-router-dom";
import { Page_Size } from "../../utils/constant";

export const useComment = () => {
  const queryClient = useQueryClient();
  const [searchParam] = useSearchParams();
  const filteredValue = searchParam.get("status");

  //filter
  const filter =
    !filteredValue || filteredValue === "All"
      ? null
      : { field: "status", value: filteredValue };

  //pagination
  const page = !searchParam.get("page") ? 1 : Number(searchParam.get("page"));
  //query
  const {
    data: { data: comments, count } = {},
    error,
    isLoading,
  } = useQuery({
    queryKey: ["comment", filter, page],
    queryFn: () => getComment({ filter, page }),
  });

  //PREFETCHING
  const pageCount = Math.ceil(count / Page_Size);
  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["comment", filter, page + 1],
      queryFn: () => getComment({ filter, page: page + 1 }),
    });

  return { comments, error, isLoading, page, count };
};
