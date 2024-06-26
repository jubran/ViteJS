// import dayjs from "dayjs";
// import isEqual from "lodash/isEqual";
// import { useState, useEffect, useCallback } from "react";

// import Card from "@mui/material/Card";
// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
// import Container from "@mui/material/Container";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import {
//   DataGrid,
//   GridActionsCellItem,
//   GridToolbarContainer,
// } from "@mui/x-data-grid";

// import { paths } from "src/routes/paths";
// import { useRouter } from "src/routes/hooks";
// import { RouterLink } from "src/routes/components";

// import { useBoolean } from "src/hooks/use-boolean";

// import { useGetProducts, useGetTodayEvents } from "src/api/product";

// import Iconify from "src/components/iconify";
// import { useSnackbar } from "src/components/snackbar";
// import EmptyContent from "src/components/empty-content";
// import { ConfirmDialog } from "src/components/custom-dialog";
// import { useSettingsContext } from "src/components/settings";
// import CustomBreadcrumbs from "src/components/custom-breadcrumbs";

// import ProductTableFiltersResult from "../product-table-filters-result";

// // ----------------------------------------------------------------------

// const defaultFilters = {
//   publish: [],
//   stock: [],
// };

// const HIDE_COLUMNS = {
//   category: false,
// };

// const HIDE_COLUMNS_TOGGLABLE = ["category", "actions"];

// // ----------------------------------------------------------------------

// export default function ProductListView() {
//   const { enqueueSnackbar } = useSnackbar();

//   const confirmRows = useBoolean();

//   const router = useRouter();

//   const settings = useSettingsContext();

//   const { products, productsLoading } = useGetProducts();

//   const { dcsToday2, setDcsTodayLoading } = useGetTodayEvents([]);

//   const [dcsData, setDcsData] = useState([]);

//   const [tableData, setTableData] = useState([]);

//   const [filters, setFilters] = useState(defaultFilters);

//   const [selectedRowIds, setSelectedRowIds] = useState([]);

//   const [columnVisibilityModel, setColumnVisibilityModel] =
//     useState(HIDE_COLUMNS);

//   const [dateValue, setValue] = useState(dayjs(Date.now()));
//   console.log(dateValue.format("YYYY-MM-DD"));

//   useEffect(() => {
//     if (products.length) {
//       setTableData(products);
//     }
//   }, [products]);

//   useEffect(() => {
//     if (dcsToday2.length) {
//       setDcsData(dcsToday2);
//     }
//   }, [dcsToday2]);
//   console.log(dcsToday2);
//   const dataFiltered = applyFilter({
//     inputData: tableData,
//     filters,
//   });
//   const canReset = !isEqual(defaultFilters, filters);

//   const handleFilters = useCallback((name, value) => {
//     setFilters((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   }, []);

//   const handleResetFilters = useCallback(() => {
//     setFilters(defaultFilters);
//   }, []);

//   const handleDeleteRow = useCallback(
//     (id) => {
//       const deleteRow = tableData.filter((row) => row.id !== id);

//       enqueueSnackbar("Delete success!");

//       setTableData(deleteRow);
//     },
//     [enqueueSnackbar, tableData],
//   );

//   const handleDeleteRows = useCallback(() => {
//     const deleteRows = tableData.filter(
//       (row) => !selectedRowIds.includes(row.id),
//     );

//     enqueueSnackbar("Delete success!");

//     setTableData(deleteRows);
//   }, [enqueueSnackbar, selectedRowIds, tableData]);

//   const handleEditRow = useCallback(
//     (id) => {
//       router.push(paths.dashboard.product.edit(id));
//     },
//     [router],
//   );

//   const handleViewRow = useCallback(
//     (id) => {
//       router.push(paths.dashboard.product.details(id));
//     },
//     [router],
//   );

