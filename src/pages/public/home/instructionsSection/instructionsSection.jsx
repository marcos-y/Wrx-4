/* eslint-disable no-useless-concat */

// Utils & config
import React from "react";

// External components
import Grid from "@material-ui/core/Grid";

// Internal components
import SectionContainer from "../../../../components/layout/sectionContainer/sectionContainer";
import SectionTitle from "../../../../components/atoms/sectionTitle/sectionTitle";
import Instructions from "./instructions/instructions";

const InstructionsSection = (props) => {
  return (
    <SectionContainer maxWidth="lg">
      <Grid item xs={12}>
        <SectionTitle>¡TOMA EL CONTROL!</SectionTitle>
      </Grid>

      <Grid item xs={12} md={7}>
        {/* TO DO: Agregar video */}
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/KjdB8XK8xXw"
          title="Video WRX4"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Grid>
      <Grid item xs={12} md={5}>
        <Instructions instructions={instructionsArray} />
      </Grid>
    </SectionContainer>
  );
};

InstructionsSection.propTypes = {};

export default InstructionsSection;

const instructionsArray = [
  {
    iconName: "list_alt",
    title: "GUIAS SENCILLAS",
    text: "Todos nuestros paquetes incluyen unas instrucciones claras y concisas para que te coloques tus accesorios.",
  },
  {
    iconName: "personal_video",
    title: "VIDEOS EXPLICATIVOS",
    text: "Nuestro equipo te ayudará en la tarea del montaje con unos vídeos explicativos.",
  },
  {
    iconName: "videocam_outlined",
    title: "SOPORTE POR VIDEOLLAMADA",
    text: "¿Te ha surgido algún problema en el proceso de montaje?" + "\n" + "¡Te lo solucionamos de forma personalizada!",
  },
];
