import React, { FC, useState } from "react";
import { makeStyles } from "@material-ui/core";

import Layout from "../commons/layout";
import HomeDelivery from "./deliveryForms/homeDelivery";
import RetiroDelivery from "./deliveryForms/retiroDelivery";
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

interface IProps {
  setCurrentView: (num: number) => void;
}

const DeliveryMethod: FC<IProps> = (props) => {
  const classes = useStyles();
  const [method, setMethod] = useState<"domicilio" | "retiro-local">("domicilio");

  return (
    <Layout>
      <div className={classes.btnContainer}>
        <ButtonWithOptions title="envío a domicilio" icon="car" onClick={() => setMethod("domicilio")} selected={method === "domicilio"} />

        <ButtonWithOptions
          icon="car"
          title="retiro en wrx4"
          subtitle="(Liria, Valencia)"
          selected={method === "retiro-local"}
          onClick={() => setMethod("retiro-local")}
        />
      </div>

      {method === "domicilio" ? (
        <HomeDelivery setCurrentView={props.setCurrentView} />
      ) : (
        <RetiroDelivery setCurrentView={props.setCurrentView} />
      )}
    </Layout>
  );
};

export default DeliveryMethod;