//   const columns = [
//     {
//       field: "date1",
//       headerName: "التاريخ",
//       headerAlign: "center",
//       cellClassName: "dcs-data-theme-cell",
//       filterable: false,
//       disableColumnMenu: true,
//       sortable: false,
//       Width: 70,
//     },
//     {
//       field: "status1",
//       headerName: "الحالة",
//       headerAlign: "center",
//       cellClassName: "dcs-data-theme-cell",
//       // flex: 1,
//       disableColumnMenu: true,
//       Width: 100,
//       hideable: false,
//       filterable: false,
//       sortable: false,
//       // renderCell: (params) => <RenderCellProduct params={params} />,
//     },
//     {
//       field: "action",
//       headerName: "الوصف",
//       headerAlign: "right",
//       cellClassName: "dcs-data-theme-cell-left",
//       width: 400,
//       flex: 1,
//       disableColumnMenu: true,
//       filterable: false,
//       sortable: false,
//       // renderCell: (params) => <RenderCellCreatedAt params={params} />,
//     },
//     {
//       field: "time1",
//       headerName: "الوقت",
//       headerAlign: "center",
//       cellClassName: "dcs-data-theme-cell",
//       width: 100,
//       disableColumnMenu: true,
//       type: "singleSelect",
//       filterable: false,
//       sortable: false,
//       // renderCell: (params) => <RenderCellStock params={params} />,
//     },
//     {
//       field: "location",
//       headerName: "الموقع",
//       headerAlign: "center",
//       cellClassName: "dcs-data-theme-cell",
//       width: 100,
//       disableColumnMenu: true,
//       filterable: false,
//       sortable: false,
//       editable: true,
//       // renderCell: (params) => <RenderCellPrice params={params} />,
//     },

//     {
//       type: "actions",
//       field: "actions",
//       headerName: " ",
//       align: "right",
//       headerAlign: "right",
//       width: 80,
//       sortable: false,
//       filterable: false,
//       disableColumnMenu: true,
//       getActions: (params) => [
//         <GridActionsCellItem
//           showInMenu
//           icon={<Iconify icon="solar:eye-bold" />}
//           label="التفاصيل"
//           onClick={() => handleViewRow(params.row.id)}
//         />,
//         <GridActionsCellItem
//           showInMenu
//           icon={<Iconify icon="solar:pen-bold" />}
//           label="تحديث"
//           onClick={() => handleEditRow(params.row.id)}
//         />,
//         <GridActionsCellItem
//           showInMenu
//           icon={<Iconify icon="solar:trash-bin-trash-bold" />}
//           label="حذف"
//           onClick={() => {
//             handleDeleteRow(params.row.id);
//           }}
//           sx={{ color: "error.main" }}
//         />,
//       ],
//     },
//   ];

//   const getTogglableColumns = () =>
//     columns
//       .filter((column) => !HIDE_COLUMNS_TOGGLABLE.includes(column.field))
//       .map((column) => column.field);

//   return (
//     <>
//       <Container
//         maxWidth={settings.themeStretch ? false : "lg"}
//         sx={{
//           flexGrow: 1,
//           display: "flex",
//           flexDirection: "column",
//         }}
//       >
        // <CustomBreadcrumbs
        //   heading="الرئيسية"
        //   links={[{ name: "ملخص هذا اليوم" }]}
        //   action={
        //     <Button
        //       component={RouterLink}
        //       href={paths.dashboard.root}
        //       variant="contained"
        //       color="primary"
        //       startIcon={<Iconify icon="mingcute:add-line" />}
        //     >
        //       إضافة حدث جديد
        //     </Button>
        //   }
        //   sx={{
        //     mb: {
        //       xs: 3,
        //       md: 5,
        //     },
        //   }}
        // />

