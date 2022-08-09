// Utils & config
import React from "react";
import { useTheme } from "@material-ui/core";

//External components
import Grid from "@material-ui/core/Grid";

//Internal components
import ImageCard from "../../../../components/molecules/imageCard/imageCard";
import Title from "../../../../components/atoms/title/title";

const TeamSection = () => {
  const theme = useTheme();

  const info1 = { title: "RAFAEL GRANDE", description: "Director General", backgroundcolor: theme.palette.background.secondary };
  const info2 = { title: "ALEX GRANDE", description: "Producción", backgroundcolor: theme.palette.background.secondary };
  const info3 = { title: "CHIMO", description: "Diseñador Industrial", backgroundcolor: theme.palette.background.secondary };
  const info4 = { title: "CARLOS", description: "Ingeniero Mecánico", backgroundcolor: theme.palette.background.secondary };

  return (
    <div style={{ marginTop: theme.spacing(16) }}>
      <Title title="CONOCE A NUESTRO EQUIPO"></Title>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
          <ImageCard info={info1} marginLeft="8px"></ImageCard>
        </Grid>
        <Grid item xs={12} sm={3}>
          <ImageCard info={info2} marginLeft="8px"></ImageCard>
        </Grid>
        <Grid item xs={12} sm={3}>
          <ImageCard info={info3} marginLeft="8px"></ImageCard>
        </Grid>
        <Grid item xs={12} sm={3}>
          <ImageCard info={info4} marginLeft="8px"></ImageCard>
        </Grid>
      </Grid>
    </div>
  );
};

export default TeamSection;
