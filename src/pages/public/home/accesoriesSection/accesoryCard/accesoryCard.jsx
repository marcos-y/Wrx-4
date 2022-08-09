// Utils & config
import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import fonts from "../../../../../styles/fonts.module.scss";

// External components
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

// Internal components
import Button from "../../../../../components/atoms/button/button";

// Icons & images
import ArrowForward from "@material-ui/icons/ArrowForward";
import Bacas from "../../../../../assets/images/bacas.jpg";

const AccesoryCard = (props) => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      minHeight={isMdUp ? 500 : "unset"}
      // maxHeight={492}
      // maxWidth={352}
      width={isMdUp ? "unset" : "80%"}
      minWidth={isMdUp ? "unset" : "80%"}
      marginRight={isMdUp ? 0 : 0}
      marginLeft={isMdUp ? 0 : 2}
      style={{ backgroundColor: theme.palette.background.primary }}
    >
      <Box width="100%">
        <img src={props.image || Bacas} width="100%" height="100%" alt="img-1" />
      </Box>
      <Box display="flex" flexDirection="column" justifyContent="space-between" padding={2} flex={1}>
        <Box>
          <Typography color="textPrimary" align="left" style={{ marginBottom: theme.spacing(2), fontFamily: fonts.titleFont }}>
            {props.accesory.name}
          </Typography>
          <Typography color="textPrimary" align="left" style={{ marginBottom: theme.spacing(4) }}>
            {props.accesory.description}
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column" alignSelf={isMdUp ? "flex-start" : "center"} justifySelf="flex-end" width="100%">
          <Button endIcon={<ArrowForward />} style={{ justifyContent: "left" }}>
            Conoce más
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

AccesoryCard.propTypes = {
  accesory: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }),
};

export default AccesoryCard;
