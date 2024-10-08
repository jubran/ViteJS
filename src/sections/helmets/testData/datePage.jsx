import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import {  useState } from "react";
import DoProcess from "./process";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { useSettingsContext } from "src/components/settings";
import CustomBreadcrumbs from "src/components/custom-breadcrumbs";
import { RouterLink } from "src/routes/components";
import { paths } from "src/routes/paths";
import Iconify from "src/components/iconify";

import { useBoolean } from "src/hooks/use-boolean";
import ConfirmNew from "../dialogs/newDailyData";

export default function ViewDate() {
  const [ids, setDate] = useState(dayjs(Date.now()).format("YYYY-MM-DD"));
  const settings = useSettingsContext();
  const [dateValue, setValue] = useState(dayjs(Date.now()));
  const confirmEmpty = useBoolean();
  return (
    <>
      <Container
        maxWidth={settings.themeStretch ? false : "lg"}
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {" "}
        <CustomBreadcrumbs
          heading="الرئيسية"
          links={[{ name: "اضافة او تحديث او استعراض العمليات التشغيلية" }]}
          action={
            <Button
              component={RouterLink}
              href={paths.dashboard.root}
              variant="contained"
              color="primary"
              startIcon={<Iconify icon="mingcute:add-line" />}
              onClick={confirmEmpty.onTrue}
            >
              إضافة حدث جديد
            </Button>
          }
          sx={{
            mb: {
              xs: 3,
              md: 5,
            },
          }}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Stack
            sx={{
              width: "20%",
              padding: "10px",
            }}
          >
            <DatePicker
              label="التاريخ"
              value={dateValue}
              format="YYYY-MM-DD"
              onChange={(newValue) => setDate(newValue.format("YYYY-MM-DD"))}
              variant="subtitle"
              slotProps={{ textField: { size: "small" } }}
              sx={{
                "& .MuiInputBase-input": {
                  fontSize: "16px",
                  fontWeight: "bold",
                },
              }}
            />
          </Stack>
        </LocalizationProvider>
        <DoProcess ids={ids} />
        <ConfirmNew open={confirmEmpty.value} onClose={confirmEmpty.onFalse} />
      </Container>
    </>
  );
 
}
