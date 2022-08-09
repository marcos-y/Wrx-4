// Utils & config
import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

// External components
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import ArrowBack from "@material-ui/icons/ArrowBack";

const drawerWidth = 427;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.background.secondary,
    overflowX: "hidden",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
}));

const PushyDrawer = (props) => {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={props.open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <Button
          onClick={props.handleBackTitle}
          variant="outlined"
          color="default"
          style={{ borderWidth: 0, fontSize: "18px" }}
          startIcon={<ArrowBack />}
        >
          {props.backTitle}
        </Button>
      </div>
      <Divider />
      {props.children}
    </Drawer>
  );
};

PushyDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  backTitle: PropTypes.string.isRequired,
  handleBackTitle: PropTypes.func.isRequired,
};

export default PushyDrawer;
