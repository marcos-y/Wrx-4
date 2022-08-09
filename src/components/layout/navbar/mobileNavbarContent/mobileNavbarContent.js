// Utils & config
import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Button from "../../../atoms/button/button";
import { makeStyles, IconButton, Box } from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import ArrowForward from "@material-ui/icons/ArrowForward";
import logo from "../../../../assets/images/wrx4_logo.svg";

const useStyles = makeStyles((theme) => ({
  menuButtonHidden: {
    display: "none",
  },
}));

const MobileNavbarContent = (props) => {
  const classes = useStyles();

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
      <Box display="flex" alignItems="center">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={props.handleOpenDrawer}
          className={clsx(props.sidebarOpened && classes.menuButtonHidden)}
        >
          <MenuIcon />
        </IconButton>

        <img src={logo} alt="logo" style={{ maxWidth: 100 }} />
      </Box>

      <Link to="/editor" style={{ textDecoration: "none" }}>
        <Button variant="contained" color="primary" endIcon={<ArrowForward />}>
          CUSTOMIZE
        </Button>
      </Link>
    </Box>
  );
};

MobileNavbarContent.propTypes = {
  handleOpenDrawer: PropTypes.func.isRequired,
  sidebarOpened: PropTypes.bool.isRequired,
};

export default MobileNavbarContent;
