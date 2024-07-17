// import { useMemo, useState } from "react"
// import Label from "src/components/label"
// import { fetcher } from "src/utils/axios"
// import useSWR from "swr"


// // export  function GetData(){
// //   const [data , setData] = useState()
  
// //     fetch('https://jsonplaceholder.typicode.com/todos/1')
// //     .then(response => response.json())
// //     .then(json => console.log(json))
// //     .then(json => setData(JSON.stringify(json)))
// // console.log(data)
// //       return(
// //         <>
      
        
// //         </>
// //       )
    
      
// // }
// export default function  UseGetApi() {
    // const URL = 'https://jsonplaceholder.typicode.com/todos/1'
  
    // const  {data} = useSWR(URL, fetcher);
   
//     const memoizedData = useMemo(() => data, [data]);

//     return memoizedData;
   
   
//   }


  import { useState, useEffect, useMemo } from 'react';
import { fetcher } from 'src/utils/axios';
import useSWR from 'swr';

  const useDataFetching = () => {
    // const [data, setData] = useState(null);
  
    // useEffect(() => {
    //   const fetchData = async () => {
    //     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    //     const result = await response.json();
    //     setData(result);
    //   };
  
    //   fetchData();
    // }, []);
    const URL = 'https://jsonplaceholder.typicode.com/todos/1'
  
    const  {data, isLoading, error, isValidating } = useSWR(URL, fetcher);
    // Memoize the data value
    const memoizedData = useMemo(() => ({
        dataApi:data || [],
        dataApiLoading: isLoading,
        dataApiError: error,
        dataApiValidating: isValidating,
        dataApiEmpty: !isLoading && !data?.dataApi,
    }),[data?.dataApi,error, isLoading, isValidating]);
  
    return memoizedData;
  };
  
  export default useDataFetching;