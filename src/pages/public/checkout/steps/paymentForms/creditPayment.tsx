import React, { FC } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import StripeForm from "src/components/molecules/stripeForm/stripeForm";

const stripePromise = loadStripe(
  process.env.STRIPE_PUBLIC_KEY ||
    "pk_test_51JG4pCC44fMc4Yj8xtTrjhHKdqQ3gjpAdCbkRdLTyJBnFnWKdC3frHqDMwJtZ5vVqPfE4aCPz1JgxLgnphF4jmpf00CA5PjtfA"
);

interface IConfirmPurchase {
  show: boolean;
  status: "pending" | "success";
}

interface IProps {
  setCurrentView: (num: number) => void;
  setconfirmView: React.Dispatch<React.SetStateAction<IConfirmPurchase>>;
}

const CreditPayment: FC<IProps> = (props) => {
  const goBack = () => props.setCurrentView(1);
  const goNext = () => props.setconfirmView({ show: true, status: "success" });

  return (
    <Elements stripe={stripePromise}>
      <StripeForm goBack={goBack} goNext={goNext} />
    </Elements>
  );
};

export default CreditPayment;
