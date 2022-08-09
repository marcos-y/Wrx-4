// Utils & Config
import React from "react";
import PropTypes from "prop-types";

// External components
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import PreviewList from "./previewList";
import { useTheme } from "@material-ui/core";

// Internal components

const MobileDeliveryPreview = (props) => {
  const { palette } = useTheme();
  console.log("A VER PAPIN: ", props.delivery);
  return (
    <Grid container xs={12} spacing={4} style={{ margin: 0, backgroundColor: palette.secondColor, padding: 8 }}>
      <Grid item xs={12}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography style={{ fontSize: 18, fontWeight: "600", color: palette.fourthColor }}>
              {props.delivery.address.name || "Av. Rivadavia 6505 Piso 5, dpto 6"}
            </Typography>
            <Typography style={{ fontSize: 18, fontWeight: "400", color: palette.fourthColor }}>{props.delivery.date || "02/01 - 20 a 22hs"}</Typography>
          </Box>
          <Chip label={props.delivery.status || "PENDIENTE"} />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <PreviewList deliveryId={props.delivery.id} recyclerPhoneNumber={props.delivery.recyclerPhoneNumber} />
      </Grid>
    </Grid>
  );
};

MobileDeliveryPreview.propTypes = {
  delivery: PropTypes.object.isRequired,
};

export default MobileDeliveryPreview;
