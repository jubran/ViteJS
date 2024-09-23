import Container from "@mui/material/Container";

import { useSettingsContext } from "src/components/settings";

import { KanbanView } from "../kanban/view";
import DraggableSequence from "./utils/Drag";

// ----------------------------------------------------------------------

export default function UnitsView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : "xl"}>
      {/* <Box
        sx={{
          mt: 5,
          width: 1,
          height: 320,
          borderRadius: 2,
          bgcolor: (theme) => alpha(theme.palette.grey[500], 0.04),
          border: (theme) => `dashed 1px ${theme.palette.divider}`,
        }}
      /> */}
      {/* <KanbanView /> */}
      <DraggableSequence />
    </Container>
  );
}
