import React, { FC } from "react";

import { Drawer, Button } from "@material-ui/core/";
import ArrowBack from "@material-ui/icons/ArrowBack";
import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = "100%";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    flexShrink: 0,
    width: drawerWidth,
    maxWidth: "70vw",
    overflowX: "hidden",
    [theme.breakpoints.down("md")]: {
      maxWidth: "100vw",
    },
  },

  drawerPaper: {
    width: drawerWidth,
    overflowX: "hidden",
    background: "#171717",
    [theme.breakpoints.down("md")]: {
      maxWidth: "100vw",
    },

    margin: 0,
    minHeight: "100vh",
    position: "static",
  },

  drawerHeader: {
    display: "flex",
    ...theme.mixins.toolbar,
    padding: theme.spacing(0, 1),
  },
}));

interface IProps {
  backTitle: string;
  handleBackTitle: () => void;
}

const MainCheckout: FC<IProps> = (props) => {
  const classes = useStyles();

  return (
    <Drawer
      open
      anchor="left"
      variant="permanent"
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <Button
          color="default"
          variant="outlined"
          startIcon={<ArrowBack />}
          onClick={props.handleBackTitle}
          style={{ borderWidth: 0, fontSize: "18px" }}
        >
          {props.backTitle}
        </Button>
      </div>

      <main>{props.children}</main>
    </Drawer>
  );
};

export default MainCheckout;
