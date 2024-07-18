// import { Button, Dialog, DialogContent, Skeleton } from "@mui/material";
// import { Stack } from "@mui/system";
// import { DataGrid, GridToolbarContainer } from "@mui/x-data-grid";
// import { useState } from "react";
// import EmptyContent from "src/components/empty-content/empty-content";
// import Iconify from "src/components/iconify";
// import { fetcher } from "src/utils/axios";
// import useSWR from "swr";
// import BaseForm from "../forms/baseForm";

// const swrOptions = {
//   revalidateIfStale: false,
//   revalidateOnFocus: false,
//   revalidateOnReconnect: false,
// };
// export default function DataGridApi() {
//   const url = "https://jsonplaceholder.typicode.com/todos/80";
//   const [open , setOpen] = useState(false)
//   const { data, isLoading, error, isValidating } = useSWR(
//     url,
//     fetcher,
//     swrOptions,
//   );

//   if (error) {
//     return <p> {error.message}</p>;
//   }
//   if (!data) {
//     return data == {}
//   }

//   const openDialog = () => {
// setOpen(true);
//   }
//   const columns = [
//     {
//       field: "userId",
//       headerName: "التاريخ",
//       headerAlign: "center",
//       cellClassName: "dcs-data-theme-cell",
//       filterable: false,
//       disableColumnMenu: true,
//       sortable: false,
//       Width: 70,
//     },
//     {
//       field: "title",
//       headerName: "التاريخ",
//       headerAlign: "center",
//       cellClassName: "dcs-data-theme-cell",
//       filterable: false,
//       disableColumnMenu: true,
//       sortable: false,
//       Width: 70,
//     },
//   ];
//   return (
//     <>
//       <DataGrid
//        autoHeight={true}
//        checkboxSelection
//        disableRowSelectionOnClick
//        rows={[data]}
//        columns={columns}
//       //  getRowSpacing={getRowSpacing}
//        pageSizeOptions={[5, 10, 25]}
//        initialState={{
//          pagination: {
//            paginationModel: { pageSize: 10 },
//          },
//        }}
//        slots={{
//          toolbar: () => (
//            <>
//              <GridToolbarContainer>
//                <Stack
//                  spacing={1}
//                  flexGrow={1}
//                  direction="row"
//                  alignItems="center"
//                  justifyContent="flex-end"
//                >
//                  <Button
//                    size="small"
//                    color="error"
//                    startIcon={<Iconify icon="gridicons:print" />}
//                   onClick={openDialog}
//                  >
//                    طباعة
//                  </Button>
//                </Stack>
//              </GridToolbarContainer>
//            </>
//          ),
//          noRowsOverlay: () => (
//            <EmptyContent title="لاتوجد أحداث لهذا اليوم حتى هذه اللحضة" />
//          ),
//          noResultsOverlay: () => (
//            <EmptyContent title="لم يتم العثور على أحداث" />
//          ),
//        }}
//       />
//       <Dialog 
//       open={open}>
// <DialogContent >
// <BaseForm />
//   </DialogContent>

//         </Dialog>
//     </>
//   );
  
// }
