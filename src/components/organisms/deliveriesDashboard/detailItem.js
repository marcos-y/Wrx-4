import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const DetailItem = (props) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography style={{ fontWeight: "bold", fontSize: 14 }}>{props.title}</Typography>
      </Grid>
      <Grid item xs={12}>
        {props.text ? (
          <Typography style={{ fontWeight: "regular", fontSize: 16 }}>{props.text}</Typography>
        ) : (
          <Typography style={{ fontWeight: "regular", fontSize: 16, fontStyle: "italic" }}>-</Typography>
        )}
      </Grid>
    </Grid>
  );
};

DetailItem.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
};

export default DetailItem;
