// Utils & Config
import React from "react";
import PropTypes from "prop-types";
import { withStyles, useTheme } from "@material-ui/core/styles";

// External components
import TextField from "@material-ui/core/TextField";

const CustomTextfield = withStyles((theme) => ({
  root: {
    "& label.Mui-focused": {
      color: theme.palette.fifthColor,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme.palette.firstColor,
      },
      "&:hover fieldset": {
        borderColor: theme.palette.fifthColor,
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.fifthColor,
      },
    },
  },
}))(TextField);

const CustomInput = (props) => {
  const { palette } = useTheme();

  return (
    <CustomTextfield
      name={props.name}
      label={props.label}
      variant={props.variant}
      placeholder={props.placeholder}
      color="blue"
      value={props.value}
      onChange={props.onChange}
      error={props.error && props.value}
      InputLabelProps={{ style: { color: palette.fourthColor } }}
      InputProps={{ style: { color: palette.fourthColor, backgroundColor: palette.secondaryColor } }}
      helperText={props.error ? props.errorMessage : ""}
      fullWidth={props.fullWidth}
      type={props.type}
      FormHelperTextProps={{
        style: { backgroundColor: "transparent" },
        error: true,
      }}
    />
  );
};

CustomInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
};

export default CustomInput;
