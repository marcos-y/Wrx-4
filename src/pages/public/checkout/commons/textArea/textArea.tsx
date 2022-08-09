import { makeStyles } from "@material-ui/core";
import React, { FC, CSSProperties, ChangeEvent } from "react";

interface IProps {
  label: string;
  value: string;
  maxWidth?: boolean;
  placeholder?: string;
  style?: CSSProperties;
  onBlur?: (e: ChangeEvent<any>) => void;
  onFocus?: (e: ChangeEvent<any>) => void;
  onChange: (e: ChangeEvent<any>) => void;
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
    fontSize: 14,
    color: "white",
    border: "none",
    outline: "none",
    resize: "none",
    background: "#2F2F2F",
  },
}));

const TextArea: FC<IProps> = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ width: props.maxWidth ? "100%" : "auto" }}>
      <label className={classes.label}>
        <p className={classes.p}>{props.label}</p>

        <textarea
          rows={5}
          style={props.style}
          value={props.value}
          onBlur={props.onBlur}
          onFocus={props.onFocus}
          className={classes.input}
          onChange={props.onChange}
          placeholder={props.placeholder}
        />
      </label>
    </div>
  );
};

export default TextArea;
