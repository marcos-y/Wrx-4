// Utils & config
import React from "react";
import { useTheme } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import fonts from "../../../styles/fonts.module.scss";

//External components
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import img from "../../../assets/images/navbarBackgroundImg.png";

const ImageCard = (props) => {
  const theme = useTheme();

  const useStyles = makeStyles({
    root: {
      maxWidth: 400,
    },
    media: {
      height: 140,
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

  const classes = useStyles();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <Card className={classes.root} style={{ backgroundColor: props.info.backgroundcolor, marginBottom: theme.spacing(3) }}>
        {/* <CardActionArea focusRipple={false}> */}
        <CardMedia className={classes.media} image={img} title="Contemplative Reptile" />
        <CardContent style={{ padding: "0px" }}>
          <Typography
            className={classes.pos}
            color="textPrimary"
            style={{
              fontFamily: fonts.paragraphFont,
              fontSize: isMdUp ? 20 : 18,
              textAlign: "left",
              marginTop: theme.spacing(2),
              marginLeft: props.marginLeft,
            }}
          >
            {props.info.title}
          </Typography>
          <Typography
            color="textPrimary"
            style={{
              fontFamily: fonts.paragraphFont,
              fontSize: isMdUp ? 14 : 16,
              marginBottom: theme.spacing(2),
              marginLeft: props.marginLeft,
              textAlign: "left",
            }}
          >
            {props.info.description}
          </Typography>
        </CardContent>
        {/* </CardActionArea> */}
      </Card>
    </>
  );
};

export default ImageCard;