//         <Card
//           sx={{
//             height: { xs: 800, md: 2 },
//             flexGrow: { md: 1 },
//             display: { md: "flex" },
//             flexDirection: { md: "column" },
//           }}
//         >
//           <DataGrid
//             checkboxSelection
//             disableRowSelectionOnClick
//             rows={dcsToday2}
//             columns={columns}
//             loading={setDcsTodayLoading}
//             getRowHeight={() => "auto"}
//             pageSizeOptions={[5, 10, 25]}
//             initialState={{
//               pagination: {
//                 paginationModel: { pageSize: 5 },
//               },
//             }}
//             onRowSelectionModelChange={(newSelectionModel) => {
//               setSelectedRowIds(newSelectionModel);
//             }}
//             columnVisibilityModel={columnVisibilityModel}
//             onColumnVisibilityModelChange={(newModel) =>
//               setColumnVisibilityModel(newModel)
//             }
            // slots={{
            //   toolbar: () => (
            //     <>
            //       <GridToolbarContainer>
            //         {/* <ProductTableToolbar
            //           filters={filters}
            //           onFilters={handleFilters}
            //           stockOptions={PRODUCT_STOCK_OPTIONS}
            //           publishOptions={PUBLISH_OPTIONS}
            //         /> */}

            //         {/* <GridToolbarQuickFilter /> */}
            //         <LocalizationProvider dateAdapter={AdapterDayjs}>
            //           <DatePicker
            //             label="التاريخ"
            //             value={dateValue}
            //             format="YYYY-MM-DD"
            //             onChange={(newValue) => setValue(newValue)}
            //             variant="subtitle"
            //             slotProps={{ textField: { size: "small" } }}
            //             sx={{
            //               "& .MuiInputBase-input": {
            //                 fontSize: "16px",
            //                 fontWeight: "bold",
            //               },
            //             }}
            //           />
            //         </LocalizationProvider>
            //         <Stack
            //           spacing={1}
            //           flexGrow={1}
            //           direction="row"
            //           alignItems="center"
            //           justifyContent="flex-end"
            //         >
            //           {!!selectedRowIds.length && (
            //             <Button
            //               size="small"
            //               color="error"
            //               startIcon={
            //                 <Iconify icon="solar:trash-bin-trash-bold" />
            //               }
            //               onClick={confirmRows.onTrue}
            //             >
            //               Delete ({selectedRowIds.length})
            //             </Button>
            //           )}

            //           {/* <GridToolbarColumnsButton /> */}
            //           {/* <GridToolbarFilterButton /> */}
            //           {/* <GridToolbarExport /> */}
            //           <Button
            //             size="small"
            //             color="error"
            //             startIcon={<Iconify icon="gridicons:print" />}
            //             onClick={confirmRows.onTrue}
            //           >
            //             طباعة
            //           </Button>
            //         </Stack>
            //       </GridToolbarContainer>

            //       {canReset && (
            //         <ProductTableFiltersResult
            //           filters={filters}
            //           onFilters={handleFilters}
            //           onResetFilters={handleResetFilters}
            //           results={dataFiltered.length}
            //           sx={{ p: 2.5, pt: 0 }}
            //         />
            //       )}
            //     </>
            //   ),
            //   noRowsOverlay: () => (
            //     <EmptyContent title="لاتوجد أحداث لهذا اليوم حتى هذه اللحضة" />
            //   ),
            //   noResultsOverlay: () => (
            //     <EmptyContent title="لم يتم العثور على أحداث" />
            //   ),
            // }}
//             slotProps={{
//               columnsPanel: {
//                 getTogglableColumns,
//               },
//             }}
//             sx={{
//               "& .dcs-data-theme-cell": {
//                 // backgroundColor: 'rgba(224, 183, 60, 0.55)',
//                 fontFamily: "Public Sans, sans-serif",
//                 fontWeight: "bold",
//                 color: "#1a3e72",
//                 justifyContent: "center",
//               },
//               "& .dcs-data-theme-cell-left": {
//                 fontFamily: "Public Sans, sans-serif",
//                 fontWeight: "bold",
//                 color: "#1a3e72",
//                 justifyContent: "right",
//                 textAlign: "right",
//               },
//             }}
//           />
//         </Card>
//       </Container>

//       <ConfirmDialog
//         open={confirmRows.value}
//         onClose={confirmRows.onFalse}
//         title="Delete"
//         content={
//           <>
//             Are you sure want to delete{" "}
//             <strong> {selectedRowIds.length} </strong> items?
//           </>
//         }
//         action={
//           <Button
//             variant="contained"
//             color="error"
//             onClick={() => {
//               handleDeleteRows();
//               confirmRows.onFalse();
//             }}
//           >
//             Delete
//           </Button>
//         }
//       />
//     </>
//   );
// }

// // ----------------------------------------------------------------------

// function applyFilter({ inputData, filters }) {
//   const { stock, publish } = filters;

//   if (stock.length) {
//     inputData = inputData.filter((product) =>
//       stock.includes(product.inventoryType),
//     );
//   }

//   if (publish.length) {
//     inputData = inputData.filter((product) =>
//       publish.includes(product.publish),
//     );
//   }

//   return inputData;
// }
