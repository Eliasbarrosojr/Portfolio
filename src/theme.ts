import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#1B262C",
    },
    secondary: {
      main: "#BBE1FA",
    },
  },
  typography: {
    fontFamily: "'Barlow', serif",
    h1: {
      fontSize: "5rem",
      fontWeight: 400,
    },
    h2: {
      fontSize: "3rem",
      fontWeight: 300,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
