import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchView from "./SearchView";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="search" element={<SearchView />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
