import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Table from "@mui/material/Table";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import TableRow from "@mui/material/TableRow";
import { useTheme } from "@mui/material/styles";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import CardHeader from "@mui/material/CardHeader";
import Badge, { badgeClasses } from "@mui/material/Badge";
import TableContainer from "@mui/material/TableContainer";

import Label from "src/components/label";
import Iconify from "src/components/iconify";
import Scrollbar from "src/components/scrollbar";
import { TableHeadCustom } from "src/components/table";
import { SkidsRow } from "./AvatarFts";

// ----------------------------------------------------------------------

export default function DieselSkids({
  title,
  subheader,
  tableLabels,
  tableData,
  ...other
}) {
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} sx={{ mb: 3 }} />

      <TableContainer sx={{ overflow: "unset" }}>
        <Scrollbar>
          <Table sx={{ minWidth: 1 }}>
            <TableHeadCustom headLabel={tableLabels} />

            <TableBody>
              {tableData.map((row) => (
                <SkidsRow key={row.id} row={row} />
              ))}
            </TableBody>
          </Table>
        </Scrollbar>
      </TableContainer>

      <Divider sx={{ borderStyle: "dashed" }} />

      <Box sx={{ p: 2, textAlign: "right" }}>
        <Button
          size="small"
          color="inherit"
          endIcon={
            <Iconify
              icon="eva:arrow-ios-forward-fill"
              width={18}
              sx={{ ml: -0.5 }}
            />
          }
        ></Button>
      </Box>
    </Card>
  );
}

DieselSkids.propTypes = {
  subheader: PropTypes.string,
  tableData: PropTypes.array,
  tableLabels: PropTypes.array,
  title: PropTypes.string,
};

// ----------------------------------------------------------------------

