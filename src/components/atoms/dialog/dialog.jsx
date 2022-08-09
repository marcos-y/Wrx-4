// Utils & Config
import React from "react";
import PropTypes from "prop-types";
import { useTheme, withStyles } from "@material-ui/core/styles";

// External components
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

// Internal components

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.secondary,
    // minWidth: 500,
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.secondary,
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.secondary,
  },
}))(MuiDialogActions);

const CustomDialog = (props) => {
  const { palette } = useTheme();
  return (
    <Dialog
      onClose={props.handleClose}
      aria-labelledby="customized-dialog-title"
      open={props.open}
      onBackdropClick={props.handleClose}
      maxWidth={props.maxWidth || "lg"}
      fullScreen={props.fullScreen}
      fullWidth={props.fullWidth}
    >
      <DialogTitle id="customized-dialog-title" onClose={props.handleClose} style={{ backgroundColor: palette.secondColor, color: palette.fourthColor, textTransform: 'uppercase' }}>
        {props.dialogTitle}
      </DialogTitle>
      <DialogContent style={{ backgroundColor: palette.secondColor }}>{props.children}</DialogContent>
      <DialogActions style={{ backgroundColor: palette.secondColor }}>
        {props.cancelButtonText && (
          <Button onClick={props.handleClose} variant="text" style={{ padding: "8px 16px" }}>
            {props.cancelButtonText}
          </Button>
        )}
        {props.confirmButtonText && (
          <Button
            onClick={props.confirmHandler}
            variant="contained"
            color="primary"
            style={{ color: palette.fourthColor, padding: "8px 16px" }}
            disabled={props.confirmButtonDisabled}
          >
            {props.confirmButtonText}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

CustomDialog.propTypes = {
  dialogTitle: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  confirmHandler: PropTypes.func.isRequired,
  confirmButtonText: PropTypes.string.isRequired,
  cancelButtonText: PropTypes.string.isRequired,
  confirmButtonDisabled: PropTypes.bool.isRequired,
  maxWidth: PropTypes.any,
  fullScreen: PropTypes.bool,
};

export default CustomDialog;
