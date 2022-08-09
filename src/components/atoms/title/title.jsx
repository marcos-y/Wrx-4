// Utils & config
import React from "react";
import { useTheme } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import fonts from "../../../styles/fonts.module.scss";

//External components
import Typography from "@material-ui/core/Typography";

const Title = (props) => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <Typography
        align="center"
        color="textPrimary"
        style={{ marginBottom: theme.spacing(8), fontFamily: fonts.titleFont, fontSize: isMdUp ? 24 : 32 }}
      >
        {props.title}
      </Typography>
    </>
  );
};

export default Title;
