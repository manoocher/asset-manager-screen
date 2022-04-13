import { DevicesOther } from "@mui/icons-material";
import { Box, List, ListItem, ListItemIcon } from "@mui/material";

export const IconListComp = () => {
  return (
    <Box>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <ListItem>
          <ListItemIcon>
            <DevicesOther />
          </ListItemIcon>
        </ListItem>
      </List>
    </Box>
  );
};
