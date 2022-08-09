// Utils & Config
import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core";

// External components
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

// Internal components
import DetailItem from "./detailItem";

const DetailPreview = (props) => {
  const { palette } = useTheme();

  return (
    <Grid container style={{ padding: 32, height: "100%" }}>
      <Grid container>
        <Typography>Detalle del retiro #{props.delivery.id}</Typography>
      </Grid>
      {props.delivery.isConfirmable && (
        <Grid item xs={12}>
          <Button
            variant="contained"
            fullWidth
            color="primary"
            onClick={props.onButtonClick}
            style={{ color: palette.fourthColor }}
          >{`MARCAR "CONFIRMADO"`}</Button>
        </Grid>
      )}
      <Grid item xs={12}>
        Estado:
      </Grid>
      <Grid item xs={12}>
        <Chip label={props.delivery.humanState} style={{ backgroundColor: props.delivery.stateColor, color: "white", marginRight: 8 }} />
      </Grid>
      <DetailItem title="USUARIO" text={props.delivery.recyclerName} />
      <DetailItem title="FECHA Y RANGO HORARIO" text={props.delivery.date} />
      <DetailItem title="DIRECCIÓN" text={props.delivery.address.name} />
      <DetailItem title="CANTIDAD DE BOLSAS" text={props.delivery.qrcodesQty} />
      <DetailItem title="COMENTARIOS ADICIONALES" text={props.delivery.comment} />
    </Grid>
  );
};

DetailPreview.propTypes = {
  delivery: PropTypes.object.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default DetailPreview;
