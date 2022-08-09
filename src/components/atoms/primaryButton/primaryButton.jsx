import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(0.25),
    marginBottom: theme.spacing(0.25),
    // marginRight: theme.spacing(1),
    // marginLeft: theme.spacing(1),
    backgroundColor: theme.palette.fourthColor,
    color: theme.palette.firstColor,
  },
}));

const PrimaryButton = (props) => {
  const classes = useStyles();

  return (
    <Button className={classes.button} variant="contained" disableElevation onClick={props.onClick}>
      {props.text}
    </Button>
  );
};

export default PrimaryButton;

PrimaryButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
