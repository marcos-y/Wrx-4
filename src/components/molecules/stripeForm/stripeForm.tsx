import { useSnackbar } from "notistack";
import React, { FC, MouseEvent, useState } from "react";

import { CardNumberElement, CardCvcElement, CardExpiryElement, useStripe, useElements } from "@stripe/react-stripe-js";

import { makeStyles } from "@material-ui/core";
import { ArrowLeft, ArrowRight } from "@material-ui/icons";
import Button from "src/pages/public/checkout/commons/button";

import { useShoppingCart } from "src/stores/shoppingCart";
import { MethodType } from "src/interfaces/cartInterface";
import { filterCartItems } from "src/helpers/cartActions/cartActions";
import { paymentIntentDTO, paymentTwoStepsConfirmation } from "src/services/srtipe";
import { useUserInfoStore } from "src/stores/auth";

const useStyles = makeStyles((theme) => ({
  btnContainer: {
    width: "80%",
    display: "flex",
    margin: "0 auto",
    marginBottom: "24px",
    alignItems: "center",
    justifyContent: "center",

    [theme.breakpoints.down("xs")]: {
      width: "100%",
      flexDirection: "column",
    },
  },
  customContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },

  simpleContainer: {
    width: "80%",
    margin: "0 auto",

    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },

  label: {
    margin: "12px",
    display: "flex",
    textAlign: "left",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      margin: "12px 0px",
    },
  },

  input: {
    padding: 12,
    border: "none",
    outline: "none",
    margin: "3px 0px",
    background: "#2F2F2F",
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

const options = {
  style: {
    base: {
      fontSize: "16px",
      color: "#ffffff",
      "::placeholder": {
        color: "#707070",
      },
    },
    invalid: {
      color: "#9e2146",
    },
  },
};

interface IProps {
  goBack: () => void;
  goNext: () => void;
}

const SplitForm: FC<IProps> = (props) => {
  const stripe = useStripe();
  const classes = useStyles();
  const elements: any = useElements();
  const { enqueueSnackbar } = useSnackbar();

  const [loading, setLoading] = useState<boolean>(false);
  const { userInfo } = useUserInfoStore();
  const { shoppingCart, deliveryMethod, paymentMethod } = useShoppingCart();

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!stripe || !elements) return;

    try {
      const payload = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardNumberElement),
      });

      if (payload.error) return alert("Ingresá los datos correctamente");

      const items: any = filterCartItems(shoppingCart);

      const res = await paymentIntentDTO({
        deliveryMethod,
        shoppingCart: { items },
        paymentMethod: {
          ...paymentMethod,
          customerId: userInfo.id,
          type: MethodType.CREDIT_CARD,
          stripeID: payload.paymentMethod.id,
        },
      });

      console.log("%cstripeForm.tsx line:128 res", "color: #007acc;", res);

      if (res.data.status === "requires_action") {
        console.log("%cstripeForm.tsx line:130 res.data", "color: #007acc;", res.data);
        const paymentConfirm = await stripe.confirmCardPayment(res.data.client_secret, {
          payment_method: payload.paymentMethod.id,
        });

        if (paymentConfirm.error) {
          enqueueSnackbar("Ha ocurrido un error, intenta nuevamente!", { variant: "error", preventDuplicate: true });
          setLoading(false);
          return;
        } else await paymentTwoStepsConfirmation({ orderId: res.data.orderId, customerId: userInfo.id });
      }

      props.goNext();

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  return (
    <div className={classes.simpleContainer}>
      <label className={classes.label}>
        Número de la tarjeta
        <CardNumberElement options={{ showIcon: true, ...options }} className={classes.input} />
      </label>

      <div className={classes.customContainer}>
        <label className={classes.label} style={{ width: "100%" }}>
          CVC
          <CardCvcElement className={classes.input} options={options} />
        </label>

        <label className={classes.label} style={{ width: "100%" }}>
          Fecha de vencimiento
          <CardExpiryElement className={classes.input} options={options} />
        </label>
      </div>

      <div className={classes.bntSteps}>
        <Button onClick={props.goBack} loading={loading} variant="secondary">
          <ArrowLeft style={{ color: "white" }} fontSize="large" />
          Métodos de envío
        </Button>

        <Button onClick={handleSubmit} loading={loading} disabled={!stripe}>
          Confirmar compra
          <ArrowRight style={{ color: "white" }} fontSize="large" />
        </Button>
      </div>
    </div>
  );
};

export default SplitForm;
