// Utils & config
import React from "react";
import styles from "./socialIcon.module.scss";
import { useMediaQuery } from "@material-ui/core";

// External components
import Instagram from "@material-ui/icons/Instagram";
import Whatsapp from "@material-ui/icons/WhatsApp";
import Linkedin from "@material-ui/icons/LinkedIn";
import Box from "@material-ui/core/Box";

// Internal components

const SocialIcons = (props) => {
  const isMdUp = useMediaQuery("(min-width:960px)");

  return (
    <Box
      display="flex"
      justifyContent={isMdUp ? "flex-start" : "space-evenly"}
      alignItems="center"
      maxWidth={200}
      margin={isMdUp ? "8px 0px" : "auto"}
    >
      <Linkedin className={styles.socialIcon} onClick={() => window.open("https://www.linkedin.com/company/novolabsxyz/")} />
      <Instagram className={styles.socialIcon} onClick={() => window.open("https://www.instagram.com/wrx4offroad")} />
      <Whatsapp className={styles.socialIcon} onClick={() => window.open("https://wa.me/+34672279105")} />
    </Box>
  );
};

SocialIcons.propTypes = {};

export default SocialIcons;
