import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import TableRow from '@mui/material/TableRow';
import { useTheme } from '@mui/material/styles';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import CardHeader from '@mui/material/CardHeader';
import ListItemText from '@mui/material/ListItemText';
import Badge, { badgeClasses } from '@mui/material/Badge';
import TableContainer from '@mui/material/TableContainer';

import Label from 'src/components/label';
import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';
import { TableHeadCustom } from 'src/components/table';
import { SkidsRow } from './AvatarFts';

// ----------------------------------------------------------------------

export default function CrudeSkidOne({
  title,
  subheader,
  tableLabels,
  tableData,
  ...other
}) {
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} sx={{ mb: 3 }} />
      <TableContainer sx={{ overflow: 'unset' }}>
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
      <Divider sx={{ borderStyle: 'dashed' }} />
      <Box sx={{ p: 2, textAlign: 'right' }}>
        <Button
          size="small"
          color="inherit"
          endIcon={<Iconify icon="eva:arrow-ios-forward-fill" width={18} sx={{ ml: -0.5 }} />}
        >
        </Button>
      </Box>
    </Card>
  );
}

CrudeSkidOne.propTypes = {
  subheader: PropTypes.string,
  tableData: PropTypes.array,
  tableLabels: PropTypes.array,
  title: PropTypes.string,
};

// ----------------------------------------------------------------------

function CrudeSkid_1_Row({ row }) {
  const theme = useTheme();
  const lightMode = theme.palette.mode === 'light';
  const renderAvatar = (
    <Box sx={{ position: 'relative', mr: 2 }}>
      <Badge
        overlap="circular"
        color={row.type === 'Income' ? 'success' : 'error'}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        badgeContent={
          <Iconify
            icon={
              row.type === 'Income'
                ? 'eva:diagonal-arrow-left-down-fill'
                : 'eva:diagonal-arrow-right-up-fill'
            }
            width={16}
          />
        }
        sx={{
          [`& .${badgeClasses.badge}`]: {
            p: 0,
            width: 20,
          },
        }}
      >
        <Avatar
          src={row.avatarUrl || ''}
          sx={{
            width: 48,
            height: 48,
            color: 'text.secondary',
            bgcolor: 'background.secondary',
            fontWeight: 'bold',
          }}
        >
          {row.avatarUrl || '2'}
          {row.category === 'Books' && <Iconify icon="eva:book-fill" width={24} />}
          {row.category === 'Beauty & Health' && <Iconify icon="solar:heart-bold" width={24} />}
        </Avatar>
      </Badge>
    </Box>
  );

  return (
    <>
      <TableRow hover onClick={()=>{console.log("lo")}}>
        <TableCell sx={{ display: 'flex', alignItems: 'center' }}>
          {renderAvatar}
          <ListItemText primary={row.message} secondary={row.category} />
        </TableCell>
        <TableCell>
          <Label
            variant={lightMode ? 'soft' : 'filled'}
            color={
              (row.status === 'completed' && 'success') ||
              (row.status === 'progress' && 'warning') ||
              'error'
            }
          >
            {row.status}
          </Label>
        </TableCell>
      </TableRow>
    </>
  );
}

CrudeSkid_1_Row.propTypes = {
  row: PropTypes.object,
};
