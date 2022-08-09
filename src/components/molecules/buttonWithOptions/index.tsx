import React, { MouseEvent, FC } from "react";

import { makeStyles } from "@material-ui/core";
import { LocalShipping, CreditCard, SyncAlt } from "@material-ui/icons/";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    color: "white",
    border: "none",
    outline: "none",
    display: "flex",
    cursor: "pointer",
    margin: "18px 6px",
    fontWeight: "bold",
    alignItems: "center",
    padding: "24px 54px",
    background: "#3C3C3C",
    flexDirection: "column",
    justifyContent: "center",
    textTransform: "uppercase",
    height: 110,

    [theme.breakpoints.down("sm")]: {
      margin: 12,
      padding: 18,
    },
  },

  selected: {
    background: "#5EBC00",
  },

  title: {
    margin: 6,
  },
}));

interface IProps {
  title: string;
  subtitle?: string;
  selected: boolean;
  icon: "car" | "transfer" | "payment-card";
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

const ButtonWithOptions: FC<IProps> = (props) => {
  const classes = useStyles();

  return (
    <button className={`${classes.root} ${props.selected && classes.selected}`} onClick={props.onClick}>
      {props.icon === "transfer" && <SyncAlt fontSize="large" />}
      {props.icon === "car" && <LocalShipping fontSize="large" />}
      {props.icon === "payment-card" && <CreditCard fontSize="large" />}

      <p className={classes.title}>{props.title}</p>
      <small>{props.subtitle}</small>
    </button>
  );
};

export default ButtonWithOptions;
