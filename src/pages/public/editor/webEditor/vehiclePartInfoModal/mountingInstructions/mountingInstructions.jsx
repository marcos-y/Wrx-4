// Utils & config
import React from "react";
import PropTypes from "prop-types";

// External components
import Grid from "@material-ui/core/Grid";

// Internal components
import Button from "../../../../../../components/atoms/button/button";
import InstructionItem from "./instructionItem";

const MountingInstructions = (props) => {
  const handleInstructionsDownload = () => {};

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        {props.instructions.map((instruction, index) => (
          <InstructionItem key={index} stepNumber={index + 1} text={instruction} />
        ))}
      </Grid>
      <Grid item xs={12} style={{ display: "flex", alignItems: "center" }} justify="center">
        <a href={props.instructionsFileUrl} download style={{ textDecoration: "none" }}>
          <Button onClick={handleInstructionsDownload}>DESCARGAR INSTRUCCIONES</Button>
        </a>
      </Grid>
    </Grid>
  );
};

MountingInstructions.propTypes = {
  instructions: PropTypes.arrayOf(PropTypes.string).isRequired,
  instructionsFileUrl: PropTypes.string,
};

export default MountingInstructions;
