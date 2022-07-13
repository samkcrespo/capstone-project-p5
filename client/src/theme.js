import { createTheme } from "@mui/material/styles";
//https://material-ui.com/customization/default-theme/#default-theme
//https://material-ui.com/customization/color/#color
export const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#301935",
    },
    secondary: {
      main: "#d3c1d2",
    },
    info: {
      main: "#401d2f",
    },
    background: {
      default: "#fafafa",
      paper: "#F7F4F4",
    },
    error: {
      main: "#f44336",
    },
    warning: {
      main: "#ff9800",
    },
    success: {
      main: "#4caf50",
    },
    divider: "rgba(0,0,0,0.14)",
  },
  typography: {
    fontFamily: "Roboto",
    button: {
      fontWeight: 700,
      lineHeight: 2.04,
    },
    caption: {
      fontSize: "0.8rem",
    },
    overline: {
      fontSize: "0.7rem",
    },
    body2: {
      fontSize: "0.9rem",
    },
    body1: {
      fontSize: "1.1rem",
    },
    subtitle2: {
      fontSize: "1rem",
    },
    subtitle1: {
      fontSize: "1rem",
    },
    h6: {
      fontSize: "1.1rem",
    },
  },
  props: {
    MuiList: {
      dense: true,
    },
    MuiMenuItem: {
      dense: true,
    },
    MuiTable: {
      size: "small",
    },
  },
  overrides: {
    MuiButton: {
      root: {
        background: "linear-gradient(45deg, #d3c1d2 30%, #301935 90%)",
        border: 0,
        borderRadius: 3,
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        color: "white",
        height: 48,
        padding: "0 30px",
      },
    },
  },
  shape: {
    borderRadius: 4,
  },
});

export default theme;
