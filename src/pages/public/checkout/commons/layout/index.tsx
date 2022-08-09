import React, { FC } from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    paddingLeft: "12%",
    paddingRight: "12%",
    margin: "0 auto",
    minHeight: "50vh",
    background: "#171717",

    [theme.breakpoints.down("md")]: {
      paddingLeft: "18px",
      paddingRight: "18px",
    },
  },
}));

const Layout: FC = (props) => {
  const classes = useStyles();
  return <div className={classes.root}>{props.children}</div>;
};

export default Layout;
