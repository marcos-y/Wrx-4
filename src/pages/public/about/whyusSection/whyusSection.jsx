// Utils & config
import React from "react";

//External components
import Grid from "@material-ui/core/Grid";

//Internal components
import AvatarCard from "../../../../components/molecules/avatarCard/avatarCard";
import Title from "../../../../components/atoms/title/title";

const WhyusSection = () => {
  const info1 = {
    title: "CALIDAD",
    description: "Desde nuestros proveedores hasta nuestro profesionalizado equipo, todo esta cuidadosamente... ",
  };
  const info2 = {
    title: "EXPERIENCIA",
    description: "Mas de 30 años en el sector y 5000 coches preparados nos avalan como empresa referente en el sector.",
  };
  const info3 = {
    title: "DEDICACION",
    description: "Nuestros trabajadores mas veteranos han organizado eventos, han participado en competiciones... ",
  };

  return (
    <div style={{ maxWidth: "900px", margin: "auto" }}>
      <Title title="¿POR QUÉ NOSOTROS?"></Title>
      <Grid
        container
        spacing={1}
        style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", flexWrap: "wrap" }}
      >
        <Grid item xs={12} md={4}>
          <AvatarCard info={info1}></AvatarCard>
        </Grid>
        <Grid item xs={12} md={4}>
          <AvatarCard info={info2}></AvatarCard>
        </Grid>
        <Grid item xs={12} md={4}>
          <AvatarCard info={info3}></AvatarCard>
        </Grid>
      </Grid>
    </div>
  );
};

export default WhyusSection;
