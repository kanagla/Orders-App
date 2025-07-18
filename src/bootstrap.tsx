import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const container = document.getElementById("orders-root");
if (!container) throw new Error("No container element found with id 'orders-root'");

const root = ReactDOM.createRoot(container);
root.render(<App />);
