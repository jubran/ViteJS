// import { Dialog, DialogContent } from "@mui/material"
// import { Fragment } from "react"
// import EventPrint from "../testData/EventPrint"

// export default function PrintDailyReport({data, open ,isPrinted,printRef,onClose}){
// console.log(open)
//     const viewTemplate = () => {
  
//       return(
//         <Dialog
//         disablePortal
//         fullWidth
//         maxWidth={false}
//         open={open}
//         onClose={onClose}
//         PaperProps={{
//           sx: { maxWidth: "80%" },
//         }}
//       >
//         <DialogContent
//           sx={
//             {
//               // whiteSpace: 'nowrap',
//             }
//           }
//         >
//           <EventPrint
//            rows1={data} isPrinted={isPrinted} printRef={printRef} />
//         </DialogContent>
//       </Dialog>
//       )
//     }
  
//     return <Fragment>{viewTemplate()}</Fragment>
//   }