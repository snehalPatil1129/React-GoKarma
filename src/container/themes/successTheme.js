/**
 * App Success Theme
 */
import { createMuiTheme } from "material-ui/styles";
import AppConfig from "../../constants/AppConfig";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: AppConfig.themeColors.grey
    },
    secondary: {
      main: AppConfig.themeColors.grey
    }
  }
});

export default theme;
