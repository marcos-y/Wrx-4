// Utils & config
import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";

// External components
import FilledInput from "@material-ui/core/FilledInput";

// Internal components

const useStyles = makeStyles((theme) => ({
  filledRoot: {
    borderRadius: 0,
    backgroundColor: theme.palette.background.quaternary,
    "&:hover": {
      backgroundColor: theme.palette.background.quaternary,
    },
    "&:focused": {
      backgroundColor: "red",
    },
  },

  input: {
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`,
  },
}));

const PhoneNumberInput = (props) => {
  const classes = useStyles();

  return (
    <FilledInput
      disableUnderline
      classes={{ root: classes.filledRoot, input: classes.input, focused: classes.filledRoot }}
      style={{ width: 216 }}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
  );
};

PhoneNumberInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default PhoneNumberInput;
