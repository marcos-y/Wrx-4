import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles, Typography } from "@material-ui/core";
import { QueryBuilder, CheckCircleOutline } from "@material-ui/icons/";

import Button from "../../commons/button";
import ContactBanner from "src/components/atoms/contactBAnner";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 12,
  },

  image: {
    fontSize: 110,
    marginTop: 24,
    marginBottom: 12,
  },

  btnContainer: {
    margin: 18,
    display: "flex",
    justifyContent: "center",
  },

  btn: {},
}));

interface IProps {
  status: "pending" | "success";
}

const PurchaseCompleted: FC<IProps> = (props) => {
  const classes = useStyles();

  const history = useHistory();

  return (
    <div className={classes.root}>
      <Typography variant="h6" gutterBottom>
        ¡Muchas gracias por tu compra!
      </Typography>

      {props.status === "pending" ? (
        <QueryBuilder className={classes.image} style={{ color: "#CC7600" }} />
      ) : (
        <CheckCircleOutline className={classes.image} style={{ color: "#18B341" }} />
      )}

      <Typography variant="body1" gutterBottom style={{ fontWeight: "bold" }}>
        {props.status === "pending" ? "Tu compra está pendiente de pago" : "La compra se ha procesado correctamente"}
      </Typography>

      {props.status === "success" && (
        <Typography variant="body1" gutterBottom style={{ color: "#C1C1C1", width: "70%", margin: "12px auto" }}>
          Recibirás un correo electrónico con la información de la compra y el número de tracking para que puedas monitorear el estado del
          pedido en tiempo real.
        </Typography>
      )}

      <ContactBanner />

      <div className={classes.btnContainer}>
        <Button loading={false} onClick={() => history.push("/")} style={{ background: "#5C5C5C", padding: "12px 18px" }}>
          volver a inicio
        </Button>

        <Button loading={false} onClick={() => history.push("/myaccount")} style={{ background: "#00B341", padding: "12px 18px" }}>
          ir a mi perfil
        </Button>
      </div>
    </div>
  );
};

export default PurchaseCompleted;
