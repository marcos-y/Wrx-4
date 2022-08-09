// Utils & config
import React from "react";
// import PropTypes from "prop-types";
// import { useTheme } from "@material-ui/core/styles";
// import useMediaQuery from "@material-ui/core/useMediaQuery";

// External components

// Internal components
import Layout from "../../../components/layout/layout/layout";
// import MobileSidebar from "../../../components/layout/drawers/mobileDrawer";
import HomeSection from "./homeSection/homeSection";
import AccesoriesSection from "./accesoriesSection/accesoriesSection";
import VehiclesSection from "./vehiclesSection/vehiclesSection";
import ExperienceSection from "./experienceSection/experienceSection";
import InstructionsSection from "./instructionsSection/instructionsSection";
import PurchaseGroupSection from "./purchaseGroupSection/purchaseGroupSection";
import FaqSection from "./faqSection/faqSection";
import Footer from "./footer/footer";

const Home = (props) => {
  // const theme = useTheme();
  // const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      {/* {isMdUp ? <Navbar /> : <MobileSidebar sidebarOptions={[]} />} */}
      <Layout>
        <HomeSection />
        <AccesoriesSection />
        <VehiclesSection />
        <ExperienceSection />
        <InstructionsSection />
        <PurchaseGroupSection />
        <FaqSection />
        <Footer />
      </Layout>
    </>
  );
};

Home.propTypes = {};

export default Home;
