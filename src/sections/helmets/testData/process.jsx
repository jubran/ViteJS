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
import
  {
    DataGrid,
    GridActionsCellItem,
    GridToolbarContainer,
    gridClasses,
  } from "@mui/x-data-grid";
import { Fragment, useCallback, useRef, useState } from "react";
import CustomBreadcrumbs from "src/components/custom-breadcrumbs";
import Iconify from "src/components/iconify";
import { useSettingsContext } from "src/components/settings";
import { RouterLink } from "src/routes/components";
import { paths } from "src/routes/paths";
import ProductTableFiltersResult from "src/sections/product/product-table-filters-result";
import useSWR from "swr";
import { date } from "yup";
import { Box, fontWeight, style } from "@mui/system";
import EmptyContent from "src/components/empty-content";
import
  {
    RenderCellCreatedAt,
    RenderCellPrice,
    RenderCellProduct,
    RenderCellStock,
  } from "src/sections/product/product-table-row";
import { grey } from "@mui/material/colors";
import
  {
    Alert,
    Autocomplete,
    DialogContent,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
    TextField,
    Typography,
  } from "@mui/material";
import "./style.css";
import { LoadingButton } from "@mui/lab";
import
  {
    DateCalendar,
    DateField,
    DatePicker,
    LocalizationProvider,
    TimeField,
    TimePicker,
  } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { NumberFormatBase, usePatternFormat } from "react-number-format";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import label from "src/components/label";
import
  {
    Form,
    FormProvider,
    useFieldArray,
    useForm,
    useFormContext,
    Controller,
  } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useReactToPrint } from "react-to-print";
import TableDailyReport from "./table";

export const fetcher = async ( ...args ) =>
  fetch( ...args ).then( ( res ) => res.json() );
