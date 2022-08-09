// Utils & config
import React from "react";
import { useTheme } from "@material-ui/core";
import fonts from "../../../../styles/fonts.module.scss";

//External components
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";

//Internal components
import img from "../../../../assets/images/navbarBackgroundImg.png";

const HistorySection = (props) => {
  const theme = useTheme();

  return (
    <div style={{ marginBottom: theme.spacing(16) }}>
      <Grid container spacing={10}>
        <Hidden smDown>
          {props.inverted && (
            <Grid item xs={12} md={6}>
              <img src={img} alt="wrxoffroad" maxWidth="300px" width="100%" height="auto" />
            </Grid>
          )}{" "}
        </Hidden>

        <Grid item xs={12} md={6}>
          <Box marginBottom={4}>
            <Typography align="left" color="textPrimary" style={{ fontFamily: fonts.titleFont, fontSize: 24 }}>
              NUESTRA HISTORIA...
            </Typography>
          </Box>

          <Box marginBottom={4}>
            <Typography align="left" color="textPrimary" style={{ fontSize: 18, fontFamily: fonts.paragraphFont }}>
              Nacida en el año 1992, la empresa Warrior 4x4 fue creada por nuestro director general Rafael Lucas Grande como respuesta a la
              necesidad de defensas de calidad para las motocicletas de Cross Country. Con el auge del vehiculo todoterreno en España, se
              decide dar un giro de 180º y comenzar a fabricar pioneras defensas de acero inoxibadable. Unos años mas tarde, Warrior 4x4 se
              convierte en el primer importador de ARB en España. En la actualidad, con 5000 coches preparados a nuestras espaldas, te
              ofrecemos una amplia y variada gama de accesorios para tu 4x4, ya sea para el offroading mas extremo o para el camper mas
              familiar.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={6} style={{ display: "flex" }}>
          {!props.inverted && (
            <img src={img} alt="wrxoffroad" maxWidth="300px" width="100%" height="auto" style={{ alignSelf: "center" }} />
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default HistorySection;
