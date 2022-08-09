import React, { FC, MouseEvent } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { ArrowLeft, ArrowRight, Room } from "@material-ui/icons/";

import Button from "../../commons/button";
import { useShoppingCart } from "src/stores/shoppingCart";
import { DeliveryType } from "src/interfaces/cartInterface";

const useStyles = makeStyles((theme) => ({
  simpleContainer: {
    width: "80%",
    margin: "0 auto",

    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },

  bntSteps: {
    marginTop: 18,
    display: "flex",
    justifyContent: "flex-end",

    [theme.breakpoints.down("md")]: {
      margin: "12px auto",
      alignItems: "flex-end",
      flexDirection: "column",
    },
  },

  text: {
    marginBottom: 18,
    color: "#C1C1C1",
    display: "flex",
    alignItems: "center",
    fontFamily: "Montserrat",

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },

  link: {
    fontSize: 14,
    color: "#C1C1C1",
    margin: "0 18px",
    cursor: "pointer",
    textDecoration: "none",
  },
}));

interface IProps {
  setCurrentView: (num: number) => void;
}

const RetiroDelivery: FC<IProps> = (props) => {
  const classes = useStyles();
  const { setDeliveryMethod, deliveryMethod } = useShoppingCart();

  const onSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setDeliveryMethod({ ...deliveryMethod, type: DeliveryType.LOCAL });
    props.setCurrentView(2);
  };

  return (
    <div className={classes.simpleContainer}>
      <Typography variant="body1" className={classes.text}>
        Podrás retirar tus productos en nuestro centro de producción de Lunes a Viernes de 10 a 18 hs.
      </Typography>

      <Typography variant="subtitle1" gutterBottom className={classes.text} style={{ margin: "24px 0px" }}>
        <Room />
        C. Serra, 6646160 Liria, Valencia{" "}
        <a className={classes.link} href="https://goo.gl/maps/rq5DUgLYrTqxzNhx5" target="_blank" rel="noopener noreferrer">
          Ver en Google Maps
        </a>
      </Typography>

      <div className={classes.bntSteps}>
        <Button onClick={() => props.setCurrentView(0)} loading={false} variant="secondary">
          <ArrowLeft style={{ color: "white" }} fontSize="large" />
          Datos Personales
        </Button>

        <Button onClick={onSubmit} loading={false}>
          Elegir Método de Pago
          <ArrowRight style={{ color: "white" }} fontSize="large" />
        </Button>
      </div>
    </div>
  );
};

export default RetiroDelivery;
