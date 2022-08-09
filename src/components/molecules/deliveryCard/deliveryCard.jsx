// Utils & Config
import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core";

// External components
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import Typoghraphy from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import MoreVert from "@material-ui/icons/MoreVert";

// Internal components
import ProcessButton from "../../atoms/processButton/processButton";

const DeliveryCard = React.forwardRef((props, ref) => {
  const { palette } = useTheme();

  return (
    <Grid
      ref={ref}
      container
      xs={12}
      spacing={2}
      style={{ margin: "0 0 8px 0", padding: 8, backgroundColor: palette.secondColor, color: palette.fourthColor }}
    >
      <Grid item xs={12}>
        <Box display="flex" direction="row" justifyContent="space-between" alignItems="center">
          <Typoghraphy style={{ display: "inline-block" }}> {`ID #${props.delivery.id}` || "ID #420"}</Typoghraphy>
          <IconButton style={{ padding: 0 }}>
            <MoreVert style={{ color: palette.fourthColor }} onClick={props.openPreview} />
          </IconButton>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box display="flex" justifyContent="flex-start" alignItems="center">
          <Typoghraphy>{props.delivery.date || "02/01 - 20 a 22hs"}</Typoghraphy>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box display="flex" justifyContent="flex-start" alignItems="center">
          <Typoghraphy align="left">{props.delivery.address.nameWithDetails}</Typoghraphy>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box display="flex" justifyContent="flex-start" alignItems="center">
          <Chip label={props.delivery.humanState.toUpperCase()} style={{ backgroundColor: props.delivery.stateColor, color: "white" }} />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box display="flex">
          <Box display="flex" alignItems="center" marginRight={2}>
            <Icon style={{ marginRight: 8 }}>person</Icon> <Typoghraphy>{props.delivery.recyclerName}</Typoghraphy>
          </Box>
          <Box display="flex" alignItems="center">
            <Icon style={{ marginRight: 8 }}>local_mall</Icon>
            <Typoghraphy>{props.delivery.qrcodesQty} </Typoghraphy>
          </Box>
        </Box>
      </Grid>
      {props.delivery.isConfirmable && (
        <Grid item xs={12}>
          <ProcessButton text={`MARCAR "CONFIRMADO"`} onClick={props.onButtonClick} />
        </Grid>
      )}
      {props.delivery.isRetirable && (
        <Grid item xs={12}>
          <ProcessButton
            text={`MARCAR "RETIRADO"`}
            onClick={() => props.onButtonClick(props.delivery.id, props.delivery.routeId)}
            backgroundColor="#8FAD47"
          />
        </Grid>
      )}
    </Grid>
  );
});

DeliveryCard.propTypes = {
  delivery: PropTypes.object.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default DeliveryCard;
