import { LoadingButton } from "@mui/lab";
import {
  Alert,
  Autocomplete,
  Button,
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
import { memo, useState } from "react";
import Iconify from "src/components/iconify";
import { useBoolean } from "src/hooks/use-boolean";
import TimeFormatFour from "../utils/timeFormatFour";
import { locations , status1} from "./variable"
const UpdatedForm = memo(function UpdatedForm({
  onSubmit,
  updatedData,
  onClose,
}) {
  const data = updatedData ;
  const confirm = useBoolean();
  let startTime = performance.now();
  while (performance.now() - startTime < 500) {
    // Do nothing for 500 ms to emulate extremely slow code
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const orderDetails = {
      ...Object.fromEntries(formData),
    };
    onSubmit(orderDetails);
  }
  return (
    <form onSubmit={handleSubmit}>
         <DialogContent>
      <Alert variant="outlined" severity="info" sx={{ mb: 3 }}>
        تحديث عملية فنية على رقم المرجع {data.id} بواسطة <h4>{data.id} </h4>
      </Alert>
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
              defaultValue={data.location}
              options={locations.map((option) => option.location)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  name="location"
                  label="الموقع"
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
              defaultValue={data.status1}
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
                value={dayjs(data.date1)}
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
            value={data.time1}
            inputProps={{
              style: {
                fontFamily: "sans-serif",
                fontWeight: "bold",
                textTransform: "Uppercase",
              },
            }}
          />
        </Box>
        {data.synch ? (
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
                defaultValue={data.flame}
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
              value={data.fsnl}
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
              value={data.synch}
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
            defaultValue={data.action}
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
            error={data.note.length > 0 ? true : false}
            dir="ltr"
            name="notes"
            defaultValue={data.note}
            label={data.note.length > 0 ? "ملاحظات" : "لاتوجد ملاحظة"}
            inputProps={{
              style: {
                color: "" == data.note.length > 0 ? "" : "red",
                fontFamily: "sans-serif",
                fontWeight: "bold",
                textTransform: "Uppercase",
              },
            }}
          />
        </Box>
      </Box>
      ;
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={onClose}  color="error" endIcon={<Iconify icon="quill:escape"/>}>
          الغاء تحديث هذه العملية
        </Button>

        <LoadingButton
          type="submit"
          variant="outlined"
          color="info"
          endIcon={<Iconify icon="solar:pen-bold" />}
        >
          تحديث هذه العملية
        </LoadingButton>
      </DialogActions>
    </form>
  );
});

export default UpdatedForm;
