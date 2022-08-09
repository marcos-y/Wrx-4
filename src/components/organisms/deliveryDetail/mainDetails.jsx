// Utils & Config
import React from "react";

// External components
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import Typoghraphy from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Box from "@material-ui/core/Box";
import { useTheme } from "@material-ui/core";

// Internal components

const MainDetails = (props) => {
  const { palette } = useTheme();
  return (
    <Grid
      container
      xs={12}
      spacing={2}
      style={{ margin: "0 0 8px 0", padding: 8, backgroundColor: palette.secondColor, color: palette.fourthColor, borderRadius: 5 }}
    >
      <Grid item xs={12}>
        <Typoghraphy style={{ textAlign: "left" }}>{`ID #${props.delivery.id}` || "ID #420"}</Typoghraphy>
      </Grid>
      <Grid item xs={12}>
        <Box display="flex" justifyContent="flex-start" alignItems="center">
          <Typoghraphy>{props.delivery.date || "02/01 - 20 a 22hs"}</Typoghraphy>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box display="flex" justifyContent="flex-start" alignItems="center">
          <Typoghraphy>{props.delivery.address || "Av. Rivadavia 6505 Piso 5, dpto 6"}</Typoghraphy>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box display="flex" justifyContent="flex-start" alignItems="center">
          <Chip label={props.delivery.status.toUpperCase() || "PENDIENTE"} />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box display="flex">
          <Box display="flex" alignItems="center" marginRight={2}>
            <Icon style={{ marginRight: 8 }}>person</Icon> <Typoghraphy>{props.delivery.recyclerName || "Alejo Scotti"}</Typoghraphy>
          </Box>
          <Box display="flex" alignItems="center">
            <Icon style={{ marginRight: 8 }}>local_mall</Icon> <Typoghraphy>{"3 Bolsas"} </Typoghraphy>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

MainDetails.propTypes = {};

export default MainDetails;
