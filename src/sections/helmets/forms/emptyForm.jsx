import { LoadingButton } from "@mui/lab";
import {
  Alert,
  Autocomplete,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { memo } from "react";
import { NumberFormatBase, usePatternFormat } from "react-number-format";
import Iconify from "src/components/iconify";
import TimeFormatFour from "../utils/timeFormatFour";
import {locations , status1} from './variable'
const EmptyForm = memo(function EmptyForm({ onSubmit, onClose }) {

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const orderDetails = {
      ...Object.fromEntries(formData),
    };
    onSubmit(orderDetails);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <Box display="grid" rowGap={3}>
            <Box
              rowGap={3}
              columnGap={2}
              display="grid"
              gridTemplateColumns={{
                xs: "repeat(1, 1fr)",
                sm: "repeat(2, 1fr)",
              }}
            >
              <FormControl>
                <Autocomplete
                  defaultValue={""}
                  options={locations.map((option) => option.location)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      name="location"
                      label="2الموقع"
                      inputProps={{
                        style: { fontWeight: "bolder" },
                        ...params.inputProps,
                      }}
                    />
                  )}
                />
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id="status1">الحالة</InputLabel>
                <Select
                  name="status1"
                  labelId="status1"
                  id="demo-simple-select"
                  label="الحالة"
                  sx={{
                    "& .MuiSelect-select": {
                      fontWeight: "bold",
                    },
                  }}
                  defaultValue={""}
                >
                  {status1.map((n) => (
                    <MenuItem
                      key={n.id}
                      value={n.status}
                      style={{ fontWeight: "bold" }}
                    >
                      {n.status}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    name="date1"
                    label="التاريخ"
                    value={dayjs("01-01-2015")}
                    format="YYYY-MM-DD"
                    variant="subtitle"
                    sx={{
                      "& .MuiInputBase-input": {
                        fontWeight: "bold",
                      },
                    }}
                  />
                </LocalizationProvider>
              </FormControl>
              <TimeFormatFour
                label="الوقت"
                mask="_"
                name="time1"
                customInput={TextField}
                value={""}
                inputProps={{
                  style: {
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    textTransform: "Uppercase",
                  },
                }}
              />
            </Box>
            {true ? (
              <Box
                columnGap={3}
                display="grid"
                gridTemplateColumns={{
                  xs: "repeat(1, 1fr)",
                  sm: "repeat(3, 1fr)",
                }}
              >
                <FormControl>
                  <TextField
                    name="flame"
                    defaultValue={""}
                    label="الإحتراق"
                    inputProps={{
                      style: {
                        fontFamily: "sans-serif",
                        fontWeight: "bold",
                        textTransform: "Uppercase",
                      },
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">RPM</InputAdornment>
                      ),
                    }}
                  />
                </FormControl>
                <TimeFormatFour
                  label="FSNL"
                  mask="_"
                  customInput={TextField}
                  value={""}
                  inputProps={{
                    style: {
                      fontFamily: "sans-serif",
                      fontWeight: "bold",
                      textTransform: "Uppercase",
                    },
                  }}
                />
                <TimeFormatFour
                  label="SYNCH"
                  name="synch"
                  mask="_"
                  customInput={TextField}
                  value={""}
                  inputProps={{
                    style: {
                      fontFamily: "sans-serif",
                      fontWeight: "bold",
                      textTransform: "Uppercase",
                    },
                  }}
                />
              </Box>
            ) : null}

            <Box display="grid">
              <TextField
                dir="ltr"
                multiline
                rows={2}
                fullwidth
                defaultValue={""}
                name="action"
                label="الحدث"
                inputProps={{
                  style: {
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    textTransform: "Uppercase",
                  },
                }}
              />
            </Box>
            <Box display="grid">
              <TextField
                error={true}
                dir="ltr"
                name="notes"
                defaultValue={""}
                label={""}
                inputProps={{
                  style: {
                    color: "red",
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    textTransform: "Uppercase",
                  },
                }}
              />
            </Box>
          </Box>
        </DialogContent>

        <DialogActions>
          <Button variant="outlined" onClick={onClose}>
            الغاء
          </Button>

          <LoadingButton
            type="submit"
            variant="outlined"
            color="error"
            endIcon={<Iconify icon="solar:pen-bold" />}
         
          >
            تحديث
          </LoadingButton>
        </DialogActions>
      </form>
    </>
  );
});


export default EmptyForm;
