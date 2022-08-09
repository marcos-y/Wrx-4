import React, { FC, useState } from "react";
import { useHistory } from "react-router-dom";
import { CssBaseline, makeStyles } from "@material-ui/core";

import Sidebar from "./sidebar/sidebar";
import PersonalInfo from "./steps/personalInfo";
import PaymentMethod from "./steps/paymentMethod";
import DeliveryMethod from "./steps/deliveryMethod";
import MainCheckout from "./mainCheckout/mainCheckout";
import VerticalLinearStepper from "../../../components/molecules/verticalStepper/verticalStepper";
import PurchaseCompleted from "./commons/purchaseCompleted";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
}));

interface IConfirmPurchase {
  show: boolean;
  status: "pending" | "success";
}

const CheckoutView: FC = () => {
  const classes = useStyles();
  const history = useHistory();

  const [currentView, setCurrentView] = useState<number>(0);
  const [confirmView, setconfirmView] = useState<IConfirmPurchase>({
    show: false,
    status: "success",
  });

  const steps = [
    { label: "Datos Personales", content: <PersonalInfo setCurrentView={setCurrentView} /> },
    { label: "Métodos de Envío", content: <DeliveryMethod setCurrentView={setCurrentView} /> },
    { label: "Métodos de Pago", content: <PaymentMethod setCurrentView={setCurrentView} setconfirmView={setconfirmView} /> },
  ];

  return (
    <>
      <CssBaseline />

      <div className={classes.root}>
        <MainCheckout backTitle="Checkout" handleBackTitle={() => history.goBack()}>
          {confirmView.show ? (
            <PurchaseCompleted status={confirmView.status} />
          ) : (
            <VerticalLinearStepper current={currentView} steps={steps} />
          )}
        </MainCheckout>

        <Sidebar currentView={currentView} />
      </div>
    </>
  );
};

export default CheckoutView;
