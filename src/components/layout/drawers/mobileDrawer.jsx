// Utils & Config
import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

// External components
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";

// Internal components
import ItemListWithIcon from "../../atoms/itemListWithIcon/itemListWIthIcon";

// Icons & Images
import logo from "../../../assets/images/wrx4_logo.svg";

const drawerWidth = 240;

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
    backgroundColor: theme.palette.background.default,
    color: theme.palette.fourthColor,
  },
  appBarSpacer: theme.mixins.toolbar,
}));

const MobileDrawer = (props) => {
  const classes = useStyles();
  const history = useHistory();

  const handleOptionClick = (path) => {
    props.onClose();
    history.push(path);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="temporary"
        open={props.open}
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
        onClose={props.onClose}
      >
        <div className={classes.appBarSpacer} />
        <img src={logo} alt="logo" style={{ maxWidth: 140, marginLeft: 8 }} />

        <List>
          {props.sidebarOptions.map((item, index) => (
            <ItemListWithIcon
              text={item.text}
              key={index}
              index={index}
              icon={item.icon}
              handleOptionClick={() => handleOptionClick(item.path)}
            />
          ))}
        </List>
      </Drawer>
    </div>
  );
};

MobileDrawer.propTypes = {
  sidebarOptions: PropTypes.array.isRequired,
};

export default MobileDrawer;
