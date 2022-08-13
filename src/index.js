import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchView from "./views/SearchView";
import NotFoundView from "./views/NotFoundView";
import HomeView from "./views/HomeView";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomeView />} />
        <Route path="search" element={<SearchView />} />
        <Route path="*" element={<NotFoundView />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
