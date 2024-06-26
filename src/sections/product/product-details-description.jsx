import PropTypes from "prop-types";

import { DataGrid } from "@mui/x-data-grid";

// ----------------------------------------------------------------------

export default function ProductDetailsDescription({ description }) {
  return (
    <DataGrid
      children={description}
      sx={{
        p: 3,
        "& p, li, ol": {
          typography: "body2",
        },
        "& ol": {
          p: 0,
          display: { md: "flex" },
          listStyleType: "none",
          "& li": {
            "&:first-of-type": {
              minWidth: 240,
              mb: { xs: 0.5, md: 0 },
            },
          },
        },
      }}
    />
  );
}

ProductDetailsDescription.propTypes = {
  description: PropTypes.string,
};
