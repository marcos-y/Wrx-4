// Utils & config
import React from "react";
import styles from "./title.module.scss";

// External components
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Hidden from "@material-ui/core/Hidden";

// Internal components
import SectionTitle from "../../../../../components/atoms/sectionTitle/sectionTitle";

// Icons & images
import wrxLogo from "../../../../../assets/images/wrx4_logo.svg";

const Title = (props) => {
  return (
    <Grid item xs={12} style={{ paddingTop: "0px", paddingBottom: "0px" }}>
      <Box className={styles.titleContainer}>
        <Hidden mdUp>
          <img src={wrxLogo} alt="wrx4offroad" style={{ maxWidth: 162, marginBottom: 16 }} />
        </Hidden>
        <SectionTitle>UNETE A UN GRUPO DE COMPRA</SectionTitle>
        <Hidden smDown>
          <img src={wrxLogo} alt="wrx4offroad" style={{ maxWidth: 162, marginBottom: 16 }} />
        </Hidden>
      </Box>
    </Grid>
  );
};

Title.propTypes = {};

export default Title;
