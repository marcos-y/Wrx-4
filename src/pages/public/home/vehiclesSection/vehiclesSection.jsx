// Utils & config
import React from "react";

// External components
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// Internal components
import SectionContainer from "../../../../components/layout/sectionContainer/sectionContainer";
import SectionTitle from "../../../../components/atoms/sectionTitle/sectionTitle";
import VehicleCard from "./vehicleCard/vehicleCard";
import { useTheme } from "@material-ui/core";

// Images & icons
import suzukiImage from "../../../../assets/images/auto-suzuki.jpg";
import hyundaiImage from "../../../../assets/images/auto-hyundai.jpg";

const VehiclesSection = (props) => {
  const theme = useTheme();
  return (
    <SectionContainer containerStyle={{ paddingBottom: theme.spacing(10), paddingTop: theme.spacing(10), marginBottom: 0 }}>
      <Grid item xs={12} style={{ paddingTop: "0px", paddingBottom: "0px" }}>
        <SectionTitle>CUSTOMIZE SU VEHÍCULO</SectionTitle>
      </Grid>
      <Grid item xs={12} style={{ marginBottom: theme.spacing(6), paddingTop: "0px", paddingBottom: "0px" }}>
        <Typography color="textSecondary" style={{ maxWidth: 768, margin: "auto" }}>
          ¡Entra en el simulador, pon los accesorios que más te gusten y enséñales tu nueva preparación a tus amigos off-roaders!
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <VehicleCard
          cardTitle="SUZUKI JIMNY JB74"
          vehicleDescription="¡La leyenda continúa! Llega más lejos que nunca con tu Suzuki Jimny y nuestros accesorios."
          vehicleBrand="Suzuki"
          imageUrl={suzukiImage}
        />
      </Grid>
      <Grid item xs={12}>
        <VehicleCard
          inverted
          cardTitle="HYUNDAI H1"
          vehicleDescription="Ahora puedes hacer todo lo que siempre has soñado gracias a la preparación específica para tú vehículo. ¡Descúbrela!"
          vehicleBrand="H1"
          imageUrl={hyundaiImage}
        />
      </Grid>
    </SectionContainer>
  );
};

VehiclesSection.propTypes = {};

export default VehiclesSection;
