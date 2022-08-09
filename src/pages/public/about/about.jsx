// Utils & config
import React from "react";
import { useTheme } from "@material-ui/core";

//Internal components
import NavbarBackground from "../../../components/molecules/navbarBackground/navbarBackground";
import Footer from "../home/footer/footer";
import HistorySection from "./historySection/historySection";
import WhyUsSection from "./whyusSection/whyusSection";
import WorkSection from "./workSection/workSection";
import TeamSection from "./teamSection/teamSection";

//External components
import Container from "@material-ui/core/Container";

const About = () => {
  const theme = useTheme();

  return (
    <>
      <NavbarBackground title={"ACERCA DE WRX4"} />
      <Container
        maxWidth="lg"
        style={{
          marginTop: theme.spacing(3),
          marginBottom: theme.spacing(8),
          backgroundColor: theme.palette.background,
          padding: theme.spacing(4),
          display: "flex",
          flexDirection: "column",
        }}
      >
        <HistorySection inverted={false} />
        <WhyUsSection />
        <WorkSection />
        <TeamSection />
      </Container>
      <Footer />
    </>
  );
};

export default About;
