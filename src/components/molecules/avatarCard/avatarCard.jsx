// Utils & config
import React from "react";
import { useTheme } from "@material-ui/core";
import fonts from "../../../styles/fonts.module.scss";

//External components
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";

import img from "../../../assets/images/navbarBackgroundImg.png";

const AvatarCard = (props) => {
  const theme = useTheme();

  const useStyles = makeStyles({
    root: {
      maxWidth: 300,
      padding: "0px",
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    avatar: {
      width: theme.spacing(12),
      height: theme.spacing(12),
    },
  });

  const classes = useStyles();

  return (
    <Card className={classes.root} style={{ backgroundColor: theme.palette.background.primary, margin: "auto" }}>
      <CardContent style={{ alignItems: "center", flexDirection: "column", display: "flex" }}>
        <Avatar src={img} alt="Remy Sharp" className={classes.avatar} />
        <Typography
          className={classes.pos}
          color="textPrimary"
          style={{ fontFamily: fonts.paragraphFont, marginTop: theme.spacing(2), fontSize: 18, fontWeight: "Bold" }}
        >
          {props.info.title}
        </Typography>
        <Typography color="textPrimary" style={{ fontSize: 16, marginTop: theme.spacing(2) }}>
          {props.info.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AvatarCard;
