import { Alert, Dialog, DialogTitle } from "@mui/material";
import { Fragment } from "react";
import CallApiNew from "../api/newDataApi";


export default function ConfirmNew({ open, onClose }) {
  const viewTemplate = () => {
    return (
      <Dialog fullWidth open={open} onClose={onClose}>
        <DialogTitle>
          {" "}
          <Alert variant="outlined" severity="info" sx={{ mb: 3 }}>
            ادخال جديد
          </Alert>
        </DialogTitle>

        <CallApiNew onClose={onClose} />
      </Dialog>
    );
  };
  return <Fragment>{viewTemplate()}</Fragment>;
}
