import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Header from './components/Header';
import Footer from './components/Footer';
import  SignUp  from './components/Register'
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(

  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
		
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

reportWebVitals();