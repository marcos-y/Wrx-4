// Utils & config
import React from "react";
import PropTypes from "prop-types";

// External components
import Box from "@material-ui/core/Box";

// Internal components
import InstructionItem from "./instructionItem/instructionItem";

const Instructions = (props) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="flex-start">
      {props.instructions.map((instruction, index) => (
        <InstructionItem key={index} instruction={instruction} />
      ))}
    </Box>
  );
};

Instructions.propTypes = {
  instructions: PropTypes.array.isRequired,
};

export default Instructions;
