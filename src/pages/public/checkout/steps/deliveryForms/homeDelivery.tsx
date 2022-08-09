import React, { FC, MouseEvent } from "react";
import { makeStyles } from "@material-ui/core";
import { ArrowLeft, ArrowRight } from "@material-ui/icons/";

import Button from "../../commons/button";
import Input from "../../commons/input/customInput";
import TextArea from "../../commons/textArea/textArea";

import useInput from "src/hooks/useInput";
import { basicValidation } from "src/helpers/validations";
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

  dualContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    [theme.breakpoints.down("md")]: {
      width: "100%",
      flexDirection: "column",
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
}));

interface IProps {
  setCurrentView: (num: number) => void;
}

const HomeDelivery: FC<IProps> = (props) => {
  const classes = useStyles();
  const { setDeliveryMethod } = useShoppingCart();

  const city = useInput({ validate: basicValidation });
  const address = useInput({ validate: basicValidation });
  const zipCode = useInput({ validate: basicValidation });
  const locality = useInput({ validate: basicValidation });
  const comments = useInput({ validate: basicValidation });
  const appartment = useInput({ validate: basicValidation });

  const onSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const deliveryData = {
      type: DeliveryType.DOMICILIO,
      information: {
        city: city.value,
        address: address.value,
        zipCode: zipCode.value,
        locality: locality.value,
        comments: comments.value,
        appartment: appartment.value,
      },
    };

    props.setCurrentView(2);
    setDeliveryMethod(deliveryData);
  };

  return (
    <div className={classes.simpleContainer}>
      <Input
        label="Dirección de Envío"
        placeholder="Ingeniero Fauesto Elio 95"
        value={address.value}
        onBlur={address.onBlur}
        onFocus={address.onFocus}
        onChange={address.onChange}
        error={!address.error.isValid && address.error.message}
      />

      <div className={classes.dualContainer}>
        <Input
          maxWidth
          label="Piso/Puerta/Apartamento"
          placeholder="Piso 2, Apartamento 5"
          value={appartment.value}
          onBlur={appartment.onBlur}
          onFocus={appartment.onFocus}
          onChange={appartment.onChange}
          error={!appartment.error.isValid && appartment.error.message}
        />
        <Input
          maxWidth
          type="number"
          label="Código Postal"
          placeholder="14046"
          value={zipCode.value}
          onBlur={zipCode.onBlur}
          onFocus={zipCode.onFocus}
          onChange={zipCode.onChange}
          error={!zipCode.error.isValid && zipCode.error.message}
        />
      </div>

      <div className={classes.dualContainer}>
        <Input
          maxWidth
          label="Ciudad"
          placeholder="Valencia"
          value={city.value}
          onBlur={city.onBlur}
          onFocus={city.onFocus}
          onChange={city.onChange}
          error={!city.error.isValid && city.error.message}
        />
        <Input
          maxWidth
          label="Localidad"
          placeholder="Valencia"
          value={locality.value}
          onBlur={locality.onBlur}
          onFocus={locality.onFocus}
          onChange={locality.onChange}
          error={!locality.error.isValid && locality.error.message}
        />
      </div>

      <TextArea label="Comentarios (opcional)" placeholder="..." value={comments.value} onChange={comments.onChange} />

      <div className={classes.bntSteps}>
        <Button onClick={() => props.setCurrentView(0)} loading={false} variant="secondary">
          <ArrowLeft style={{ color: "white" }} fontSize="large" />
          Datos Personales
        </Button>

        <Button
          loading={false}
          onClick={onSubmit}
          disabled={
            !address.error.isValid || !appartment.error.isValid || !zipCode.error.isValid || !locality.error.isValid || !city.error.isValid
          }
        >
          Elegir Método de Pago
          <ArrowRight style={{ color: "white" }} fontSize="large" />
        </Button>
      </div>
    </div>
  );
};

export default HomeDelivery;
