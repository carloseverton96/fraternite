import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./css/index.css";
import { HelmetProvider } from "react-helmet-async";
import { Scroll } from "lucide-react";
import ScrollToTop from "./components/ScrolltoTop";


createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <ScrollToTop />
        <App />
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>
);
