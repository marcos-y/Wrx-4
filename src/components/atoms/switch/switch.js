// Utils & Config
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";

// External components
import Switch from "@material-ui/core/Switch";

// Internal components

const CustomSwitch = withStyles((theme) => ({
  root: {
    width: 48,
    height: 22,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    "&$checked": {
      transform: "translateX(22px)",
      color: theme.palette.common.white,
      "& + $track": {
        backgroundColor: "#52d869",
        opacity: 1,
        border: "none",
      },
    },
    "&$focusVisible $thumb": {
      color: "#52d869",
      border: "6px solid #fff",
    },
  },
  thumb: {
    width: 20,
    height: 20,
  },
  track: {
    borderRadius: 26 / 2,
    // border: `1px solid ${theme.palette.grey[400]}`,
    // backgroundColor: theme.palette.grey[50],
    backgroundColor: "#f44336",
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"]),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      checked={props.value}
      onChange={() => props.setValue(!props.value)}
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

CustomSwitch.propTypes = {
  value: PropTypes.bool.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default CustomSwitch;
