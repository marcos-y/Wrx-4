// Utils & config
import React from "react";
import { useTheme } from "@material-ui/core";

//Internal components
import NavbarBackground from "../../../components/molecules/navbarBackground/navbarBackground";
import Footer from "../home/footer/footer";
import AccesoryCards from "./accesoryCards/accesoryCards";
import WhyUs from "../about/whyusSection/whyusSection";
import WorkSection from "../accesories/workSection/workSection";
import CustomizeSection from "../accesories/customizeSection/customizeSection";
import FindAccesoriesSection from "../accesories/findAccesories/findAccesories";
import Title from "../../../components/atoms/title/title";

//External components
import Container from "@material-ui/core/Container";

const Accesories = () => {
  const theme = useTheme();

  return (
    <>
      <NavbarBackground title={"ACCESORIOS"} />

      <Container
        maxWidth="lg"
        style={{ marginTop: theme.spacing(3), marginBottom: theme.spacing(8), backgroundColor: theme.palette.background }}
      >
        <AccesoryCards />
        <FindAccesoriesSection />
        <CustomizeSection />
        <WhyUs />
        <div style={{ marginTop: theme.spacing(16) }}>
          <Title title="CÓMO TRABAJAMOS"></Title>
          <WorkSection inverted={false} title={text1.title} paragraph={text1.text}></WorkSection>
          <WorkSection inverted={true} title={text2.title} paragraph={text2.text}></WorkSection>
          <WorkSection inverted={false} title={text3.title} paragraph={text3.text}></WorkSection>
        </div>
      </Container>

      <Footer />
    </>
  );
};

export default Accesories;

const text1 = {
  title: "TODO COMIENZA EN NUESTRAS OFICINAS DE I+D",
  text: "Nuestra amplia experiencia en el sector junto con nuestro departamento de diseño de producto, nos permite realizar unos diseños revolucionarios. Para ello, nuestras oficinas cuentan con equipos de última generacion que nos permiten realizar los diseños de tus accesorios con los programas de CAD más potentes del mercado ",
};
const text2 = {
  title: "LA SIGUIENTE FASE ES LA DE CORTE A LÁSER",
  text: "Una vez diseñados tus accesorios, estos se envían a cortar a láser. Este método de corte nos ofrece unas precisiones máximas y unas tolerancias muy ajustadas, garantizándote la máxima calidad en toda la gama de productos.",
};
const text3 = {
  title: "EL PROCESO DE FABRICACION TERMINA EN NUESTRO DEPARTAMENTO DE SOLDADURA",
  text: "Nuestro equipo técnico, compuesto por personal altamente experimentado, une, pinta y realiza los toques finales de todos tus accesorios de forma totalmente artesanal para darles ese toque único y personal que nos definen como empresa referente en el sector del 4x4.",
};
