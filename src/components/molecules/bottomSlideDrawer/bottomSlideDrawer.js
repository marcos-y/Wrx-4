import React from "react";
import PropTypes from "prop-types";
import Drawer from "@material-ui/core/Drawer";

function BottomSlideDrawer(props) {
  return (
    <Drawer anchor="bottom" open={props.opened} onClose={props.onClose} transitionDuration={500} onBackdropClick={props.onClose}>
      {props.children}
    </Drawer>
  );
}

BottomSlideDrawer.propTypes = {
  opened: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default BottomSlideDrawer;
