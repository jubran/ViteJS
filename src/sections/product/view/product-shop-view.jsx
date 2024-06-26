// ----------------------------------------------------------------------

import { Container, Typography } from "@mui/material";

import { useSettingsContext } from "src/components/settings";

export default function ProductShopView() {
  const settings = useSettingsContext();
  return (
    <Container
      maxWidth={settings.themeStretch ? false : "lg"}
      sx={{
        mb: 15,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          my: { xs: 3, md: 5 },
        }}
      >
        Shop
      </Typography>
    </Container>
  );
}

// ----------------------------------------------------------------------
