// Utils & config
import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";

// External components
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

// Internal components
import SectionTitle from "../../../../../components/atoms/sectionTitle/sectionTitle";
import IconText from "../../../../../components/atoms/iconText/iconText";

// Icons & images
import { useTheme } from "@material-ui/core";

const TextContent = (props) => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Grid item xs={12} md={5} style={{ display: "flex" }} alignItems="center">
      <Grid container spacing={2}>
        <Grid item xs={12} style={{ paddingTop: "0px", paddingBottom: "0px" }}>
          <SectionTitle align={isMdUp ? "left" : "center"}>VIVE UNA NUEVA EXPERIENCIA DE COMPRA</SectionTitle>
        </Grid>
        <Grid item xs={12} style={{ marginBottom: theme.spacing(4), paddingTop: "0px", paddingBottom: "0px" }}>
          <Typography align={isMdUp ? "left" : "center"} color="textPrimary">
            ¡Obtén una visión 360 de tu preparación offroad con nuestro nuevo simulador!
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box display="flex" flexDirection="column" alignItems="flex-start">
            {steps.map((step, index) => (
              <Box key={index} marginBottom={3}>
                <IconText text={step.text} iconName={step.iconName} />
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

TextContent.propTypes = {};

export default TextContent;

const steps = [
  { text: "SELECCIONA TU VEHÍCULO", iconName: "directions_car" },
  { text: "ELIJE LAS PIEZAS QUE DESEAS", iconName: "build" },
  { text: "COMPLETE LA COMPRA EN LÍNEA", iconName: "shopping_cart" },
  { text: "RECIBE LOS PRODUCTOS EN SU CASA", iconName: "home" },
];
