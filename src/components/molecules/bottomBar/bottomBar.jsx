// Utils & Config
import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

// External components
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

// Internal components
import ProcessButton from "../../atoms/processButton/processButton";

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: "auto",
    minHeight: 68,
    bottom: 0,
    backgroundColor: theme.palette.secondColor,
  },
}));

const BottomBar = (props) => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <Toolbar style={{ height: 68, alignItems: "center" }}>
        <ProcessButton text={props.buttonText} onClick={props.onButtonClick} />
      </Toolbar>
    </AppBar>
  );
};

BottomBar.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default BottomBar;
