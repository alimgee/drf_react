import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Header from './components/Header';
import Footer from './components/Footer';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Header />
    <App/>
    <Footer />
  </React.StrictMode>
);

reportWebVitals();