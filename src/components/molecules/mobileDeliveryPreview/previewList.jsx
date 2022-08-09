// Utils & config
import React from "react";
import { useTheme } from "@material-ui/core";
import { useHistory } from "react-router-dom";

// External components
import CancelOutlined from "@material-ui/icons/CancelOutlined";
import Phone from "@material-ui/icons/Phone";
import WhatsApp from "@material-ui/icons/WhatsApp";
import Visibility from "@material-ui/icons/Visibility";
import List from "@material-ui/core/List";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const PreviewItem = (props) => {
  const { palette } = useTheme();
  const history = useHistory();

  return (
    <List>
      <ListItem button disableGutters>
        <ListItemIcon style={{ minWidth: 40 }}>
          <CancelOutlined style={{ color: palette.fourthColor }} />
        </ListItemIcon>
        <ListItemText primary={`Marcar como "CANCELADO"`} style={{ color: palette.fourthColor }} />
      </ListItem>
      <ListItem button disableGutters>
        <ListItemIcon style={{ minWidth: 40 }}>
          <Phone style={{ color: palette.fourthColor }} />
        </ListItemIcon>
        <ListItemText primary="Llamar al usuario" style={{ color: palette.fourthColor }} />
      </ListItem>
      <ListItem button disableGutters>
        <ListItemIcon style={{ minWidth: 40 }}>
          <WhatsApp style={{ color: palette.fourthColor }} />
        </ListItemIcon>
        <ListItemText
          primary="Enviar whatsapp al usuario"
          style={{ color: palette.fourthColor }}
          onClick={() => window.open(`https://wa.me/${props.recyclerPhoneNumber}`, "_blank")}
        />
      </ListItem>
      <ListItem button disableGutters onClick={() => history.push(`/retiros/${props.deliveryId}`)}>
        <ListItemIcon style={{ minWidth: 40 }}>
          <Visibility style={{ color: palette.fourthColor }} />
        </ListItemIcon>
        <ListItemText primary="Ver detalle" style={{ color: palette.fourthColor }} />
      </ListItem>
    </List>
  );
};

PreviewItem.propTypes = {};

export default PreviewItem;
