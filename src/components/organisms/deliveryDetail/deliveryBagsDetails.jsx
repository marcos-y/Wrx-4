// Utils & Config
import React from "react";
import PropTypes from "prop-types";

// External components
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useTheme } from "@material-ui/core";
import Box from "@material-ui/core/Box";

// Internal components

const DeliveryBagsDetails = (props) => {
  const { palette } = useTheme();
  return (
    <Grid item xs={12} style={{ backgroundColor: palette.secondColor, margin: 0, padding: 16, borderRadius: 5 }}>
      {props.qrcodes.map((qrcode) => {
        return (
          <Grid container xs={12} spacing={4} justify="space-between" alignItems="center">
            <Grid item xs={12}>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography style={{ display: "inline-block", color: palette.fourthColor }}>Bolsa #{qrcode.id}</Typography>
                <Typography style={{ display: "inline-block" }}>PENDIENTE</Typography>
              </Box>
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
};

DeliveryBagsDetails.propTypes = {
  qrcodes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DeliveryBagsDetails;
