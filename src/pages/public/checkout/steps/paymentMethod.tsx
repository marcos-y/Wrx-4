import React, { FC, useState } from "react";
import { makeStyles } from "@material-ui/core";

import Layout from "../commons/layout";
import CreditPayment from "./paymentForms/creditPayment";
import TransferPayment from "./paymentForms/transferPayment";
import ButtonWithOptions from "../../../../components/molecules/buttonWithOptions";

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
}));

interface IConfirmPurchase {
  show: boolean;
  status: "pending" | "success";
}

interface IProps {
  setCurrentView: (num: number) => void;
  setconfirmView: React.Dispatch<React.SetStateAction<IConfirmPurchase>>;
}

const PaymentMethod: FC<IProps> = (props) => {
  const classes = useStyles();
  const [method, setMethod] = useState<"transfer" | "credit-card">("credit-card");

  return (
    <Layout>
      <div className={classes.btnContainer}>
        <ButtonWithOptions
          icon="payment-card"
          title="Tarejta de crédito o debito"
          selected={method === "credit-card"}
          onClick={() => setMethod("credit-card")}
        />

        <ButtonWithOptions
          icon="transfer"
          title="Transferencia Bancaria"
          selected={method === "transfer"}
          onClick={() => setMethod("transfer")}
        />
      </div>

      {method === "credit-card" ? (
        <CreditPayment setCurrentView={props.setCurrentView} setconfirmView={props.setconfirmView} />
      ) : (
        <TransferPayment setCurrentView={props.setCurrentView} setconfirmView={props.setconfirmView} />
      )}
    </Layout>
  );
};

export default PaymentMethod;
