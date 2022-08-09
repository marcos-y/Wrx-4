// Utils & config
import React from "react";

// External components
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

// Internal components

// Icons & images

const Subtitle = (props) => {
  return (
    <Grid item xs={12} style={{ marginBottom: 16, paddingTop: 0 }}>
      <Box display="flex" maxWidth={768} marginX="auto">
        <Typography color="textPrimary">
          ¿Formas parte de un grupo de off-roaders? ¿No encontráis accesorios especiales para vuestro vehículo? ¡No lo dudes! Ponte en
          contacto con nosotros para beneficiarte de las ventajas exclusivas de los grupos de compra.
        </Typography>
      </Box>
    </Grid>
  );
};

Subtitle.propTypes = {};

export default Subtitle;
