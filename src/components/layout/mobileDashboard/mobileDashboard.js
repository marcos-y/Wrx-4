// Utils & config
import React from "react";
import Proptypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

// External components
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

//Internal components
import ScreenTitle from "../../molecules/screenTitle/screenTitle";

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  appBarSpacer: theme.mixins.toolbar,
}));

const Dashboard = (props) => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container xs={12}>
          <Grid item xs={12} style={{ marginBottom: 24 }}>
            <ScreenTitle text={props.title} />
          </Grid>
          {props.children}
        </Grid>
      </Container>
    </main>
  );
};

Dashboard.propTypes = {
  title: Proptypes.string.isRequired,
};

export default Dashboard;
