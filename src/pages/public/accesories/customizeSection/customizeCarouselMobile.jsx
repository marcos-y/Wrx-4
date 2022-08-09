//Utils & configs
import React from "react";
import styles from "./customizeCarouselMobile.module.scss";

//External components
import Box from "@material-ui/core/Box";
import Hidden from "@material-ui/core/Hidden";

//Internal components
import CustomizeAccesoryItem from "./customizeAccesoryItem";

const CustomizeCarouselMobile = (props) => {
  return (
    <>
      <Hidden mdUp>
        <Box className={`${styles.itemCarousel} noScrollbar`} style={{ marginRight: "5px" }}>
          {props.items.map((item, index) => (
            <CustomizeAccesoryItem style={{ marginRight: "5px" }} key={index} item={item} />
          ))}
          <div style={{ minWidth: 1, width: 3, backgroundColor: "transparent" }}></div>
        </Box>
      </Hidden>
    </>
  );
};

export default CustomizeCarouselMobile;
