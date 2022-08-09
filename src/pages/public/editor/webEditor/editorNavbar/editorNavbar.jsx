// Utils & config
import React from "react";
import { useHistory } from "react-router-dom";
import { useShoppingCart } from "src/stores/shoppingCart";

// External components
import { ShoppingCart } from "@material-ui/icons/";
import { Box, IconButton, Badge, Typography } from "@material-ui/core";

// Internal components
import logo from "../../../../../assets/images/wrx4_logo.svg";
import Button from "../../../../../components/atoms/button/button";

const EditorNavbar = () => {
  const history = useHistory();
  const { shoppingCart } = useShoppingCart();

  const shoppingCartTotalPrice =
    shoppingCart.vehicleParts.reduce((acc, item) => acc + item.vehiclePart.price * item.quantity, 0) +
    shoppingCart.products.reduce((acc, product) => product.price, 0);

  const goToCheckout = (e) => {
    e.preventDefault();
    history.push("/checkout");
  };

  return (
    <Box position="absolute" top="0" display="flex" justifyContent="space-between" backgroundColor="transparent" width="100%" paddingX={2}>
      <Box>
        <img src={logo} alt="logo" width={164} />
      </Box>

      <Box display="flex" alignItems="center">
        <IconButton>
          <Badge color="error" badgeContent={shoppingCart.vehicleParts.length + shoppingCart.products.length}>
            <ShoppingCart />
          </Badge>
        </IconButton>

        <Typography style={{ minWidth: 56, margin: "0px 24px 0px 16px", fontWeight: "bold", fontSize: "24px" }}>
          {shoppingCartTotalPrice} €
        </Typography>

        <Button variant="contained" color="primary" onClick={goToCheckout}>
          Ir al checkout
        </Button>
      </Box>
    </Box>
  );
};

export default EditorNavbar;
