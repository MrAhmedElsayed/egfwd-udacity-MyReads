import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from './views/Home';
import SearchPage from './views/Search';
import NotFound from './views/NotFound';
import SignIn from './views/SignIn';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomeView />} />
        <Route path="search" element={<SearchPage />} />
        <Route path='sign-in' element={<SignIn />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

