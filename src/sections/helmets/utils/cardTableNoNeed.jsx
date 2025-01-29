// import PropTypes from 'prop-types';

// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import Table from '@mui/material/Table';
// import Button from '@mui/material/Button';
// import Avatar from '@mui/material/Avatar';
// import Divider from '@mui/material/Divider';
// import MenuItem from '@mui/material/MenuItem';
// import TableRow from '@mui/material/TableRow';
// import { useTheme } from '@mui/material/styles';
// import TableCell from '@mui/material/TableCell';
// import TableBody from '@mui/material/TableBody';
// import IconButton from '@mui/material/IconButton';
// import CardHeader from '@mui/material/CardHeader';
// import ListItemText from '@mui/material/ListItemText';
// import Badge, { badgeClasses } from '@mui/material/Badge';
// import TableContainer from '@mui/material/TableContainer';

// import { fDate, fTime } from 'src/utils/format-time';

// import Label from 'src/components/label';
// import Iconify from 'src/components/iconify';
// import Scrollbar from 'src/components/scrollbar';
// import { TableHeadCustom } from 'src/components/table';
// import CustomPopover, { usePopover } from 'src/components/custom-popover';

// // ----------------------------------------------------------------------

// export default function BankingRecentTransitions({
//   title,
//   subheader,
//   tableLabels,
//   tableData,
//   ...other
// }) {
//   return (
//     <Card {...other}>
//       <CardHeader title={title} subheader={subheader} sx={{ mb: 3 }} />

//       <TableContainer sx={{ overflow: 'unset' }}>
//         <Scrollbar>
//           <Table sx={{ minWidth: 1 }}>
//             <TableHeadCustom headLabel={tableLabels} />

//             <TableBody>
//               {tableData.map((row) => (
//                 <BankingRecentTransitionsRow key={row.id} row={row} />
//               ))}
//             </TableBody>
//           </Table>
//         </Scrollbar>
//       </TableContainer>

//       <Divider sx={{ borderStyle: 'dashed' }} />

//       <Box sx={{ p: 2, textAlign: 'right' }}>
//         <Button
//           size="small"
//           color="inherit"
//           endIcon={<Iconify icon="eva:arrow-ios-forward-fill" width={18} sx={{ ml: -0.5 }} />}
//         >
//           {/* View All */}
//         </Button>
//       </Box>
//     </Card>
//   );
// }

// BankingRecentTransitions.propTypes = {
//   subheader: PropTypes.string,
//   tableData: PropTypes.array,
//   tableLabels: PropTypes.array,
//   title: PropTypes.string,
// };

// // ----------------------------------------------------------------------

// function BankingRecentTransitionsRow({ row }) {
//   const theme = useTheme();

//   const lightMode = theme.palette.mode === 'light';

//   // const popover = usePopover();

//   // const handleDownload = () => {
//   //   popover.onClose();
//   //   console.info('DOWNLOAD', row.id);
//   // };

//   // const handlePrint = () => {
//   //   popover.onClose();
//   //   console.info('PRINT', row.id);
//   // };

//   // const handleShare = () => {
//   //   popover.onClose();
//   //   console.info('SHARE', row.id);
//   // };

//   // const handleDelete = () => {
//   //   popover.onClose();
//   //   console.info('DELETE', row.id);
//   // };

//   const renderAvatar = (
//     <Box sx={{ position: 'relative', mr: 3 }}>
//       <Badge
//         overlap="circular"
//         color={
//           (row.type === 'In Service' && 'success') ||
//           (row.type === 'Stand By' && 'info') ||
//           'error'  }
//         anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
//         badgeContent={
//           <Iconify
//             icon={ 
//               (row.type === 'In Service' && 'iconoir:system-restart') ||
//               (row.type === 'Stand By' && 'bitcoin-icons:info-filled') ||
//               'ph:gear-light'
//             }
//             width={24}
//           />
//         }
//         sx={{
//           [`& .${badgeClasses.badge}`]: {
//             p: '1px',
//             width: 28,
//             height: 28,
//             border: '2px solid white '
//           },
//         }}
//       >
//         <Avatar
//           src={row.avatarUrl || ''}
//          variant="rounded"
//           sx={{
//             width: 48,
//             height: 48,
//             bgcolor: '#f56a00',
//             // bgcolor : row.type === 'In Service' ? '#22C55E' :  '' || row.type === 'Stand By' ? '#00B8D9' : ''||  row.type === 'Shutdown' ? '#ef5350' : '',
//             fontWeight: 'bold',
//              border: '1px dashed white '
//             // color: 'text.secondary',
//           }}
//         >
//           {row.avatarUrl}
//           {/* {row.category === 'Books' && <Iconify icon="eva:book-fill" width={24} />}
//           {row.category === 'Beauty & Health' && <Iconify icon="solar:heart-bold" width={24} />} */}
//         </Avatar>
//       </Badge>
//     </Box>
//   );

//   return (
//     <>
//       <TableRow hover onClick={()=>{console.log("lo")}}>
//         <TableCell sx={{ display: 'flex', alignItems: 'center' }}>
//           {renderAvatar}
//           {/* <ListItemText  secondary={'BOP 2'} /> */}
//         </TableCell>
//         <TableCell>
//           <Label
//             variant={lightMode ? 'soft' : 'filled'}
//             color={
//               (row.status === 'In Service' && 'success') ||
//               (row.status === 'Stand By' && 'info') ||
//               'error'
//             }
//           >
//             {row.status}
//           </Label>
//         </TableCell>

//         {/* <TableCell align="right" sx={{ pr: 1 }}>
//           <IconButton color={popover.open ? 'inherit' : 'default'} onClick={popover.onOpen}>
//             <Iconify icon="eva:more-vertical-fill" />
//           </IconButton>
//         </TableCell> */}
//       </TableRow>

//       {/* <CustomPopover
//         open={popover.open}
//         onClose={popover.onClose}
//         arrow="right-top"
//         sx={{ width: 160 }}
//       >
//         <MenuItem onClick={handleDownload}>
//           <Iconify icon="eva:cloud-download-fill" />
//           Download
//         </MenuItem>

//         <MenuItem onClick={handlePrint}>
//           <Iconify icon="solar:printer-minimalistic-bold" />
//           Print
//         </MenuItem>

//         <MenuItem onClick={handleShare}>
//           <Iconify icon="solar:share-bold" />
//           Share
//         </MenuItem>

//         <Divider sx={{ borderStyle: 'dashed' }} />

//         <MenuItem onClick={handleDelete} sx={{ color: 'error.main' }}>
//           <Iconify icon="solar:trash-bin-trash-bold" />
//           Delete
//         </MenuItem>
//       </CustomPopover> */}
//     </>
//   );
// }

// BankingRecentTransitionsRow.propTypes = {
//   row: PropTypes.object,
// };
