import { useSnackbar } from "notistack";
import React, { FC, MouseEvent, useState } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { ArrowLeft, ArrowRight } from "@material-ui/icons/";

import Button from "../../commons/button";
import { useShoppingCart } from "src/stores/shoppingCart";
import { MethodType } from "src/interfaces/cartInterface";
import { paymentIntentDTO } from "src/services/srtipe";
import { useUserInfoStore } from "src/stores/auth";
import { filterCartItems } from "src/helpers/cartActions/cartActions";

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
}));

interface IConfirmPurchase {
  show: boolean;
  status: "pending" | "success";
}

interface IProps {
  setCurrentView: (num: number) => void;
  setconfirmView: React.Dispatch<React.SetStateAction<IConfirmPurchase>>;
}

const TransferPayment: FC<IProps> = (props) => {
  const classes = useStyles();
  const { userInfo } = useUserInfoStore();
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState<boolean>(false);
  const { setPaymentMethod, deliveryMethod, paymentMethod, shoppingCart } = useShoppingCart();

  const onSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);

    setPaymentMethod({ type: MethodType.TRANSFER, stripeID: "", customerId: "" });
    const items: any = filterCartItems(shoppingCart);

    try {
      await paymentIntentDTO({
        deliveryMethod,
        paymentMethod: { ...paymentMethod, customerId: userInfo.id },
        shoppingCart: { items },
      });

      setLoading(false);
      props.setconfirmView({ show: true, status: "pending" });
      props.setCurrentView(3);
    } catch (error) {
      setLoading(false);
      enqueueSnackbar("Ha ocurrido un error, intenta nuevamente!", { variant: "error", preventDuplicate: true });
    }
  };

  return (
    <div className={classes.simpleContainer}>
      <Typography variant="subtitle1" gutterBottom className={classes.text} style={{ margin: "6px 0px" }}>
        Pasos a seguir
      </Typography>

      <Typography variant="body1" gutterBottom align="left">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt et alias excepturi ipsum quam delectus quas deleniti, aliquam, vitae
        porro placeat numquam id eum quae rerum exercitationem, commodi dolorum accusantium?
      </Typography>

      <div className={classes.bntSteps}>
        <Button onClick={() => props.setCurrentView(0)} loading={false} variant="secondary">
          <ArrowLeft style={{ color: "white" }} fontSize="large" />
          Métodos de envío
        </Button>

        <Button onClick={onSubmit} loading={loading}>
          Confirmar compra
          <ArrowRight style={{ color: "white" }} fontSize="large" />
        </Button>
      </div>
    </div>
  );
};

export default TransferPayment;
