import React from "react";
import { Switch, Redirect } from "react-router-dom";
import { useMediaQuery, useTheme } from "@material-ui/core";

import PublicRoute from "./publicRoute";
import ScrollToTop from "../scrollToTop/scrollToTop";

import HomePage from "../../../pages/public/home/home";
import CheckoutPage from "../../../pages/public/checkout";
import AboutPage from "../../../pages/public/about/about";
import Contact from "../../../pages/public/contact/contact";
import Accesories from "../../../pages/public/accesories/accesories";
import LoginPage from "../../../pages/public/login/loginPage";
import EditorPage from "../../../pages/public/editor/webEditor/editor";
import SharedEditor from "../../../pages/public/sharedEditor/shareEditor";
import MobileEditor from "../../../pages/public/editor/mobileEditor/mobileEditor";

const PublicRouter = (props) => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <ScrollToTop />

      <Switch>
        <PublicRoute exact path="/" component={<HomePage />} />
        <PublicRoute exact path="/contacto" component={<Contact />} />
        <PublicRoute exact path="/ingresar" component={<LoginPage />} />
        <PublicRoute exact path="/acerca-de" component={<AboutPage />} />
        <PublicRoute exact path="/checkout" component={<CheckoutPage />} />
        <PublicRoute exact path="/accesorios" component={<Accesories />} />
        <PublicRoute exact path="/visualizador" component={<SharedEditor />} />
        <PublicRoute exact path="/editor" component={isMdUp ? <EditorPage /> : <MobileEditor />} />
        <Redirect from="*" to="/" />
      </Switch>

    </>
  );
};

export default PublicRouter;
