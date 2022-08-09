// Utils && config
import React from "react";
import PropTypes from "prop-types";

// External components
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// Internal components

const GeneralInformation = (props) => {
  return (
    <>
      <Grid item xs={12}>
        <Typography variant="body1">{props.description}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1">Galeria</Typography>
      </Grid>
      <Grid item xs={12}></Grid>
    </>
  );
};

GeneralInformation.propTypes = {
  description: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.object),
};

export default GeneralInformation;
