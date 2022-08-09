// Utils & config
import React from "react";
import PropTypes from "prop-types";
import { useShoppingCart } from "src/stores/shoppingCart";

// External components
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Drawer, IconButton, Badge, Typography, Box, makeStyles, useTheme } from "@material-ui/core";

// Internal components
import Button from "../../../../../components/atoms/button/button";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    height: "45vh",
    flexShrink: 1,
  },
  drawerPaper: {
    height: "45vh",
    backgroundColor: theme.palette.background.secondary,
    overflowX: "hidden",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    justifyContent: "flex-start",
  },
}));

const BottomPushyDrawer = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const { palette } = useTheme();
  const { shoppingCart } = useShoppingCart();

  const shoppingCartTotalPrice =
    shoppingCart.vehicleParts.reduce((acc, item) => acc + (item.vehiclePart.price * item.quantity), 0) +
    shoppingCart.products.reduce((acc, product) => product.price, 0);

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="bottom"
      open={props.open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      {props.children}
      <Box height={48} minHeight={48}></Box>
      {props.selectedVehicle && (
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          position="fixed"
          paddingRight={2}
          bottom={0}
          width="100%"
          maxHeight={48}
          style={{ backgroundColor: palette.background.quaternary }}
          boxShadow={16}
        >
          <IconButton>
            <Badge color="error" badgeContent={shoppingCart.vehicleParts.length + shoppingCart.products.length}>
              <ShoppingCartIcon />
            </Badge>
          </IconButton>

          <Box display="flex" flexDirection="row" alignItems="center">
            <Typography style={{ minWidth: 56, margin: "0px 24px 0px 16px", fontWeight: "bold" }}>{shoppingCartTotalPrice} €</Typography>
            <Button variant="contained" color="primary" onClick={() => history.push("/checkout")}>
              Ir al checkout
            </Button>
          </Box>
        </Box>
      )}
    </Drawer>
  );
};

BottomPushyDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  backTitle: PropTypes.string.isRequired,
  handleBackTitle: PropTypes.func.isRequired,
};

export default BottomPushyDrawer;
