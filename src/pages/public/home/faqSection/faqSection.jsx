// Utils & config
import React from "react";
import { useTheme } from "@material-ui/core";

// External components
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// Internal components
import SectionContainer from "../../../../components/layout/sectionContainer/sectionContainer";
import SectionTitle from "../../../../components/atoms/sectionTitle/sectionTitle";
import FaqAccordion from "../../../../components/molecules/faqAccordion/faqAccordion";

const FaqSection = (props) => {
  const theme = useTheme();

  return (
    <SectionContainer spacing={4} maxWidth="md">
      <Grid item xs={12} style={{ paddingTop: "0px", paddingBottom: "0px" }}>
        <SectionTitle>PREGUNTAS FRECUENTES</SectionTitle>
      </Grid>
      <Grid item xs={12} style={{ marginBottom: theme.spacing(3), paddingTop: "0px", paddingBottom: "0px" }}>
        <Typography color="textPrimary">
          ¿Tienes alguna duda? Aquí tienes una recopilación de preguntas y respuestas que pueden ayudarte a resolverla.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        {questions.map((question, index) => (
          <FaqAccordion key={index} question={question.question} answer={question.answer} />
        ))}
      </Grid>
    </SectionContainer>
  );
};

FaqSection.propTypes = {};

export default FaqSection;

const questions = [
  {
    question: "¿Que es un grupo de compra y cuáles son sus beneficios?",
    answer:
      "Los grupos de compra están formados por un número mínimo de off-roaders que tienen el mismo vehículo 4x4, y que desean añadirle nuevos accesorios personalizados. Involúcrate en el diseño, consigue promociones únicas y recibe actualizaciones diarias del proceso de fabricación de los accesorios.",
  },
  {
    question: "¿QUE PASA SI MI ACCESORIO NO ESTÁ EN STOCK?",
    answer:
      "¡No te preocupes! Realiza tu pedido pero ten en cuenta que será personalizado y que tardará más de lo habitual en llegarte a casa, ya que tiene que pasar por todo el proceso de fabricación.",
  },
  {
    question: "¿PUEDO CONSEGUIR UNA HOMOLOGACIÓN DE MI ACCESORIO?",
    answer:
      "Si, es más, nosotros podemos realizar la homologación si así lo deseas. Nuestro ingeniero podrá atenderte de forma personal y te mantendrá informado acerca de todas las actualizaciones del proceso de homologación.",
  },
  {
    question: "¿PUEDO MODIFICAR MIS ACCESORIOS?",
    answer:
      "Si ves que tu accesorio necesita una modificación para adecuarla a tu vehículo, contacta con nosotros y te ofreceremos un abanico de posibilidades, de las que tú podrás elegir la que mas se te acople a tus gustos.",
  },
];
