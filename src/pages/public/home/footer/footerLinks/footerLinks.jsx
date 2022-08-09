// Utils & config
import React from "react";
import PropTypes from "prop-types";
import styles from "./footerLinks.module.scss";

// External components
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

// Internal components

const FooterLinks = (props) => {
  return (
    <>
      <Typography variant="h6" color="textPrimary" align="left" style={{ marginBottom: 16 }}>
        {props.title}
      </Typography>
      <Box display="flex" flexDirection="column" alignItems="flex-start">
        {props.links.map((link, index) => (
          <Link key={index} className={styles.footerLink} to={link.url}>
            {link.title}
          </Link>
        ))}
      </Box>
    </>
  );
};

FooterLinks.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({ title: PropTypes.string.isRequired })),
};

export default FooterLinks;
