import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./style/estilo.css";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <BrowserRouter basename="/projeto-sistema-rh">
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
} else {
  console.error("Elemento #root não encontrado no HTML!");
}
