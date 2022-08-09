// Utils & Config
import React from "react";

// External components
import Grid from "@material-ui/core/Grid";
import Skeleton from "@material-ui/lab/Skeleton";

// Internal components
import MainDetails from "./mainDetails";
import DeliveryActions from "./deliveryActions";
import DeliveryBagsDetails from "./deliveryBagsDetails";
import { Typography, useTheme } from "@material-ui/core";

const DeliveryDetail = (props) => {
  const { palette } = useTheme();
  return (
    <Grid container xs={12}>
      {props.isLoading ? <Skeleton variant="rect" width="100%" height={118} animation="wave" /> : <MainDetails delivery={props.delivery} />}
      {props.isLoading ? <Skeleton variant="rect" width="100%" height={118} animation="wave" /> : <DeliveryActions />}
      <Typography style={{ color: palette.fourthColor, marginBottom: 8, fontWeight: 600 }}>Detalle de bolsas</Typography>
      {props.isLoading ? (
        <Skeleton variant="rect" width="100%" height={118} animation="wave" />
      ) : (
        <DeliveryBagsDetails qrcodes={props.delivery.qrcodes} />
      )}
    </Grid>
  );
};

DeliveryDetail.propTypes = {};

export default DeliveryDetail;
