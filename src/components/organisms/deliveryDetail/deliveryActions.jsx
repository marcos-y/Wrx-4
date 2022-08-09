// Utils & Config
import React from "react";

// External components
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Icon from "@material-ui/core/Icon";
import WhatsApp from "@material-ui/icons/WhatsApp";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core";

// Internal components

const DeliveryActions = (props) => {
  const { palette } = useTheme();
  return (
    <Grid container xs={12} style={{ margin: "0 0 8px" }}>
      <Grid container xs={4} spacing={2} style={{ padding: "0 8px 0 0", margin: "0" }}>
        <Grid item xs={12} style={{ backgroundColor: palette.secondColor, borderRadius: 5 }}>
          <Box display="flex" flexDirection="column" justifyItems="center" justifyContent="center" alignItems="center" height="100%">
            <Icon style={{ color: palette.fourthColor, marginBottom: 4 }} fontSize="large">
              cancel_outlined
            </Icon>
            <Typography style={{ color: palette.fourthColor, fontSize: 14 }}>Cancelar retiro</Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container xs={4} spacing={2} style={{ margin: 0 }}>
        <Grid item xs={12} style={{ backgroundColor: palette.secondColor, borderRadius: 5 }}>
          <Box display="flex" flexDirection="column" justifyItems="center" justifyContent="center" alignItems="center" height="100%">
            <Icon style={{ color: palette.fourthColor, marginBottom: 4 }} fontSize="large">
              phone
            </Icon>
            <Typography style={{ color: palette.fourthColor, fontSize: 14 }}>Llamar</Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container xs={4} spacing={2} style={{ margin: 0, padding: "0 0 0 8px" }}>
        <Grid
          item
          xs={12}
          style={{ backgroundColor: palette.secondColor, borderRadius: 5 }}
          onClick={() => window.open("https://wa.me/34623361541", "_blank")}
        >
          <Box display="flex" flexDirection="column" justifyItems="center" justifyContent="center" alignItems="center" height="100%">
            <WhatsApp style={{ color: palette.fourthColor, marginBottom: 4 }} fontSize="large" />
            <Typography style={{ color: palette.fourthColor, fontSize: 14 }}>Enviar Whatsapp</Typography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

DeliveryActions.propTypes = {};

export default DeliveryActions;
