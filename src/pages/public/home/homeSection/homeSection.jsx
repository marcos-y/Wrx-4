// Utils & config
import React from "react";
import { useTheme } from "@material-ui/core";
import wrx4Logo from "../../../../assets/images/wrx4_logo.svg";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import fonts from "../../../../styles/fonts.module.scss";

// External components
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// Internal components
import SectionContainer from "../../../../components/layout/sectionContainer/sectionContainer";

// Images & icons
import Portada from "../../../../assets/images/portada-web.jpg";

const HomeSection = (props) => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <SectionContainer
      containerStyle={{
        minHeight: "100vh",
        backgroundImage: `url(${Portada})`,
        marginBottom: 0,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      spacing={0}
    >
      <Grid
        item
        xs={12}
        style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh" }}
      >
        <img src={wrx4Logo} style={{ marginBottom: 16, maxWidth: 322 }} alt="img-2" />
        <Typography
          variant="h1"
          color="textPrimary"
          style={{ fontSize: isMdUp ? 48 : 32, fontWeight: "Regular", marginBottom: theme.spacing(2) }}
        >
          VIVE TU PROPIA AVENTURA
        </Typography>
        <Typography
          variant="h2"
          color="textPrimary"
          style={{ fontFamily: fonts.paragraphFont, fontSize: isMdUp ? 24 : 20, fontWeight: "SemiBold" }}
        >
          Accesorios para vehículos off-road
        </Typography>
      </Grid>
    </SectionContainer>
  );
};

HomeSection.propTypes = {};

export default HomeSection;
