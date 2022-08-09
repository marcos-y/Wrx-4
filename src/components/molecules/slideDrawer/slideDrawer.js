// Utils & Config
import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core";

// External components
import Drawer from "@material-ui/core/Drawer";

// Internal components

function SlideDrawer(props) {
  const { palette } = useTheme();
  return (
    <Drawer
      anchor="right"
      open={props.opened}
      onClose={props.onClose}
      PaperProps={{ style: { width: "35%", backgroundColor: palette.secondColor, color: palette.fourthColor } }}
      transitionDuration={500}
    >
      {props.children}
    </Drawer>
  );
}

SlideDrawer.propTypes = {
  opened: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SlideDrawer;
