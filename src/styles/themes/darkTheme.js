import { createTheme } from "@material-ui/core/styles";
import colors from "../colors.scss";
import fonts from "../fonts.module.scss";

const darkTheme = createTheme({
  palette: {
    type: "dark",
    primary: { light: colors.firstColor, main: colors.firstColorDt, dark: colors.firstColorDt },
    secondary: { light: colors.secondColor, main: colors.secondColorDt, dark: colors.secondColorDt },
    tertiary: { main: colors.thirdColorDt },
    background: {
      default: colors.backgroundFirstColorDt,
      primary: colors.backgroundFirstColorDt,
      secondary: colors.backgroundSecondColorDt,
      tertiary: colors.backgroundThirdColorDt,
      quaternary: colors.backgroundFourthColorDt,
    },
    text: {
      primary: colors.titleColor,
      secondary: colors.paragraphColor,
    },
  },
  typography: {
    h1: { fontFamily: fonts.titleFont, fontWeight: 800 },
    h2: { fontFamily: fonts.titleFont, fontWeight: 700 },
    h3: { fontFamily: fonts.titleFont, fontWeight: 700 },
    h4: { fontFamily: fonts.titleFont, fontWeight: 700 },
    h5: { fontFamily: fonts.titleFont, fontWeight: 700 },
    h6: { fontFamily: fonts.titleFont, fontWeight: 700 },
    subtitle1: { fontFamily: fonts.titleFont, fontWeight: 700 },
    subtitle2: { fontFamily: fonts.titleFont, fontWeight: 700 },
    body1: { fontFamily: fonts.paragraphFont, fontWeight: 400 },
    body2: { fontFamily: fonts.paragraphFont, fontWeight: 400 },
    button: { fontFamily: fonts.titleFont, fontWeight: 800 },
  },
});

export default darkTheme;
