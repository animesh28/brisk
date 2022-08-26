import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./routes";
import Nav from "./components/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <App />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
