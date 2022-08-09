// Utils & config
import React from "react";

// External components
import { Switch, Redirect } from "react-router-dom";

// Internal components
import PrivateRoute from "./privateRoute";
import Home from "../../../pages/public/home/home";
import MyAccount from "../../../pages/private/home/myAccount/myAccount";
import AboutPage from "../../../pages/public/about/about";
import Contact from "../../../pages/public/contact/contact";
import Accesories from "../../../pages/public/accesories/accesories";
import EditorPage from "../../../pages/public/editor/webEditor/editor";
// import PrivateRoute from "./privateRoute";

const PrivateRouter = (props) => {
  return (
    <Switch>
      <PrivateRoute exact path="/" component={<Home />} />
      <PrivateRoute exact path="/acercade" component={<AboutPage />} />
      <PrivateRoute exact path="/contacto" component={<Contact />} />
      <PrivateRoute exact path="/accesorios" component={<Accesories />} />
      <PrivateRoute exact path="/myaccount" component={<MyAccount />} />
      <PrivateRoute exact path="/editor" component={<EditorPage />} />
      <Redirect from="*" to="/" />
    </Switch>
  );
};

PrivateRouter.propTypes = {};

export default PrivateRouter;
