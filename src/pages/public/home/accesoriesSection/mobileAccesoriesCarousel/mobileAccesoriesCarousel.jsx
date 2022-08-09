// Utils & config
import React from "react";
import styles from "./mobileAccesoriesCarousel.module.scss";

// External components
import Box from "@material-ui/core/Box";
import Hidden from "@material-ui/core/Hidden";

// Internal components
import AccesoryCard from "../accesoryCard/accesoryCard";

const MobileAccesoriesCarousel = (props) => {
  return (
    <Hidden mdUp>
      <Box className={`${styles.accesoryCarousel} noScrollbar`}>
        {props.accesories.map((accesory, index) => (
          <AccesoryCard key={index} accesory={accesory} />
        ))}
        <div style={{ minWidth: 1, width: 1, backgroundColor: "transparent" }}></div>
      </Box>
    </Hidden>
  );
};

MobileAccesoriesCarousel.propTypes = {};

export default MobileAccesoriesCarousel;
