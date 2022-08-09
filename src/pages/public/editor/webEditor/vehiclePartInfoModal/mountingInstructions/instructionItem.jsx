// Utils & config
import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core";

// External components
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

// Internal components

const InformationItem = (props) => {
  const { palette } = useTheme();

  return (
    <Box display="flex" alignItems="center" marginBottom={2}>
      <Step
        key={props.stepNumber}
        style={{
          marginRight: 8,
          borderRadius: 50,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: palette.background.tertiary,
          fontWeight: "Bold",
          height: 32,
          width: 32,
          textAlign: "center",
        }}
        completed={false}
      >
        <StepLabel>{props.stepNumber}</StepLabel>
      </Step>
      <Typography variant="body1">{props.text}</Typography>
    </Box>
  );
};

InformationItem.propTypes = {
  stepNumber: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default InformationItem;
