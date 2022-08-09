import { makeStyles } from "@material-ui/core";
import React, { FC, CSSProperties, ChangeEvent } from "react";

interface IProps {
  label: string;
  value: string;
  maxWidth?: boolean;
  placeholder?: string;
  style?: CSSProperties;
  error?: string | false;
  type?: "text" | "number" | "password";
  onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: ChangeEvent<HTMLInputElement>) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    boxSizing: "border-box",
    alignItems: "flex-start",
    flexDirection: "column",
    margin: theme.spacing(1),

    [theme.breakpoints.down("md")]: {
      margin: 0,
    },
  },

  label: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },

  p: {
    margin: "3px 0",
    textAlign: "left",
  },

  input: {
    padding: 12,
    fontSize: 18,
    color: "white",
    border: "none",
    outline: "none",
    background: "#2F2F2F",
  },

  inputError: {
    margin: 3,
    color: "transparent",
    textTransform: "lowercase",
    opacity: "0",
  },

  active: {
    opacity: "1",
    color: "#D60000",
  },
}));

const Input: FC<IProps> = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ width: props.maxWidth ? "100%" : "auto" }}>
      <label className={classes.label}>
        <p className={classes.p}>{props.label}</p>

        <input
          type={props.type}
          style={props.style}
          value={props.value}
          onBlur={props.onBlur}
          onFocus={props.onFocus}
          className={classes.input}
          onChange={props.onChange}
          placeholder={props.placeholder}
        />
      </label>

      <small className={`${classes.inputError} ${props.error && classes.active}`}>{props.error || "..."}</small>
    </div>
  );
};

export default Input;
