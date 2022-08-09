import React, { FC, MouseEvent } from "react";

import partImg from "../../../assets/images/bacas.jpg";
import { makeStyles, Typography } from "@material-ui/core";
import { Delete, AddOutlined, RemoveOutlined } from "@material-ui/icons/";

import { ItemCart } from "src/interfaces/cartInterface";
import { useShoppingCart } from "src/stores/shoppingCart";
import { addQuantityToCartItem, deleteItemForCart, removeQuantityOrItemFromShoppingCart } from "src/helpers/cartActions/cartActions";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: 18,

    [theme.breakpoints.down("md")]: {
      padding: "18px 6px",
    },
  },

  itemContainer: {
    display: "flex",
    userSelect: "none",
    margin: "6px 12px",
    position: "relative",
    alignItems: "flex-start",
    justifyContent: "space-between",
    borderBottom: "2px solid #6F6F6F",
    [theme.breakpoints.down("md")]: {
      margin: 6,
    },
  },

  options: {
    display: "flex",
    margin: "0 12px",
    flexDirection: "column",
  },

  delete: {
    alignSelf: "center",
    alignItems: "flex-end",
  },

  buttons: {
    marginTop: 18,
    display: "flex",
  },

  button: {
    width: "26px",
    height: "26px",
    border: "none",
    outline: "none",
    display: "flex",
    color: "white",
    cursor: "pointer",
    borderRadius: "50%",
    alignItems: "center",
    background: "#6F6F6F",
    justifyContent: "center",
  },

  title: {
    fontWeight: "bold",
    fontSize: 18,
    [theme.breakpoints.down("md")]: {
      fontSize: 16,
    },
  },
}));

interface IPartProps {
  item: ItemCart;
  hideOptions: boolean;
}

interface IProps {
  showOptions?: boolean;
}

const Part: FC<IPartProps> = (props) => {
  const classes = useStyles();
  const { shoppingCart, setshoppingCart } = useShoppingCart();
  const shoppingCartTotalPrice = props.item.vehiclePart.price * props.item.quantity;

  const incrementQuantity = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newItems = addQuantityToCartItem({ itemId: props.item.vehiclePart.id, cartItems: shoppingCart.vehicleParts });
    setshoppingCart({ ...shoppingCart, vehicleParts: newItems });
  };

  const decrementQuantity = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newItems = removeQuantityOrItemFromShoppingCart({ itemId: props.item.vehiclePart.id, cartItems: shoppingCart.vehicleParts });
    setshoppingCart({ ...shoppingCart, vehicleParts: newItems });
  };

  const deleteItem = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const newItems = deleteItemForCart({ itemId: props.item.vehiclePart.id, cartItems: shoppingCart.vehicleParts });
    setshoppingCart({ ...shoppingCart, vehicleParts: newItems });
  };

  return (
    <div className={classes.itemContainer}>
      <img src={props.item.vehiclePart.image || partImg} alt="img-item" width={70} height={80} />

      <div className={classes.options} style={{ alignItems: "flex-start", position: "absolute", left: 75 }}>
        <Typography variant="body1" className={classes.title}>
          {props.item.vehiclePart.name}
        </Typography>

        <div className={classes.buttons}>
          {!props.hideOptions && (
            <button className={classes.button} disabled={props.item.quantity < 2} onClick={decrementQuantity}>
              <RemoveOutlined />
            </button>
          )}

          <Typography variant="body1" style={{ fontSize: 18, margin: "0 12px" }}>
            {props.item.quantity}
          </Typography>

          {!props.hideOptions && (
            <button className={classes.button} onClick={incrementQuantity}>
              <AddOutlined />
            </button>
          )}
        </div>
      </div>

      <div className={`${classes.options} ${classes.delete}`}>
        {!props.hideOptions && (
          <div onClick={deleteItem}>
            <Delete style={{ margin: "3px 0", cursor: "pointer" }} />
          </div>
        )}

        <Typography variant="body1" style={{ fontWeight: "bold", fontSize: 18 }}>
          {shoppingCartTotalPrice} €
        </Typography>
      </div>
    </div>
  );
};

const CartItems: FC<IProps> = (props) => {
  const classes = useStyles();
  const { shoppingCart } = useShoppingCart();

  return (
    <div className={classes.root}>
      {shoppingCart.vehicleParts.map((item) => (
        <Part key={item.vehiclePart.id} item={item} hideOptions={!props.showOptions} />
      ))}

      {!shoppingCart.vehicleParts.length && (
        <Typography align="left" variant="body1" style={{ marginLeft: 18 }}>
          Aún no tienes productos en tu carrito!
        </Typography>
      )}
    </div>
  );
};

export default CartItems;
