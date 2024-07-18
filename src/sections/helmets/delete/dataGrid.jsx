// import { Button, Dialog, DialogContent, Skeleton } from "@mui/material";
// import { Stack } from "@mui/system";
// import { DataGrid, GridToolbarContainer } from "@mui/x-data-grid";
// import { useState } from "react";
// import EmptyContent from "src/components/empty-content/empty-content";
// import Iconify from "src/components/iconify";
// import { fetcher } from "src/utils/axios";
// import useSWR from "swr";
// import BaseForm from "../forms/emptyForm";

// const swrOptions = {
//   revalidateIfStale: false,
//   revalidateOnFocus: false,
//   revalidateOnReconnect: false,
// };
// export default function DataGridApi() {
//   // const url = "https://jsonplaceholder.typicode.com/todos/80";
//   const [open, setOpen] = useState(false);
//   // const { data, isLoading, error, isValidating } = useSWR(
//   //   url,
//   //   fetcher,
//   //   swrOptions,
//   // );

//   // if (error) {
//   //   return <p> {error.message}</p>;
//   // }
//   // if (!data) {
//   //   return data == {};
//   // }

//   const openDialog = () => {
//     setOpen(true);
//   };

//   return (
//     <>
//       <Dialog open={open}>
//         <DialogContent>
//           <BaseForm />
//         </DialogContent>
//       </Dialog>
//     </>
//   );
// }
