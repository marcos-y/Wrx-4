// Utils & Config
import React from "react";
import PropTypes from "prop-types";

// External components
import { Route } from "react-router-dom";

// Internal components
import Layout from "../layout/layout";

const PrivateRoute = (props) => {
  return <Route exact path={props.path} component={() => <Layout>{props.component}</Layout>} />;
};

PrivateRoute.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
