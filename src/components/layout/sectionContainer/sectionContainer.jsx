// Utils & config
import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core";

// External components
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

// Internal components

const SectionContainer = (props) => {
  const theme = useTheme();
  return (
    <Container
      maxWidth={props.maxWidth || false}
      disableGutters={props.disableGutters || false}
      component="section"
      style={{ marginBottom: theme.spacing(10), ...props.containerStyle }}
    >
      <Grid container spacing={props.spacing === undefined ? 4 : props.spacing}>
        {props.children}
      </Grid>
    </Container>
  );
};

SectionContainer.propTypes = {
  maxWidth: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", false]),
  disableGutters: PropTypes.bool,
  containerStyle: PropTypes.any,
  spacing: PropTypes.number,
};

export default SectionContainer;
