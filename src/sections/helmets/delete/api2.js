// import { useMemo } from "react";
// import { fetcher } from "src/utils/axios";
// import useSWR from "swr";

// const swrOptions = {
//     revalidateIfStale: false,
//     revalidateOnFocus: false,
//     revalidateOnReconnect: false,
//   };
// export function useGet() {
//     const url = 'https://jsonplaceholder.typicode.com/todos/1'
  
//     const { data, isLoading, error, isValidating } = useSWR(url, fetcher, swrOptions);

//     const memoizedValue = useMemo(
//       () => ({
//         products: data || [],
//         productsLoading: isLoading,
//         productsError: error,
//         productsValidating: isValidating,
//         productsEmpty: !isLoading && !data?.products,
//       }),
//       [data?.products, error, isLoading, isValidating]
//     );
//   console.log(memoizedValue)
//     return memoizedValue;
//   }
  