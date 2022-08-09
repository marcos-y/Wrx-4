// Utils & config
import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import darkTheme from "../../styles/themes/darkTheme";

const MaterialThemeProvider = (props) => {
  return <ThemeProvider theme={darkTheme}>{props.children}</ThemeProvider>;
};

export default MaterialThemeProvider;
