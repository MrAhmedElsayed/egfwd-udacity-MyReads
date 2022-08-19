import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import StickyFooter from "./components/FooterComp";
import NavbarComp from "./components/NavbarComp";
import { Outlet } from "react-router-dom";


const themeLight = createTheme({
  palette: {
    background: {
      default: "rgb(231, 235, 240)",
    },
  },
});

const themeDark = createTheme({
  palette: {
    background: {
      default: "#222222",
    },
    text: {
      primary: "#ffffff",
    },
  },
});

function App() {
  const [light, setLight] = React.useState(true);
  return (
    <ThemeProvider theme={light ? themeLight : themeDark}>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0 } }} />
      <CssBaseline />
      <NavbarComp />
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Outlet />
      </Container>
      <StickyFooter />
    </ThemeProvider>
  );
}

export default App;
