import { useQuery, useQueryClient } from "@tanstack/react-query";
import { filterCategories } from "../../service/apiPost";
import { useLocation, useSearchParams } from "react-router-dom";
export const useFilterPost = () => {
  const location = useLocation();
  const queryClient = useQueryClient();
  const [searchParam] = useSearchParams();
  const searchParams = new URLSearchParams(location.search);
  const filterField = searchParam.toString().split("=")[0];
  const filteredValue = searchParams.get(filterField);

  const filter =
    !filterField && filteredValue === ""
      ? null
      : { field: filterField, value: filteredValue };
  const { data: filterCategoryData, isLoading } = useQuery({
    queryKey: ["filteredData", filter],
    queryFn: () => filterCategories({}),
  });

  queryClient.prefetchQuery({
    queryKey: ["filteredData", filter],
    queryFn: () => filterCategories({ filter }),
  });
  return { filterCategoryData, isLoading };
};
