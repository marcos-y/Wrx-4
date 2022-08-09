import React, { FC } from "react";
import { makeStyles, Typography } from "@material-ui/core";

import { WhatsApp, Email, Room } from "@material-ui/icons/";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    margin: "18px auto",
    justifyContent: "center",
  },

  social: {
    margin: 18,
    display: "flex",
  },

  text: {
    color: "#C1C1C1",
    marginLeft: "6px",
    cursor: "pointer",
    fontWeight: "bold",
    textDecoration: "none",
  },

  link: {
    textDecoration: "none",
    color: "#C1C1C1",
  },
}));

interface ISocialIcon {
  text: string;
  urlAction: string;
  icon: "whatsapp" | "email" | "ubication";
}

const ContactBanner: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SocialIcon text="(+34) 686 999 999" icon="whatsapp" urlAction="https://wa.me/+34686999999" />
      <SocialIcon text="info@wrx4.com" icon="email" urlAction="" />
      <SocialIcon text="Liria, Valencia" icon="ubication" urlAction="https://goo.gl/maps/DKpHh9oyAC76rFFz6" />
    </div>
  );
};

const SocialIcon: FC<ISocialIcon> = (props) => {
  const classes = useStyles();
  const onClick = () => window.open(props.urlAction, "_blank");

  const socialMediaIcons = {
    email: <Email />,
    ubication: <Room />,
    whatsapp: <WhatsApp />,
  };

  return (
    <div className={classes.social}>
      {socialMediaIcons[props.icon]}

      {props.icon === "email" ? (
        <Typography className={classes.text}>
          <a className={classes.link} href="mailto: abc@example.com?subject=Contacto con WRX4!">
            Send Email
          </a>
        </Typography>
      ) : (
        <Typography onClick={onClick} className={classes.text}>
          {props.text}
        </Typography>
      )}
    </div>
  );
};

export default ContactBanner;
