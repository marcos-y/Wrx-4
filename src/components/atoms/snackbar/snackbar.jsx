// Utils & Config
import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

// External Components
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

// There are classes defined in App.css that apply to this component

const Alert = (props) => {
  return <MuiAlert elevation={1} variant="filled" {...props} />;
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const Snackbars = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Snackbar
        open={props.open}
        autoHideDuration={3000}
        onClose={props.handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={props.handleClose} severity={props.type} style={{ textAlign: "left" }}>
          {props.text}
        </Alert>
      </Snackbar>
    </div>
  );
};

Snackbars.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Snackbars;
