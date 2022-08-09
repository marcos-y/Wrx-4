// Utils & config
import React from "react";
import { useTheme } from "@material-ui/core";

// External components

// Internal components
import SectionContainer from "../../../../components/layout/sectionContainer/sectionContainer";
import Title from "./title/title";
import Subtitle from "./subtitle/subtitle";
import CallToAction from "./callToAction/callToAction";

// Icons & images
import bannerRuedas from "../../../../assets/images/banner-ruedas.jpg";

const PurchaseGroupSection = (props) => {
  const theme = useTheme();

  return (
    <SectionContainer
      maxWidth={false}
      containerStyle={{
        backgroundImage: `url(${bannerRuedas})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
      }}
    >
      <Title />
      <Subtitle />
      <CallToAction />
    </SectionContainer>
  );
};

PurchaseGroupSection.propTypes = {};

export default PurchaseGroupSection;
