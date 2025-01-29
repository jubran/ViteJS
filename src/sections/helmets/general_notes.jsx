import React from "react";
import Box from "@mui/material/Box";
import { alpha } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { useSettingsContext } from "src/components/settings";
import { Button, Segmented, Space, Switch, Table, Tag } from "antd";
import { _fuelTanks } from "src/_mock";

// ----------------------------------------------------------------------
const fixedColumns = [
  {
    title: "Tank Name",
    dataIndex: "id",
    width: 100,
    fixed: "left",
  },
 
  {
    title: "Tank Status",
    dataIndex: "tankStatus",
    width: 120,
    fixed: "left"
    
  },
  {
    title: "Fule Type",
    dataIndex: "fuelType",
    width: 100,
    onCell: (record) => ({
      colSpan: record.id % 4 === 0 ? 2 : 1,
    }),
  },


];

export default function FuelTanksView() {
  const settings = useSettingsContext();
  const [bordered, setBordered] = React.useState(true);
  const [empty, setEmpty] = React.useState(false);
  const tblRef = React.useRef(null);
  const data = _fuelTanks

  return (
    <Container maxWidth={settings.themeStretch ? false : "xl"}>
      <Typography variant="h4"> Fuel Tanks </Typography>

      <Box
        sx={{
          mt: 5,
          width: 1,
          height: 320,
          borderRadius: 2,
          bgcolor: (theme) => alpha(theme.palette.grey[500], 0.04),
          border: (theme) => `dashed 1px ${theme.palette.divider}`,
        }}
      >
        <Space
          direction="vertical"
          style={{
            width: "100%",
          }}
        >
          <Space style={{padding:10}}>
            <Typography variant="double">خزانات الوقود</Typography>
          </Space>

          <Table
          style={{padding:10}}
            bordered={bordered}
            virtual
            columns={fixedColumns}
            scroll={{
              x: 100,
              y: 400,
            }}
            rowKey="id"
            dataSource={empty ? [] : data}
            pagination={false}
            ref={tblRef}
          />
        </Space>
      </Box>
    </Container>
  );
}
