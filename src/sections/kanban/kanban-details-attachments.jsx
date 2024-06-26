import PropTypes from "prop-types";

import Stack from "@mui/material/Stack";

// import { UploadBox, MultiFilePreview } from 'src/components/upload';

// ----------------------------------------------------------------------

export default function KanbanDetailsAttachments({ attachments }) {
  return <Stack direction="row" flexWrap="wrap" />;
}

KanbanDetailsAttachments.propTypes = {
  attachments: PropTypes.array,
};
