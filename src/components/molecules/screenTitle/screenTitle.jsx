// Utils & Config
import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core";

// External components
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

// Internal components

const ScreenTitle = (props) => {
  const { palette } = useTheme();
  return (
    <Box display="flex" justifyContent="space-between">
      <Typography variant="h4" align="left" style={{ color: palette.fourthColor }}>
        {props.text}
      </Typography>
    </Box>
  );
};

ScreenTitle.propTypes = {
  text: PropTypes.string,
};

export default ScreenTitle;
