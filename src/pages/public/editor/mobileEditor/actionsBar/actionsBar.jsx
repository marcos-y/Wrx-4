// Utils & config
import React from "react";
import PropTypes from "prop-types";

// External components
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";

// Internal components

// Images & Icons
import FullScreenIcon from "@material-ui/icons/Fullscreen";

const ActionsBar = (props) => {
  return (
    <Box
      id="actionBarContainer"
      display="flex"
      position="fixed"
      flexDirection="column"
      justifyContent={props.fullScreen ? "flex-end" : "center"}
      right="0"
      style={{ height: "100%", paddingBottom: 16 }}
    >
      <IconButton onClick={props.handleFullScren}>
        <FullScreenIcon />
      </IconButton>
    </Box>
  );
};

ActionsBar.propTypes = {
  handleFullScren: PropTypes.func.isRequired,
  fullScreen: PropTypes.bool.isRequired,
};

export default ActionsBar;
