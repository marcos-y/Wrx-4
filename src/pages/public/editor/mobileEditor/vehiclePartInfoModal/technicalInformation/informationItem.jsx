// Utils & config
import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core";

// External components
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

// Internal components

const InformationItem = (props) => {
  const { palette } = useTheme();

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      paddingY={1}
      paddingX={2}
      borderTop="2px solid"
      borderColor={palette.background.primary}
    >
      <Typography variant="body1" style={{ fontWeight: "Bold" }}>
        {props.title}
      </Typography>
      <Typography variant="body1" align="left">
        {props.value}
      </Typography>
    </Box>
  );
};

InformationItem.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default InformationItem;
