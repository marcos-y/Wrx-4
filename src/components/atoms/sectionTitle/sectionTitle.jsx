// Utils & config
import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core";

// External components
import Typography from "@material-ui/core/Typography";

// Internal components

const SectionTitle = (props) => {
  const theme = useTheme();

  return (
    <Typography
      variant="h2"
      color="textPrimary"
      align={props.align || "center"}
      style={{ fontSize: props.fontSize || 32, fontWeight: props.fontWeight || 400, ...props.style, marginBottom: theme.spacing(2) }}
    >
      {props.children}
    </Typography>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  align: PropTypes.string,
  fontSize: PropTypes.number,
};

export default SectionTitle;
