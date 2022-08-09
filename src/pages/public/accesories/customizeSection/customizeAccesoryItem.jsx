// Utils & config
import React from "react";
import { useTheme } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import fonts from "../../../../styles/fonts.module.scss";
import Typography from "@material-ui/core/Typography";

//External components
import Grid from "@material-ui/core/Grid";

//Internal components
import Button from "../../../../components/atoms/button/button";
import ArrowForward from "@material-ui/icons/ArrowForward";

const CustomizeAccesoryItem = (props) => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <Grid
        container
        style={{
          // width: "420px",
          // minWidth: "450px",
          height: "auto",
          // backgroundColor: theme.palette.background.secondary,
          display: "flex",
          justifyContent: "spaceEvenly",
          flexWrap: "noWrap",
          // marginRight: "30px",
        }}
      >
        <Grid item xs={12} style={{ padding: "64px 32px", marginRight: 32, backgroundColor: theme.palette.background.secondary }}>
          <Typography
            align="left"
            color="textPrimary"
            style={{ fontFamily: fonts.titleFont, fontSize: isMdUp ? 24 : 16, marginBottom: theme.spacing(2) }}
          >
            {props.item.name}
          </Typography>
          <Button style={{ float: "left", marginBottom: "5px" }} variant="contained" color="primary" endIcon={<ArrowForward />}>
            {props.item.description}
          </Button>
        </Grid>

        {/* <Grid item xs={10} sm={5}  float='right' style={{display:'flex',alignItems:'center',justifyContent:'center',marginLeft:'20px',marginRight:'5px'}}>
                        <img src={img}  minWidth='100px' height='auto' width="100%" ></img>
                    </Grid> */}
      </Grid>
    </>
  );
};

export default CustomizeAccesoryItem;
