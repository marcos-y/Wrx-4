// Utils & config
import React from "react";
import { useTheme } from "@material-ui/core";

//External components
import Grid from "@material-ui/core/Grid";

//Internal components
import ImageCard from "../../../../components/molecules/imageCard/imageCard";
import img from "../../../../assets/images/navbarBackgroundImg.png";
import Title from "../../../../components/atoms/title/title";

const WorkSection = () => {
  const theme = useTheme();

  const info1 = {
    title: "TODO EMPIEZA EN NUESTRAS OFICINAS DE I+D...",
    description:
      "Nuestra amplia experiencia en el sector, junto con nuestro departamento de diseño de producto, nos permite relalizar unos diseños revolucionarios. Para ello, nuestras oficinas cuantan con equipos de ultima generacion que nos permiten realizar los diseños de tus accesorios con los programas de CAD mas potentes del mercado",
    backgroundcolor: theme.palette.background.default,
    image: { img },
  };
  const info2 = {
    title: "LA SIGUIENTE FASE ES LA DEL CORTE LÁSER...",
    description:
      "Una vez diseñados tus accesorios, estos se envían a cortar a láser. Este método de corte nos ofrece unas precisiones máximas y unas tolerancias muy ajustadas, garantizándote la máxima calidad en toda la gama de productos",
    backgroundcolor: theme.palette.background.default,
  };
  const info3 = {
    title: "EL PROCESO DE FABRICACIÓN TERMINA EN NUESTRO DEPARTAMENTO DE SOLDADURA...",
    description:
      "Nuestro equipo técnico, compuesto por personal altamente experimentado,une,pinta y realiza los toques finales de todos tus accesorios de forma totalmente artesanal para darles ese toque único y personal que nos define como empresa referente en el sector 4x4",
    backgroundcolor: theme.palette.background.default,
  };

  return (
    <div style={{ marginTop: theme.spacing(16) }}>
      <Title title="CÓMO TRABAJAMOS"></Title>

      <Grid container spacing={2}>
        <Grid xs={12} sm={4}>
          <ImageCard info={info1} marginLeft="0px"></ImageCard>
        </Grid>
        <Grid xs={12} sm={4}>
          <ImageCard info={info2} marginLeft="0px"></ImageCard>
        </Grid>
        <Grid xs={12} sm={4}>
          <ImageCard info={info3} marginLeft="0px"></ImageCard>
        </Grid>
      </Grid>
    </div>
  );
};

export default WorkSection;
