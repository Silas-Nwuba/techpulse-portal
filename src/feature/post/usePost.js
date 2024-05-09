<<<<<<< HEAD
import {useInfiniteQuery, useQueryClient} from "@tanstack/react-query";
import { getPost } from "../../service/apiPost";
import {Post_Per_page } from "../../utils/constant";
import { useEffect } from "react";
// export const usePost = () =>{
//   const {data, isPending:isLoading, error} = useQuery({
//     queryKey:["post"],
//     queryFn:getPost,
//   })
// return {data, isLoading, error}
// }
=======
import { QueryClient, useInfiniteQuery } from "@tanstack/react-query";
import { getPost } from "../../service/apiPost";
import { Page_Size } from "../../utils/constant";
const queryClient = new QueryClient();
>>>>>>> 2240043135df3e38123bbfa092520827935184bb
export const usePost = () => {
  const {
    data,
    isError,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["post"],
    queryFn: getPost,
<<<<<<< HEAD
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPage) => {
     if (!lastPage || lastPage.data?.length === undefined || lastPage?.data?.length < Post_Per_page ||  !Array.isArray(lastPage.data) || lastPage?.data?.length === 0){
      return null
     }
     else if(lastPage?.data.length === undefined) console.log("error from usePost");
     return allPage.length + 1;
    },    
  });
  console.log(data)
=======
    getNextPageParam: (lastPage, allPage) => {
      if (lastPage.length < Page_Size) return;
      return allPage.length + 1;
    },
    initialData: () => {
      return null;
    },
  });
>>>>>>> 2240043135df3e38123bbfa092520827935184bb

  return {
    data,
    isError,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  };
<<<<<<< HEAD
 
 
}

=======
};
>>>>>>> 2240043135df3e38123bbfa092520827935184bb
