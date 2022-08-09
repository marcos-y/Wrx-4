// Utils & config
import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import styles from "./iconText.module.scss";

// External components
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";

const IconText = (props) => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box className={props.responsive ? styles.responsiveIconTextContainer : styles.iconTextContainer}>
      <Icon
        style={{
          color: theme.palette.text.primary,
          marginRight: isMdUp ? theme.spacing(1) : props.responsive ? 0 : theme.spacing(1),
          fontSize: isMdUp ? 32 : props.responsive ? 64 : 32,
          marginBottom: isMdUp ? 0 : props.responsive ? 24 : 0,
        }}
      >
        {props.iconName}
      </Icon>
      <Typography
        align={isMdUp ? "left" : props.responsive ? "center" : "left"}
        variant="body1"
        color="textPrimary"
        style={{ marginBottom: 0, fontSize: 16, fontWeight: "Bold" }}
      >
        {props.text}
      </Typography>
    </Box>
  );
};

IconText.propTypes = {
  iconName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  responsive: PropTypes.bool.isRequired,
};

export default IconText;
