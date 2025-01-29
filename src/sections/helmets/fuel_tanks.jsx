import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { useSettingsContext } from "src/components/settings";
import {
  Avatar,
  Space,
  Table,
  Tag,
} from "antd";
import { _fuelTanks } from "src/_mock";

// ----------------------------------------------------------------------
const fixedColumns = [
  {
    title: "Tank Name",
    dataIndex: "tankNumber",
    width: 50,
    // fixed: "left",
    render: (id) => {
      return (
        <Avatar
          src={id || ""}
          // variant="rounded"
          shape="square"
          size={48}
          style={{
            backgroundColor: "#f56a00",
            fontWeight: "bold",
            border: "1px dashed white",
          }}
        >
          <Typography variant="h3">{id}</Typography>
        </Avatar>
      );
    },
    style: { display: "none" },
  },

  {
    title: "Tank Status",
    width: 200,
    fixed: "left",
    key: "tankStatus",
    dataIndex: "tankStatus",
    render: (_, { tankStatus }) => (
      <>
        {tankStatus.map((tag) => {
          let color = tag.length < 1 ? "#2db7f5" : "";
          if (tag === "SERVICE") {
            color = "#87d068";
          }
          if (tag === "FILLING") {
            color = "#2db7f5";
          }
          if (tag === "FEEDING") {
            color = "#f50";
          }
          if (tag === "RETUERN") {
            color = "#f50";
          }
          if (tag === "MAINTENANCE") {
            color = "#f50";
          }
          if (tag === "") {
            color = "lime";
          }
          return (
            <Tag color={color} style={{ fontSize: "14px", fontWeight: "bold" }}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Fule Type",
    dataIndex: "fuelType",
    width: 100,
    render: (fuelType) => {
      return (
        <Tag color="#f50" style={{ fontSize: "14px", fontWeight: "bold" }}>
          {fuelType.toUpperCase()}
        </Tag>
      );
    },
  },
];
console.log(_fuelTanks);
export default function FuelTanksView() {
  const settings = useSettingsContext();
  const [bordered, setBordered] = React.useState(true);
  const [empty, setEmpty] = React.useState(false);
  const tblRef = React.useRef(null);
  const data = _fuelTanks;

  return (
    <Container maxWidth={settings.themeStretch ? false : "xl"}>
      <Typography variant="h4"> </Typography>

      <Box
      // sx={{
      //   mt: 5,
      //   width: 1,
      //   height: 320,
      //   borderRadius: 2,
      //   bgcolor: (theme) => alpha(theme.palette.grey[500], 0.04),
      //   border: (theme) => `dashed 1px ${theme.palette.divider}`,
      // }}
      >
        <Space
          direction="vertical"
          style={{
            width: "100%",
          }}
        >
          <Space style={{ padding: 10 }}>
            <Typography variant="double">خزانات الوقود</Typography>
          </Space>

          <Table
            style={{ padding: 10 }}
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