const rows = [
  {
    id: 1,
    location: "GT21",
    date1: "2024-06-01",
    time1: "08:10",
    action: "GT START AS PER ASIR AND FAIL TO START",
    status1: "In Service",
    name1: "جبران حسن اليحيوي",
    flame: "390",
    fsnl: "10:01",
    synch: "10:10",
    note: "",
  },
  {
    id: 2,
    location: "GT27",
    date1: "2024-10-01",
    time1: "22:22",
    action: "GT START AS PER ASIR",
    status1: "In Service",
    name1: "جبران حسن اليحيوي",
    flame: "388",
    fsnl: "22:11",
    synch: "22:20",
    note: "",
  },
  {
    id: 3,
    location: "GT20",
    date1: "2024-06-02",
    time1: "04:15",
    action: "GT TRIP ON LOSS OF FLAME",
    status1: "Shutdown",
    name1: "جبران حسن اليحيوي",
    note: "#2231234876",
  },
  {
    id: 4,
    location: "GT30",
    date1: "2024-06-02",
    time1: "18:15",
    action: "gt trip on loss of flame",
    status1: "Stand By",
    name1: "جبران حسن اليحيوي",
    note: "",
  },
  {
    id: 5,
    location: "SKID#1 SP#1",
    date1: "2024-01-02",
    time1: "18:15",
    action: "START",
    status1: "In Service",
    name1: "جبران حسن اليحيوي",
    note: "",
  },
];
export default function DoProcess ( { ids } )
{
  // const { data, error } = useSWR(`/api/api.php?dateQuery=${ids}`, fetcher);
  const [ amount, setAmount ] = useState( 0 );
  const confirm = useBoolean();
  const quickEdit = useBoolean();
  const { register, getValues } = useForm();
  const printRef = useRef();
  const [ isPrinted, setIsPrintred ] = useState( false );

  const useAction = useCallback( ( id ) =>
  {
    setAmount( id );
    confirm.onTrue( true );
  } );

  const getRowSpacing = useCallback( ( params ) =>
  {
    return {
      top: params.isFirstVisible ? 0 : 5,
      bottom: params.isLastVisible ? 0 : 5,
    };
  }, [] );
  const locations = [
    {
      id: "1",
      location: "GT21",
    },
    {
      id: "2",
      location: "GT27",
    },
    {
      id: "3",
      location: "GT30",
    },
    {
      id: "4",
      location: "GT20",
    },
    {
      id: "5",
      location: "SKID#1 SP#1",
    },
  ];
  const status1 = [
    {
      id: "1",
      status: "In Service",
    },
    {
      id: "2",
      status: "Stand By",
    },
    {
      id: "3",
      status: "Shutdown",
    },
  ];
  const handleOnBeforeGetContent = () =>
  {
    setIsPrintred( "false" );
    setTimeout( () =>
    {
      handlePrint();
    }, 100 );
  };
  const handlePrint = useReactToPrint( {
    content: () => printRef.current,
    onAfterPrint: () => setIsPrintred( false ),
  } );

  // if (error) {
  //   return <p> {error.message}</p>;
  // }
  // if (!data) {
  //   return <p>Loodings</p>;
  // }
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
      renderCell: ( params ) =>
      {
        if ( params.value == "In Service" )
          return <div style={ { color: "green" } }>In Service</div>;
        if ( params.value == "Shutdown" )
          return <div style={ { color: "red" } }>Shutdown</div>;
        if ( params.value == "Stand By" )
          return <div style={ { color: "blue" } }>Stand By</div>;
      },
    },
    {
      field: "action",
      headerName: "2الوصف",
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
      getActions: ( params ) => [
        <GridActionsCellItem
          showInMenu
          icon={ <Iconify icon="solar:eye-bold" /> }
          label="التفاصيل"
          onClick={ () =>
          {
            quickEdit.onTrue( true );
          } }
        />,
        <GridActionsCellItem
          showInMenu
          icon={ <Iconify icon="solar:pen-bold" /> }
          label="تحديث"
          onClick={ () =>
          {
            useAction( params.row.id );
          } }
        />,
        <GridActionsCellItem
          showInMenu
          icon={ <Iconify icon="solar:trash-bin-trash-bold" /> }
          label="حذف"
          sx={ { color: "error.main" } }
        />,
      ],
    },
  ];

  const renderInput = (
    <Card
      sx={ {
        flexGrow: { md: 1 },
        display: { md: "flex" },
        flexDirection: { md: "column" },
      } }
    >
      <DataGrid
        autoHeight={ true }
        checkboxSelection
        disableRowSelectionOnClick
        // rows={data}
        rows={ rows }
        columns={ columns }
        // loading={data}
        getRowSpacing={ getRowSpacing }
        pageSizeOptions={ [ 5, 10, 25 ] }
        initialState={ {
          pagination: {
            paginationModel: { pageSize: 10 },
          },
        } }
        slots={ {
          toolbar: () => (
            <>
              <GridToolbarContainer>
                <Stack
                  spacing={ 1 }
                  flexGrow={ 1 }
                  direction="row"
                  alignItems="center"
                  justifyContent="flex-end"
                >
                  <Button
                    size="small"
                    color="error"
                    startIcon={ <Iconify icon="gridicons:print" /> }
                    onClick={ handleOnBeforeGetContent }
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
        } }
        sx={ {
          "&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus-within": {
            outline: "none !important",
          },
          "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within ": {
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
          [ `& .${ gridClasses.row }` ]: {
            bgcolor: ( theme ) =>
              theme.palette.mode === "light" ? grey[ 200 ] : grey[ 900 ],
          },
          textTransform: "Uppercase",
        } }
      />
    </Card>
  );
  return (
    <>
      { renderInput }
      <ConfirmEditDialog
        amount={ amount }
        open={ confirm.value }
        onClose={ confirm.onFalse }
      />

      <Dialog
        disablePortal
        fullWidth
        maxWidth={ false }
        open={isPrinted}
        // open={ true }
        onClose={ () => setIsPrintred( false ) }
        PaperProps={ {
          sx: { maxWidth: "80%" },
        } }
      >
        <DialogContent
          sx={
            {
              // whiteSpace: 'nowrap',
            }
          }
        >
          <Box
            style={ { display: isPrinted } }
            ref={ printRef }
            width={ "100%" }
            display="flex"
            justifyContent={ "center" }
            padding={ "30px" }
          >
            <Box dir="ltr">
              <div
                style={ {
                  width: "100%",
                  // maxWidth: "800px",
                  margin: "auto",
                  padding: "16px",
                  border: "1px solid #eee",
                  fontSize: "16px",
                  lineHeight: "24px",
                  fontFamily: "Inter sans-serif",
                  color: "#555",

                  // backgroundColor: "#F9FAFC",
                } }
              >
                <table style={ { fontSize: "12px", lineHeight: "20px" } }>
                  <thead>
                    <tr>
                      <td style={ { padding: " 0 16px 18px 16px " } }>
                        <h1
                          style={ {
                            color: "#1A1C21",
                            fontSize: "18px",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight: "normal",
                          } }
                        >
                          Jazan Power Plant
                        </h1>
                        <p>Operation D</p>
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <table
                          style={ {
                            backgroundColor: "#FFF",
                            padding: "20px 16px",
                            border: "1px solid #D7DAE0",
                            width: "100%",
                            borderRadius: "12px",
                            fontSize: "12px",
                            lineHeight: "20px",
                            tableLayout: "fixed",
                          } }
                        >
                          <tbody>
                            <tr>
                              <td
                                style={ {
                                  verticalAlign: "top",
                                  width: "50%",
                                  paddingRight: "20px",
                                  paddingBottom: "35px",
                                } }
                              >
                                <p
                                  style={ {
                                    fontWeight: "700",
                                    color: "#1A1C21",
                                  } }
                                >
                                  Morning Shift
                                </p>
                                <p
                                  className="ge-ss"
                                  style={ { color: "#5E6470" } }
                                >
                                  جبران المالكي
                                </p>

                                <p
                                  style={ {
                                    fontWeight: "700",
                                    color: "#1A1C21",
                                  } }
                                >
                                  Night Shift
                                </p>
                                <p style={ { color: "#5E6470" } }>محمد حمدي</p>
                              </td>
                              <td
                                style={ {
                                  verticalAlign: "top",
                                  paddingBottom: "35px",
                                  width: "40%",
                                } }
                              >
                                <table
                                  style={ {
                                    tableLayout: "fixed",
                                    width: "-webkit-fill-available",
                                  } }
                                >
                                  <tr>
                                    <th
                                      style={ {
                                        textAlign: "left",
                                        color: "#1A1C21",
                                      } }
                                    >
                                      Date
                                    </th>
                                    <td style={ { textAlign: "right" } }>
                                      30-11-2023
                                    </td>
                                  </tr>
                                  <tr>
                                    <th
                                      style={ {
                                        textAlign: "left",
                                        color: "#1A1C21",
                                      } }
                                    >
                                      Day Name
                                    </th>
                                    <td style={ { textAlign: "right" } }>
                                      Monday
                                    </td>
                                  </tr>
                                  <tr>
                                    <th
                                      style={ {
                                        textAlign: "left",
                                        color: "#1A1C21",
                                      } }
                                    >
                                      Data
                                    </th>
                                    <td style={ { textAlign: "right" } }>
                                      100 Data
                                    </td>
                                  </tr>
                                  <tr>
                                    <th
                                      style={ {
                                        textAlign: "left",
                                        color: "#1A1C21 ",
                                      } }
                                    >
                                      Data
                                    </th>
                                    <td style={ { textAlign: "right" } }>
                                      19:58
                                    </td>
                                  </tr>
                                  <tr>
                                    <th
                                      style={ {
                                        textAlign: "left",
                                        color: "#1A1C21",
                                      } }
                                    >
                                      Data
                                    </th>
                                    <td style={ { textAlign: "right" } }>
                                      20:58
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>

                            <tr>
                              <td colspan="3">
                                <table
                                  style={ { width: "100%", borderSpacing: "0" } }
                                >
                                  <thead>
                                    <tr style={ { textTransform: "uppercase" } }>
                                      <td
                                        className="ge-ss"
                                        style={ {
                                          
                                          width: "100px",
                                          padding: "8px 0",
                                          border: "1px solid #D7DAE0",
                                          
                                          textAlign: "center",
                                          
                                        } }
                                      >
                                        الموقع
                                      </td>
                                      <td
                                        className="ge-ss"
                                        style={ {
                                          padding: "8px 0",
                                          // borderBlock: "1px solid #D7DAE0",
                                          border: "1px solid #D7DAE0",
                                          width: "100px",
                                          textAlign: "center",
                                        } }
                                      >
                                        الوقت
                                      </td>
                                      <td
                                        className="ge-ss"
                                        style={ {
                                          padding: "8px 0",
                                          // bborderBlock: "1px solid #D7DAE0",
                                          border: "1px solid #D7DAE0",
                                          textAlign: "center",
                                        } }
                                      >
                                        الحدث
                                      </td>
                                      <td
                                        className="ge-ss"
                                        style={ {
                                          padding: "8px 0",
                                          border: "1px solid #D7DAE0",
                                          textAlign: "center",
                                          width: "120px",
                                        } }
                                      >
                                        الحالة
                                      </td>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {rows.map(row =>(
                                      <tr>
                                      <td className="p-taq"> <p>{row.location}</p></td>
                                      <td className="p-taq">{row.time1}</td>
                                      <td className="p-taq text-left">{row.action}</td>
                                      <td className="p-taq">{row.status1}</td>
                                    </tr>
                                    ))}
                                    
                                  </tbody>
                                  <tfoot>
                                    <tr>
                                      <td
                                        style={ {
                                          padding: " 12px 0",
                                          borderTop: "1px solid #D7DAE0 ",
                                        } }
                                      ></td>
                                      <td
                                        style={ {
                                          borderTop: "1px solid #D7DAE0",
                                        } }
                                        colspan="3"
                                      ></td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <p style={ { color: "#1A1C21" } }>
                                          (1) Note Todat
                                        </p>
                                        <p style={ { color: "#1A1C21" } }>
                                          (2) Note Today
                                        </p>
                                      </td>
                                    </tr>
                                  </tfoot>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td style={ { paddingtop: "30px" } }>
                        <p style={ { display: "flex", gap: "0 13px" } }>
                          <span style={ { color: "#1A1C21", fontWeight: "700" } }>
                            This Reported By
                          </span>
                          <span>Ali Algamdi</span>
                          <span>86718</span>
                        </p>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );

  function ConfirmEditDialog ( { open, amount, onClose } )
  {
    // const viewTemplate = data.map((task) => {
    const viewTemplate = rows.map( ( task ) =>
    {
      if ( amount === task.id ) {
        return (
          <Dialog
            key={ task.id }
            disablePortal
            fullWidth
            maxWidth={ false }
            open={ open }
            onClose={ onClose }
            PaperProps={ {
              sx: { maxWidth: 720 },
            } }
          >
            {/* <FormProvider {...methods}> */ }
            <Form control={ register }>
              <DialogTitle></DialogTitle>
              <DialogContent>
                <Alert variant="outlined" severity="info" sx={ { mb: 3 } }>
                  تحديث عملية فنية على رقم المرجع { task.id } بواسطة{ " " }
                  <h4>{ task.name1 } </h4>
                </Alert>
                <Box display="grid" rowGap={ 3 }>
                  <Box
                    rowGap={ 3 }
                    columnGap={ 2 }
                    display="grid"
                    gridTemplateColumns={ {
                      xs: "repeat(1, 1fr)",
                      sm: "repeat(2, 1fr)",
                    } }
                  >
                    <FormControl>
                      <Autocomplete
                        defaultValue={ task.location }
                        options={ locations.map( ( option ) => option.location ) }
                        renderInput={ ( params ) => (
                          <TextField
                            { ...params }
                            name="location"
                            label="الموقع"
                            inputProps={ {
                              style: { fontWeight: "bolder" },
                              ...params.inputProps,
                            } }
                          />
                        ) }
                      />
                    </FormControl>
                    <FormControl fullWidth>
                      <InputLabel id="status1">الحالة</InputLabel>
                      <Select
                        name="status1"
                        labelId="status1"
                        id="demo-simple-select"
                        label="الحالة"
                        sx={ {
                          "& .MuiSelect-select": {
                            fontWeight: "bold",
                          },
                        } }
                        defaultValue={ task.status1 }
                      >
                        { status1.map( ( n ) => (
                          <MenuItem
                            key={ n.id }
                            value={ n.status }
                            style={ { fontWeight: "bold" } }
                          >
                            { n.status }
                          </MenuItem>
                        ) ) }
                      </Select>
                    </FormControl>
                    {/* <Box sx={{ display: { xs: "none", sm: "block" } }} /> */ }
                    <FormControl>
                      <LocalizationProvider dateAdapter={ AdapterDayjs }>
                        <DatePicker
                          name="date1"
                          label="التاريخ"
                          value={ dayjs( task.date1 ) }
                          format="YYYY-MM-DD"
                          onChange={ ( newValue ) =>
                            setDate( newValue.format( "YYYY-MM-DD" ) )
                          }
                          variant="subtitle"
                          sx={ {
                            "& .MuiInputBase-input": {
                              fontWeight: "bold",
                            },
                          } }
                        />
                      </LocalizationProvider>
                    </FormControl>
                    <TimeFormatFour
                      label="الوقت"
                      mask="_"
                      name="time1"
                      customInput={ TextField }
                      value={ task.time1 }
                      inputProps={ {
                        style: {
                          fontFamily: "sans-serif",
                          fontWeight: "bold",
                          textTransform: "Uppercase",
                        },
                      } }
                    />
                  </Box>
                  { task.synch ? (
                    <Box
                      columnGap={ 3 }
                      display="grid"
                      gridTemplateColumns={ {
                        xs: "repeat(1, 1fr)",
                        sm: "repeat(3, 1fr)",
                      } }
                    >
                      <FormControl>
                        <TextField
                          name="flame"
                          defaultValue={ task.flame }
                          label="الإحتراق"
                          inputProps={ {
                            style: {
                              fontFamily: "sans-serif",
                              fontWeight: "bold",
                              textTransform: "Uppercase",
                            },
                          } }
                          InputProps={ {
                            startAdornment: (
                              <InputAdornment position="start">
                                RPM
                              </InputAdornment>
                            ),
                          } }
                        />
                      </FormControl>
                      <TimeFormatFour
                        label="FSNL"
                        mask="_"
                        customInput={ TextField }
                        value={ task.fsnl }
                        inputProps={ {
                          style: {
                            fontFamily: "sans-serif",
                            fontWeight: "bold",
                            textTransform: "Uppercase",
                          },
                        } }
                      />
                      <TimeFormatFour
                        label="SYNCH"
                        name="synch"
                        mask="_"
                        customInput={ TextField }
                        value={ task.synch }
                        inputProps={ {
                          style: {
                            fontFamily: "sans-serif",
                            fontWeight: "bold",
                            textTransform: "Uppercase",
                          },
                        } }
                      />
                    </Box>
                  ) : null }

                  <Box display="grid">
                    <TextField
                      dir="ltr"
                      multiline
                      rows={ 2 }
                      fullwidth
                      defaultValue={ task.action }
                      name="action"
                      label="الحدث"
                      inputProps={ {
                        style: {
                          fontFamily: "sans-serif",
                          fontWeight: "bold",
                          textTransform: "Uppercase",
                        },
                      } }
                    />
                  </Box>
                  <Box display="grid">
                    <TextField
                      dir="ltr"
                      name="notes"
                      defaultValue={ task.note }
                      label={ task.note.length > 0 ? "ملاحظات" : "لاتوجد ملاحظة" }
                      inputProps={ {
                        style: {
                          fontFamily: "sans-serif",
                          fontWeight: "bold",
                          textTransform: "Uppercase",
                        },
                      } }
                    />
                  </Box>
                </Box>
              </DialogContent>

              <DialogActions>
                <Button variant="outlined" onClick={ onClose }>
                  الغاء
                </Button>

                <LoadingButton
                  type="submit"
                  variant="outlined"
                  color="error"
                  endIcon={ <Iconify icon="solar:pen-bold" /> }
                >
                  تحديث
                </LoadingButton>
              </DialogActions>
            </Form>
            {/* </FormProvider> */ }
          </Dialog>
        );
      }
    } );
    return <Fragment>{ viewTemplate }</Fragment>;
  }
  function TimeFormatFour ( props )
  {
    const { format, ...rest } = usePatternFormat( { ...props, format: "##:##" } );
    const _format = ( val ) =>
    {
      let hours = val.substring( 0, 2 );
      const minutes = val.substring( 2, 4 );
      if ( hours.length === 1 && hours[ 0 ] > 2 ) {
        hours = `0${ hours[ 0 ] }`;
      } else if ( hours.length === 2 ) {
        if ( Number( hours ) === 0 ) {
          hours = `00`;
        } else if ( Number( hours ) > 23 ) {
          hours = "00";
        }
      }

      return format( `${ hours }${ minutes }` );
    };

    return <NumberFormatBase format={ _format } { ...rest } />;
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
// function NestedInput({ value }) {
//   const { register } = useFormContext(); // retrieve all hook methods

//   return <TextField value={value.location} {...register("test")} />;
// }
