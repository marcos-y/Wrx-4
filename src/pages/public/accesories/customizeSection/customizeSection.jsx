// Utils & config
import React from "react";
import { useTheme } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import fonts from "../../../../styles/fonts.module.scss";

//Internal components
import CustomizeCarousel from "./customizeCarousel";
import CustomizeCarouselMobile from "./customizeCarouselMobile";

//External components
import Typography from "@material-ui/core/Typography";

const CustomizeSection = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  const items = [
    {
      name: "SUZUKI JIMNY 2021",
      description: "PERSONALIZE SU SUZUKI ",
    },
    { name: "JEEP WRANGLER 2020", description: "PERSONALIZE SU SUZUKI" },
    { name: "SUZUKI JIMNY 2021", description: "PERSONALIZE SU SUZUKI" },
    { name: "SUZUKI JIMNY 2021", description: "PERSONALIZE SU SUZUKI" },
    { name: "SUZUKI JIMNY 2021", description: "PERSONALIZE SU SUZUKI" },
    { name: "SUZUKI JIMNY 2021", description: "PERSONALIZE SU SUZUKI" },
    { name: "SUZUKI JIMNY 2021", description: "PERSONALIZE SU SUZUKI" },
    { name: "SUZUKI JIMNY 2021", description: "PERSONALIZE SU SUZUKI" },
  ];

  return (
    <div style={{ marginBottom: theme.spacing(16) }}>
      <Typography
        align="left"
        color="textPrimary"
        style={{ marginBottom: theme.spacing(8), fontFamily: fonts.titleFont, fontSize: isMdUp ? 24 : 32 }}
      >
        PERSONALIZA TU VEHÍCULO
      </Typography>
      <CustomizeCarousel items={items}></CustomizeCarousel>
      <CustomizeCarouselMobile items={items}></CustomizeCarouselMobile>
    </div>
  );
};

export default CustomizeSection;
