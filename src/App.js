import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import StickyFooter from "./components/FooterComp";
import NavbarComp from "./components/NavbarComp";
import { Outlet } from "react-router-dom";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
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
