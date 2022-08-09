// Utils & config
import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import fonts from "../../../../../styles/fonts.module.scss";

// External components
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

// Internal components
import Button from "../../../../../components/atoms/button/button";
import ArrowForward from "@material-ui/icons/ArrowForward";

const VehicleCard = (props) => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Container
      maxWidth="md"
      style={{
        // marginBottom: theme.spacing(3),
        backgroundImage: `url(${props.imageUrl})`,
        padding: theme.spacing(4),
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Grid container spacing={1}>
        {props.inverted && <Grid item xs={12} md={6}></Grid>}
        <Grid item xs={12} md={6}>
          <Box marginBottom={4}>
            <Typography align="left" color="textPrimary" style={{ fontFamily: fonts.titleFont, fontSize: isMdUp ? 32 : 24 }}>
              {props.cardTitle}
            </Typography>
          </Box>

          <Box marginBottom={4}>
            <Typography align="left" color="textPrimary" style={{ fontSize: 18 }}>
              {props.vehicleDescription}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="space-between">
            {/* <Hidden mdUp>
              <img src={wrx4Logo} alt="wrxoffroad" style={{ maxWidth: 64 }} />
            </Hidden> */}
            <Button style={{ padding: "16px 24px" }} variant="contained" color="primary" endIcon={<ArrowForward />}>
              CUSTOMIZE SU {props.vehicleBrand}
            </Button>
          </Box>
        </Grid>
        {/* <Hidden smDown>
          <Grid item xs={12} style={{ display: "flex", justifyContent: props.inverted ? "flex-start" : "flex-end" }}>
            <img src={wrx4Logo} alt="wrxoffroad" style={{ maxWidth: 128 }} />
          </Grid>
        </Hidden> */}
      </Grid>
    </Container>
  );
};

VehicleCard.propTypes = {
  inverted: PropTypes.bool,
  cardTitle: PropTypes.string.isRequired,
  vehicleDescription: PropTypes.string.isRequired,
  vehicleBrand: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default VehicleCard;
