import React from "react";
import PropTypes from "prop-types";

// External components
import Button from "@material-ui/core/Button";

const ProcessButton = (props) => {
  return (
    <Button
      variant="contained"
      color="primary"
      fullWidth
      onClick={props.onClick}
      style={{ minHeight: 48, backgroundColor: props.backgroundColor }}
    >
      {props.text}
    </Button>
  );
};

ProcessButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

export default ProcessButton;
