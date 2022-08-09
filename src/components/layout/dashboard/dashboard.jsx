// Utils & config
import React from "react";
import Proptypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

// External components
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

//Internal components

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
    background: theme.palette.background.primary,
    paddingTop: 72,
  },

  appBarSpacer: theme.mixins.toolbar,
}));

const Dashboard = (props) => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      {/* <div className={classes.appBarSpacer} /> */}
      <Container className={classes.container}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h3" color="textPrimary" align="left">
              {props.title}
            </Typography>
          </Grid>
          {props.children}
        </Grid>
      </Container>
    </main>
  );
};

Dashboard.propTypes = {
  title: Proptypes.string.isRequired,
  qrcodeTitle: Proptypes.string,
  createQrcodeHandler: Proptypes.func.isRequired,
  printQrcodesHandler: Proptypes.func.isRequired,
};

export default Dashboard;
