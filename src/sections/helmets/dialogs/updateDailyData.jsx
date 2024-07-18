import { Dialog, DialogContent } from "@mui/material";
import { Fragment } from "react";
import CallApiUpdate from "../api/editDataApi";

export default function HandelEditForm({ open, updatedData, onClose }) {
  const viewTemplate = () => {
    return (
      <Dialog
        fullWidth
        PaperProps={{
          sx: { maxWidth: 720, paddingTop: "12px" },
        }}
        onClose={onClose}
        open={open}
        attribute={false}
      >
        <CallApiUpdate updatedData={updatedData} onClose={onClose} />
      </Dialog>
    );
  };
  return <Fragment>{viewTemplate()}</Fragment>;
}
