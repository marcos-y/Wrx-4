// Utils & config
import React from "react";
import { useTheme } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

// External components
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

// Internal components
import SectionContainer from "../../../../components/layout/sectionContainer/sectionContainer";
import SectionTitle from "../../../../components/atoms/sectionTitle/sectionTitle";
import InfoList from "./infoList/infoList";
import AccesoriesCarousel from "./accesoriesCarousel/accesoriesCarousel";
import MobileAccesoriesCarousel from "./mobileAccesoriesCarousel/mobileAccesoriesCarousel";

const AccesoriesSection = (props) => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box style={{ backgroundColor: theme.palette.background.secondary }} paddingY={8}>
      <SectionContainer spacing={2} maxWidth="lg" containerStyle={{ marginBottom: 0 }}>
        <Grid item xs={12}>
          <SectionTitle>CONOCE NUESTROS ACCESORIOS</SectionTitle>
        </Grid>
        {isMdUp && (
          <Grid item xs={12} style={{ marginBottom: theme.spacing(2) }}>
            <InfoList />
          </Grid>
        )}
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
  );
};

AccesoriesSection.propTypes = {};

export default AccesoriesSection;

const accesories = [
  {
    name: "PARACHOQUES",
    description: "Diseñados siguiendo la línea WRX4, nuestros parachoques te ofrecen unas prestaciones inigualables con la máxima calidad.",
  },
  {
    name: "BACAS",
    description: "Te ofrecemos unas bacas únicas y rígidas, gracias a los ensayos realizados en potentes programas de FEA.",
  },
  { name: "ESTRIBERAS", description: "Hechas en perfil tubular de acero, garantizan un acceso cómodo a la hora de acceder a tu vehículo." },
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
