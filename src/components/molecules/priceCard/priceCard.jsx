import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";

//External components
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import InfoIcon from "@material-ui/icons/Info";
import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

//Internal components
import img from "../../../assets/images/navbarBackgroundImg.png";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const PriceCard = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media} image={img} title="" />
          <CardContent style={{ padding: "24px 16px" }}>
            <Typography variant="h5" style={{ fontSize: 16, fontWeight: "Bold", marginBottom: theme.spacing(2) }} align="left">
              {props.accesory.name}
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              color="textSecondary"
              style={{ fontSize: 13, fontWeight: "light", marginBottom: theme.spacing(4) }}
              component="p"
              align="left"
            >
              {props.accesory.model}
            </Typography>
            <Typography variant="h5" component="h2" style={{ fontSize: 24, fontWeight: "Bold" }} align="left">
              {props.accesory.price} €
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions style={{ paddingBottom: theme.spacing(3) }}>
          <IconButton style={{ padding: "0px" }} aria-label="delete">
            <InfoIcon />
          </IconButton>
          <Button size="small" color="white" startIcon={<AddShoppingCartIcon />} style={{ backgroundColor: "green", width: "100%" }}>
            Agregar
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default PriceCard;
