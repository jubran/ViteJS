import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import { useBoolean } from "src/hooks/use-boolean";
import Container from "@mui/material/Container";
import {
  DataGrid,
  GridActionsCellItem,
  GridToolbarContainer,
  gridClasses,
} from "@mui/x-data-grid";
import { useCallback, useState } from "react";
import CustomBreadcrumbs from "src/components/custom-breadcrumbs";
import Iconify from "src/components/iconify";
import { useSettingsContext } from "src/components/settings";
import { RouterLink } from "src/routes/components";
import { paths } from "src/routes/paths";
import ProductTableFiltersResult from "src/sections/product/product-table-filters-result";
import useSWR from "swr";
import { date } from "yup";
import { Box, style } from "@mui/system";
import EmptyContent from "src/components/empty-content";
import {
  RenderCellCreatedAt,
  RenderCellPrice,
  RenderCellProduct,
  RenderCellStock,
} from "src/sections/product/product-table-row";
import { grey } from "@mui/material/colors";
import {
  Alert,
  DialogContent,
  IconButton,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import UserQuickEditForm from "./editForm";
import { LoadingButton } from "@mui/lab";

export const fetcher = async (...args) =>
  fetch(...args).then((res) => res.json());
const rows = [
  {
    id: 1,
    location: "gt",
    date1: "نشط",
    time1: "جبران حسن اليحيوي",
    action: "86718q",
    status1: "In Service",
  },
  {
    id: 2,
    location: "12",
    date1: "نشط",
    time1: "جبران حسن اليحيوي",
    action: "86718",
    status1: "Shutdown",
  },
  {
    id: 3,
    location: "gg",
    date1: "نشط",
    time1: "جبران حسن اليحيوي",
    action: "86718",
    status1: "Stand By",
  },
];
export default function DoProcess({ ids }) {
  const { data, error } = useSWR(`/api/api.php?dateQuery=${ids}`, fetcher);
  const [amount, setAmount] = useState(0);

  const confirm = useBoolean();
  const quickEdit = useBoolean();
  const useAction = useCallback((id) => {
    setAmount(id);
    confirm.onTrue(true);
  });
  const getRowSpacing = useCallback((params) => {
    return {
      top: params.isFirstVisible ? 0 : 5,
      bottom: params.isLastVisible ? 0 : 5,
    };
  }, []);
  if (error) {
    return <p> {error.message}</p>;
  }
  if (!data) {
    return <p>Loodings</p>;
  }

  const settings = useSettingsContext();
  const columns = [
    {
      field: "date1",
      headerName: "التاريخ",
      headerAlign: "center",
      cellClassName: "dcs-data-theme-cell",
      filterable: false,
      disableColumnMenu: true,
      sortable: false,
      Width: 70,
    },
    {
      field: "status1",
      headerName: "الحالة",
      headerAlign: "center",
      cellClassName: "dcs-data-theme-cell",
      // flex: 1,
      disableColumnMenu: true,
      Width: 100,
      hideable: false,
      filterable: false,
      sortable: false,
      renderCell: (params) => {
        if (params.value == "In Service")
          return <div style={{ color: "green" }}>In Service</div>;
        if (params.value == "Shutdown")
          return <div style={{ color: "red" }}>Shutdown</div>;
        if (params.value == "Stand By")
          return <div style={{ color: "blue" }}>Stand By</div>;
      },
    },
    {
      field: "action",
      headerName: "الوصف",
      headerAlign: "right",
      cellClassName: "dcs-data-theme-cell-left",
      width: 400,
      flex: 1,
      disableColumnMenu: true,
      filterable: false,
      sortable: false,
    },
    {
      field: "time1",
      headerName: "الوقت",
      headerAlign: "center",
      cellClassName: "dcs-data-theme-cell",
      width: 100,
      disableColumnMenu: true,
      type: "singleSelect",
      filterable: false,
      sortable: false,
    },
    {
      field: "location",
      headerName: "الموقع",
      headerAlign: "right",
      cellClassName: "dcs-data-theme-cell-left",
      width: 130,
      disableColumnMenu: true,
      filterable: false,
      sortable: false,
      editable: false,
    },
    {
      type: "actions",
      field: "actions",
      headerName: " ",
      align: "right",
      headerAlign: "right",
      width: 80,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      getActions: (params) => [
        <GridActionsCellItem
          showInMenu
          icon={<Iconify icon="solar:eye-bold" />}
          label="التفاصيل"
          onClick={() => {
            quickEdit.onTrue(true);
          }}
        />,
        <GridActionsCellItem
          showInMenu
          icon={<Iconify icon="solar:pen-bold" />}
          label="تحديث"
          onClick={() => {
            useAction(params.row.id);
          }}
        />,
        <GridActionsCellItem
          showInMenu
          icon={<Iconify icon="solar:trash-bin-trash-bold" />}
          label="حذف"
          sx={{ color: "error.main" }}
        />,
      ],
    },
  ];

  const renderInput = (
    <Card
      sx={{
        flexGrow: { md: 1 },
        display: { md: "flex" },
        flexDirection: { md: "column" },
      }}
    >
      <DataGrid
        autoHeight={true}
        checkboxSelection
        disableRowSelectionOnClick
        rows={data}
        // rows={rows}
        columns={columns}
        // loading={data}
        getRowSpacing={getRowSpacing}
        pageSizeOptions={[5, 10, 25]}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 10 },
          },
        }}
        slots={{
          toolbar: () => (
            <>
              <GridToolbarContainer>
                <Stack
                  spacing={1}
                  flexGrow={1}
                  direction="row"
                  alignItems="center"
                  justifyContent="flex-end"
                >
                  <Button
                    size="small"
                    color="error"
                    startIcon={<Iconify icon="gridicons:print" />}
                  >
                    طباعة
                  </Button>
                </Stack>
              </GridToolbarContainer>
            </>
          ),
          noRowsOverlay: () => (
            <EmptyContent title="لاتوجد أحداث لهذا اليوم حتى هذه اللحضة" />
          ),
          noResultsOverlay: () => (
            <EmptyContent title="لم يتم العثور على أحداث" />
          ),
        }}
        sx={{
          "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
            outline: "none !important",
          },
          "& .dcs-data-theme-cell": {
            fontFamily: "Public Sans, sans-serif",
            fontWeight: "bold",
            color: "#1a3e72",
            justifyContent: "center",
          },
          "& .dcs-data-theme-cell-left": {
            fontFamily: "Public Sans, sans-serif",
            fontWeight: "bold",
            color: "#1a3e72",
            justifyContent: "right",
            textAlign: "right",
            paddingLeft: "10px",
          },
          [`& .${gridClasses.row}`]: {
            bgcolor: (theme) =>
              theme.palette.mode === "light" ? grey[200] : grey[900],
          },
        }}
      />
    </Card>
  );
  return (
    <>
      {renderInput}
      <ConfirmEditDialog
        amount={amount}
        open={confirm.value}
        onClose={confirm.onFalse}
      />
      <UserQuickEditForm
        currentUser={amount}
        open={quickEdit.value}
        onClose={quickEdit.onFalse}
      />
    </>
  );
  function ConfirmEditDialog({ open, amount, onClose }) {
    // const viewTemplate = rows.map((task) => {
      const viewTemplate = data.map((task) => {
      if (amount === task.id) {
        return (
          <Dialog
            fullWidth
            maxWidth={false}
            open={open}
            onClose={onClose}
            PaperProps={{
              sx: { maxWidth: 720 },
            }}
          >
            <DialogTitle>تحديث</DialogTitle>
    
            <DialogContent>
              
              <Alert variant="outlined" severity="info" sx={{ mb: 3 }}>
                Account is waiting for confirmation
              </Alert>
    
              <Box
                rowGap={3}
                columnGap={2}
                display="grid"
                gridTemplateColumns={{
                  xs: "repeat(1, 1fr)",
                  sm: "repeat(2, 1fr)",
                }}
              >
                <Select name="status" label="Status">
                  <MenuItem></MenuItem>
                </Select>
    
                <Box sx={{ display: { xs: "none", sm: "block" } }} />
    
                <TextField name="name" label="Full Name" defaultValue={task.location}/>
                <TextField name="email" label="Email Address" />
                <TextField name="phoneNumber" label="Phone Number" />
    
                <TextField name="state" label="State/Region" />
                <TextField name="city" label="City" />
                <TextField name="address" label="Address" />
                <TextField name="zipCode" label="Zip/Code" />
                <TextField name="company" label="Company" />
                <TextField name="role" label="Role" />
              </Box>
            </DialogContent>
    
            <DialogActions>
              <Button variant="outlined" onClick={onClose}>
                Cancel
              </Button>
    
              <LoadingButton type="submit" variant="contained">
                Update
              </LoadingButton>
            </DialogActions>
          </Dialog>
        );
      }})
      return <>{viewTemplate}</>
   
  }
  // ----------------------------------------------------------------------

  // function ConfirmEditDialog({ open, amount, data, contactInfo, onClose }) {
  //   return (
  //     <Dialog open={open} fullWidth maxWidth="xs" onClose={onClose}>
  //       <DialogTitle>Transfer to</DialogTitle>
  //       <Stack spacing={3} sx={{ px: 3 }}>
  //         <Stack direction="row" alignItems="center" spacing={2}>
  //           <Avatar
  //             src={contactInfo?.avatarUrl}
  //             sx={{ width: 48, height: 48 }}
  //           />
  //         </Stack>

  //         <Todo id={amount} />
  //       </Stack>
  //       <DialogActions>
  //         <Button onClick={onClose}>Cancel</Button>

  //         <Button variant="contained" disabled={amount === 3} onClick={onClose}>
  //           Confirm & Transfer
  //         </Button>
  //       </DialogActions>
  //     </Dialog>
  //   );
  // }
  // function Todo(props) {
  //   const viewTemplate = rows.map((task) => {
  //     if (props.id === task.id) {
  //       return (
  //         <div className="stack-small">
  //           <div className="c-cb">
  //             <input id={task.id} type="text" defaultValue={task.id} />
  //             <input type="text" defaultValue={task.location} />
  //             <IconButton  onClick={quickEdit.onTrue}>
  //             <Iconify icon="solar:pen-bold" />
  //           </IconButton>

  //           </div>
  //           <div className="btn-group">
  //             <button
  //               type="button"
  //               className="btn"
  //             >
  //               Edit <span className="visually-hidden">{task.id}</span>
  //             </button>
  //           </div>
  //         </div>
  //       );
  //     }
  //   });
    // return <li className="todo">{viewTemplate}</li>;
  // }
}

// ----------------------------------------------------------------------
