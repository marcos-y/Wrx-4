import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondColor,
    marginTop: theme.spacing(0.25),
    marginBottom: theme.spacing(0.25),
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
}));

const SecondaryButton = (props) => {
  const classes = useStyles();
  return (
    <Button className={classes.button} variant="outlined" onClick={props.onClick}>
      {props.text}
    </Button>
  );
};

SecondaryButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SecondaryButton;
