import React, { FC, MouseEvent, CSSProperties } from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: 16,
    border: "none",
    outline: "none",
    display: "flex",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
    padding: "6px 18px",
    alignItems: "center",
    background: "#D60000",
    margin: theme.spacing(1),
    justifyContent: "center",
    textTransform: "uppercase",
    maxWidth: 284,

    "&:disabled": {
      background: "gray",
      cursor: "not-allowed",
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: 14,
      padding: "6px 12px",
    },
  },

  secondary: {
    background: "transparent",
  },
}));

interface IProps {
  loading: boolean;
  disabled?: boolean;
  variant?: "primary" | "secondary";
  style?: CSSProperties;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<IProps> = (props) => {
  const classes = useStyles();
  return (
    <button
      onClick={props.onClick}
      className={`${classes.root} ${props.variant && props.variant === "secondary" ? classes.secondary : null} `}
      style={props.style}
      disabled={props.loading || props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
