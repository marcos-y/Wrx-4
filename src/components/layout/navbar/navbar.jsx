// Utils & config
import _ from "lodash";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

// External components
import { AppBar, Toolbar } from "@material-ui/core";
import { makeStyles, useMediaQuery, useTheme } from "@material-ui/core/";

// Internal components
import { useShoppingCart } from "src/stores/shoppingCart";
import NavbarContent from "./navbarContent/navbarContent";
import MobileNavbarContent from "./mobileNavbarContent/mobileNavbarContent";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  toolbarRoot: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

  appBarColorPrimary: {
    backgroundColor: theme.palette.background.default,
    transition: "all 0.2s ease;",
  },

  transparent: {
    backgroundColor: "transparent",
    transition: "all 0.2s ease;",
  },

  title: {
    flexGrow: 1,
  },
}));

const Navbar = (props) => {
  const theme = useTheme();
  const classes = useStyles();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const [isScrollOnTop0, setisScrollOnTop0] = useState(true);

  const { shoppingCart } = useShoppingCart();
  console.log("%cindex.tsx line:14 shoppingCart", "color: #26bfa5;", shoppingCart);

  useEffect(() => {
    window.addEventListener(
      "scroll",
      _.debounce(() => {
        if (window.scrollY === 0) setisScrollOnTop0(true);
        else setisScrollOnTop0(false);
      }, 50)
    );

    return () => {
      window.removeEventListener("scroll", () => {
        if (window.scr === 0) setisScrollOnTop0(true);
        else setisScrollOnTop0(false);
      });
    };
  }, []);

  return (
    <div className={classes.root}>
      <AppBar position="fixed" classes={{ colorPrimary: isScrollOnTop0 ? classes.transparent : classes.appBarColorPrimary }} elevation={0}>
        <Toolbar classes={{ root: classes.toolbarRoot }}>
          {isMdUp ? (
            <NavbarContent />
          ) : (
            <MobileNavbarContent handleOpenDrawer={props.handleOpenDrawer} sidebarOpened={props.sidebarOpened} />
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

Navbar.propTypes = {
  handleOpenDrawer: PropTypes.func.isRequired,
  sidebarOpened: PropTypes.bool.isRequired,
  setSidebarOpen: PropTypes.func.isRequired,
};

export default Navbar;
