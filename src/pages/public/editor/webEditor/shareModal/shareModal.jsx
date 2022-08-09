// Utils & config
import React, { useState } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

// External components
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";

// Internal components
import Dialog from "../../../../../components/atoms/dialog/dialog";
import Alert from "../../../../../components/atoms/snackbar/snackbar";

// Icons & images
import CopyIcon from "@material-ui/icons/FileCopy";

const url = "https://test.wrx4offroad.es";

const ShareModal = (props) => {
  const location = useLocation();
  const [alert, setalert] = useState({ open: false, text: "", type: "" });

  const handleCopy = () => {
    var copyText = document.getElementById("shareUrlInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    setalert({ open: true, text: "URL copiada", type: "success" });
  };

  return (
    <Dialog
      confirmButtonText="VOLVER"
      confirmHandler={props.handleClose}
      open={props.open}
      dialogTitle="COMPARTIR"
      handleClose={props.handleClose}
    >
      <Container disableGutters>
        {alert.open && (
          <Alert open={alert.open} text={alert.text} type={alert.type} handleClose={() => setalert({ open: false, text: "", type: "" })} />
        )}
        <Grid container spacing={2}>
          <Grid item xs={10}>
            <TextField
              id="shareUrlInput"
              value={
                props.vehiclePartsQueryParams
                  ? `${url}/visualizador${location.search}&${props.vehiclePartsQueryParams}`
                  : `${url}/visualizador${location.search}`
              }
              label="URL"
              variant="outlined"
              InputProps={{ readOnly: true }}
              fullWidth
            />
          </Grid>
          <Grid item xs={2} style={{ display: "flex" }} justify="center" alignItems="center">
            <IconButton onClick={handleCopy}>
              <CopyIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </Dialog>
  );
};

ShareModal.propTypes = {
  vehiclePartsQueryParams: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default ShareModal;
