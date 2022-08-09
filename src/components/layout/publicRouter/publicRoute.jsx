// Utils & Config
import React from "react";
import PropTypes from "prop-types";

// External components
import { Route } from "react-router-dom";

// Internal components

const PrivateRoute = (props) => {
  return <Route exact path={props.path} component={() => props.component} />;
};

PrivateRoute.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
