// Utils & config
import React from "react";
import { useTheme } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";

// External components
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

// Internal components
import SectionContainer from "../../../../components/layout/sectionContainer/sectionContainer";
import SocialIcons from "../../../../components/molecules/socialIcons/socialIcons";
import FooterLinks from "./footerLinks/footerLinks";
import ContactData from "./contactData/contactData";

// Icons & images
import wrx4logo from "../../../../assets/images/wrx4_logo.svg";

const Footer = (props) => {
  const theme = useTheme();
  const isMdUp = useMediaQuery("(min-width:960px)");

  return (
    <Box style={{ backgroundColor: theme.palette.background.tertiary }}>
      <SectionContainer maxWidth="lg" containerStyle={{ marginBottom: 0, padding: "64px 16px 24px 16px" }}>
        <Grid item xs={12} md={3}>
          <img
            src={wrx4logo}
            alt="wrx4offroad"
            style={{ display: "flex", maxWidth: 184, margin: isMdUp ? "0px auto 0px 0px" : "0px auto" }}
          />
          <SocialIcons />
          <ContactData />
        </Grid>
        <Grid item xs={6} md={3}>
          <FooterLinks title="ACCESORIOS" links={accesoriosLinks} />
        </Grid>
        <Grid item xs={6} md={3}>
          <FooterLinks title="VEHICULOS" links={vehiculosLinks} />
        </Grid>
        <Grid item xs={6} md={3}>
          <FooterLinks title="INSTITUCIONAL" links={institucionalLinks} />
        </Grid>
        <Grid item style={{ width: "100%" }}>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <Typography align="left" color="textSecondary" variant="body2" style={{ fontSize: "13px" }}>
              WRX4 2021 © Todos los derechos reservados
            </Typography>
            <img alt="img-1" style={{ height: "48px" }} src="https://app-festival.sienawards.com/img/payment/stripe-safe-payment.png" />
          </div>
        </Grid>
      </SectionContainer>
    </Box>
  );
};

Footer.propTypes = {};

export default Footer;

const accesoriosLinks = [
  { title: "Estriberas", url: "/accesorios?categoria=estriberas" },
  { title: "Rocksliders", url: "/accesorios?categoria=rocksliders" },
  { title: "Protecciones", url: "/accesorios?categoria=protecciones" },
  { title: "Escaleras", url: "/accesorios?categoria=escaleras" },
  { title: "Bandejas", url: "/accesorios?categoria=bandejas" },
  { title: "Mesas", url: "/accesorios?categoria=mesas" },
];
const vehiculosLinks = [
  { title: "Suzuki Jimny JB74", url: "/editor?vehicleId=1" },
  { title: "Hyundai H1", url: "/editor?vehicleId=1" },
];
const institucionalLinks = [
    { title: "Sobre nosotros", url: "/acercade" },
    { title: "Contacto", url: "/contacto" },
    { title: "Cómo comprar" },
    { title: "Términos y condiciones" },
];
