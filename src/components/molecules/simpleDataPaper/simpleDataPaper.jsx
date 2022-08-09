import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  paper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px",
    maxWidth: "250px",
    maxHeight: "250px",
    backgroundColor: theme.palette.thirdColor,
  },
}));

const SimpleDataPaper = (props) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper} elevation={props.elevation}>
      <Typography variant="overlina">{props.text}</Typography>
      <Typography variant="h1" component="h1">
        {props.number}
      </Typography>
    </Paper>
  );
};

SimpleDataPaper.propTypes = {
  elevation: PropTypes.number,
  text: PropTypes.string,
  number: PropTypes.number,
};

export default SimpleDataPaper;
