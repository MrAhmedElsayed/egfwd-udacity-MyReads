import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";


function App() {
  return (
    <React.Fragment>
      <Navbar />
        <Outlet />
      <Footer />
    </React.Fragment>
  )
}

export default App;
