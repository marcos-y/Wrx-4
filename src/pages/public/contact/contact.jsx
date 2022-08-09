// Utils & config
import React from "react";

//Internal components
import NavbarBackground from "../../../components/molecules/navbarBackground/navbarBackground";
import Footer from "../home/footer/footer";
import FormSection from "./formSection/formSection";
import IframeSection from "./iframeSection/iframeSection";

const Contact = () => {
  return (
    <>
      <NavbarBackground title={"CONTACTO"}></NavbarBackground>
      <FormSection></FormSection>
      <IframeSection></IframeSection>
      <Footer></Footer>
    </>
  );
};

export default Contact;
