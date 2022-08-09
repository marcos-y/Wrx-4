// Utils & config
import React from "react";
import { useTheme } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import fonts from "../../../../styles/fonts.module.scss";

//External components
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

//Internal components
import SectionContainer from "../../../../components/layout/sectionContainer/sectionContainer";
import AccesoriesCarousel from "../../home/accesoriesSection/accesoriesCarousel/accesoriesCarousel";
import MobileAccesoriesCarousel from "../../home/accesoriesSection/mobileAccesoriesCarousel/mobileAccesoriesCarousel";

const accesories = [
  {
    name: "PARACHOQUES",
    description: "Diseñados siguiendo la línea WRX4, nuestros parachoques te ofrecen unas prestaciones inigualables con la máxima calidad.",
  },
  {
    name: "BACAS",
    description: "Te ofrecemos unas bacas únicas y rígidas, gracias a los ensayos realizados en potentes programas de FEA.",
  },
  {
    name: "ESTRIBERAS",
    description: "Hechas en perfil tubular de acero, garantizan un acceso cómodo a la hora de acceder a tu vehículo.",
  },
  { name: "ROCKSLIDERS", description: "Máxima resistencia y seguridad garantizada gracias a su perfil de 3 milímetros de acero." },
  {
    name: "PORTECCIONES DE BAJOS",
    description: "Nuestra amplia gama de protecciones ofrecen la máxima seguridad a tus componentes más vitales.",
  },
  {
    name: "ESCALERAS",
    description: "Con un diseño totalmente innovador, te permitirán llevar contigo todo lo necesario para tus experiencias off-road.",
  },
  {
    name: "BANDEJAS",
    description: "Concebidas para acoplar una amplia gama de neveras, nuestras bandejas ajustables ofrecen la máxima rigidez.",
  },
  { name: "MESAS", description: "Nuestras mesas desplegables, hechas en acero, te ofrecen numerosas funcionalidades. ¡Descúbrelas!" },
];

const FindAccesoriesSection = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <Box style={{ backgroundColor: theme.palette.background.primary }} paddingY={8}>
        <SectionContainer spacing={1} maxWidth="lg" containerStyle={{ marginBottom: 0 }}>
          <Grid item xs={12}>
            <Typography
              align="left"
              color="textPrimary"
              style={{ marginBottom: theme.spacing(8), fontFamily: fonts.titleFont, fontSize: isMdUp ? 24 : 24 }}
            >
              DESCUBRE NUESTROS ACCESORIOS
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <AccesoriesCarousel accesories={accesories} />
          </Grid>
          <MobileAccesoriesCarousel accesories={accesories} />
          {/* {accesories.map((accesory, index) => (
          <Grid item xs={12} md={6}>
            <AccessoryCard key={index} accesory={accesory} />
          </Grid>
        ))} */}
        </SectionContainer>
      </Box>
    </>
  );
};

export default FindAccesoriesSection;
