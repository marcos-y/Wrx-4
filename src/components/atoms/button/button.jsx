// Utils & config
import React from "react";
import PropTypes from "prop-types";
import fonts from "../../../styles/fonts.module.scss";

// External components
import Button from "@material-ui/core/Button";

const CustomButton = (props) => {
  return (
    <Button
      variant={props.variant}
      color={props.color}
      style={{ borderRadius: 0, fontFamily: fonts.paragraphFont, ...props.style }}
      fullWidth={props.fullWidth}
      onClick={props.onClick}
      startIcon={props.startIcon || ""}
      endIcon={props.endIcon || ""}
    >
      {props.children}
    </Button>
  );
};

CustomButton.propTypes = {
  variant: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  style: PropTypes.object,
  onClick: PropTypes.func.isRequired,
  fullWidth: PropTypes.bool.isRequired,
  startIcon: PropTypes.any,
  endIcon: PropTypes.any,
};

export default CustomButton;
