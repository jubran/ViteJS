import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import TableRow from "@mui/material/TableRow";
import { useTheme } from "@mui/material/styles";
import TableCell from "@mui/material/TableCell";
import Badge, { badgeClasses } from "@mui/material/Badge";

import Label from "src/components/label";
import {HourglassOutlined, SettingOutlined, SunOutlined } from "@ant-design/icons";
import { Tag, Typography } from "antd";



export function SkidsRow({ row }) {
  const theme = useTheme();

  const lightMode = theme.palette.mode === "light";
  const renderAvatar = (
    <Box sx={{ position: "relative", mr: 3 }}>
      <Badge
        overlap="circular"
        color={
          (row.status === "In Service" && "success") ||
          (row.status === "Stand By" && "info") ||
          "error"
        }
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        badgeContent={
          (row.status === "In Service" &&  <SunOutlined style={{ fontSize: '20px', color: '#fff' }}/>) ||
          (row.status === "Stand By" && <HourglassOutlined style={{ fontSize: '20px', color: '#fff' }}/>) ||
          <SettingOutlined style={{ fontSize: '20px', color: '#fff' }}/>
        }
        sx={{
          [`& .${badgeClasses.badge}`]: {
            p: "1px",
            width: 28,
            height: 28,
            border: "2px solid white ",
          },
        }}
      >
        <Avatar
          src={row.avatarUrl || ""}
          variant="rounded"
          sx={{
            width: 48,
            height: 48,
            bgcolor: "#f56a00",
            fontWeight: "bold",
            border: "1px dashed white ",
          }}
        >
          {row.avatarUrl}
        </Avatar>
      </Badge>
    </Box>
  );
  return (
    <>
      <TableRow
        hover
        onClick={() => {
          console.log("lo");
        }}
      >
        <TableCell sx={{ display: "flex", alignItems: "center" }}>
          {renderAvatar}
        </TableCell>
        <TableCell>
          <Tag
            variant={lightMode ? "soft" : "filled"}
            color={
              (row.status === "In Service" && "#52c41a") ||
              (row.status === "Stand By" && "#40a9ff") ||
              "#ff1818"
            }
            style={{border:"1px dashed #fff"}}
          >
          <Typography style={{fontSize:"14px",fontWeight:"bold",color:"#fff", width:"100px",textAlign:"center"}}>{row.status.toUpperCase()}</Typography>
          </Tag>
        </TableCell>
      </TableRow>
    </>
  );
}

SkidsRow.propTypes = {
  row: PropTypes.object,
};
