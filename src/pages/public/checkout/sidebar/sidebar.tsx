import React, { FC } from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";
import wrx4Logo from "../../../../assets/images/wrx4_logo.svg";

import CouponOptions from "./couponOptions";
import CartItems from "src/components/organisms/cartItems";
import { useShoppingCart } from "src/stores/shoppingCart";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    background: "#2F2F2F",
    position: "relative",
    padding: theme.spacing(3),

    [theme.breakpoints.down("md")]: {
      padding: 12,
    },
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
  price: {
    width: "100%",
    bottom: "12px",
    display: "flex",
    position: "relative",
    flexDirection: "column",
  },

  item: {
    width: "80%",
    display: "flex",
    margin: "6px auto",
    justifyContent: "space-between",
  },
}));

interface IProps {
  currentView: number;
}

const Sidebar: FC<IProps> = (props) => {
  const classes = useStyles();

  const { shoppingCart } = useShoppingCart();

  const shoppingCartTotalPrice =
    shoppingCart.vehicleParts.reduce((acc, item) => acc + item.vehiclePart.price * item.quantity, 0) +
    shoppingCart.products.reduce((acc, product) => product.price, 0);

  return (
    <div className={classes.root}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <img src={wrx4Logo} alt="img-1" width={192} />

        <Typography variant="h6" align="left" className={classes.title} style={{ marginLeft: 30, marginTop: 18 }}>
          DETALLE DE LA COMPRA
        </Typography>

        <CartItems showOptions={!props.currentView} />

        {!props.currentView && <CouponOptions />}

        <div className={classes.price}>
          <div className={classes.item}>
            <Typography variant="body1" align="left" className={classes.title}>
              SUBTOTAL
            </Typography>

            <Typography variant="body2" align="left" className={classes.title}>
              {shoppingCartTotalPrice} €
            </Typography>
          </div>

          <div className={classes.item}>
            <Typography variant="body1" align="left" className={classes.title}>
              GASTOS DE ENVÍO
            </Typography>

            <Typography variant="body2" align="left" className={classes.title}>
              20 €
            </Typography>
          </div>

          <div className={classes.item} style={{ marginTop: 12 }}>
            <Typography variant="body1" align="left" className={classes.title} style={{ fontSize: 18 }}>
              TOTAL
            </Typography>

            <Typography variant="body2" align="left" className={classes.title} style={{ fontSize: 18 }}>
              {shoppingCartTotalPrice + 20} €
            </Typography>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Sidebar;
