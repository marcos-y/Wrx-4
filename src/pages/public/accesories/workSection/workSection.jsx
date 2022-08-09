// Utils & config
import React from "react";
import { useTheme } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import fonts from "../../../../styles/fonts.module.scss";

//External components
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";

import img from "../../../../assets/images/navbarBackgroundImg.png";

const WorkSection = (props) => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Grid container spacing={4} style={{ padding: theme.spacing(3) }}>
      <Hidden smDown>
        {props.inverted && (
          <Grid item xs={12} md={6} style={{ display: "flex" }}>
            <img src={img} alt="wrxoffroad" maxWidth="300px" width="100%" height="auto" style={{ alignSelf: "center" }} />
          </Grid>
        )}
      </Hidden>

      <Grid item xs={12} md={6}>
        <Box marginBottom={4}>
          <Typography align="left" color="textPrimary" style={{ fontFamily: fonts.titleFont, fontSize: isMdUp ? 24 : 20 }}>
            {props.title}
          </Typography>
        </Box>

        <Box marginBottom={4}>
          <Typography align="left" color="textPrimary" style={{ fontSize: isMdUp ? 18 : 14, fontFamily: fonts.paragraphFont }}>
            {props.paragraph}
          </Typography>
        </Box>

        <Hidden mdUp>
          {props.inverted && (
            <Grid item xs={12} md={6}>
              <img src={img} alt="wrxoffroad" maxWidth="300px" width="100%" height="auto" />
            </Grid>
          )}
        </Hidden>
      </Grid>

      <Grid item xs={12} md={6} style={{ display: "flex" }}>
        {!props.inverted && <img src={img} alt="wrxoffroad" maxWidth="300px" width="100%" height="auto" style={{ alignSelf: "center" }} />}
      </Grid>
    </Grid>
  );
};

export default WorkSection;
