// Utils & Config
import React from "react";
import PropTypes from "prop-types";

// External components
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core";

const CustomTextMontserrat = (props) => {
  const { palette } = useTheme();
  return (
    <Typography align={props.textAlign || "left"} style={{ color: palette.fourthColor, ...props.style }}>
      {props.text}
    </Typography>
  );
};

CustomTextMontserrat.propTypes = {
  textAlign: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  style: PropTypes.object,
};

export default CustomTextMontserrat;
