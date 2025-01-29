import Box from "@mui/material/Box";
import { alpha } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { useSettingsContext } from "src/components/settings";
import { _bankingRecentTransitions, _crudeSkid_One, _crudeSkid_Tow, _dieselBOP } from "src/_mock";
import DieselSkids from "./utils/SkidsRows";
import { Grid } from "@mui/material";
import { display, Stack, textAlign } from "@mui/system";
import CrudeSkidOne from "./utils/CrudeSkids";
import { Image } from "antd";

// ----------------------------------------------------------------------

export default function FtsView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : "xl"}>
      <Grid container spacing={1}>
        <Grid  md={12}>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Grid  md={4}>
              <Stack spacing={1} >
                <DieselSkids
                  title="منقيات 29"
                  
                  tableData={_dieselBOP}
                  tableLabels={[
                    { id: "description", label: "المنقي رقم" },
                    { id: "status", label: "الحالة" },
                  ]}
                 sx={{color:"#f56a00"}}
                />
              </Stack>
            </Grid>
            <Grid md={4}>
              <Stack spacing={1}>
                <CrudeSkidOne
                  title="منقيات الكرود 1"
                  tableData={_crudeSkid_One}
                  tableLabels={[
                    { id: "description", label: "المنقي رقم" },
                    { id: "status", label: "الحالة" },
                  
                  ]}
                  sx={{color:"#f56a00"}}
                />
              </Stack>
            </Grid>
            <Grid md={4}>
              <Stack spacing={1}>
                <CrudeSkidOne
                  title="منقيات الكرود 2"
                  tableData={_crudeSkid_Tow}
                  tableLabels={[
                    { id: "description", label: "المنقي رقم" },
                    { id: "status", label: "الحالة" },
                  
                  ]}
                  sx={{color:"#f56a00"}}
                />
              </Stack>
            </Grid>
          </Stack>  <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          
            <Image
            src="../src/assets/illustrations/shut.png"
            width={200}
          preview={false}
            style={{ borderRadius: "20px" , maxW:"100%",}}
          />
           <Image
            src="../src/assets/illustrations/service.png"
            width={200}
          preview={false}
            style={{ borderRadius: "20px" , maxW:"100%",}}
          />
           <Image
            src="../src/assets/illustrations/stand.png"
            width={200}
          preview={false}
            style={{ borderRadius: "20px" , maxW:"100%",}}
          />
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
