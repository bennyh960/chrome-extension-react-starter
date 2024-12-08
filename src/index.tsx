// import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import Popup from "./components/Popup/Popup";
import React from "react";

const root = document.createElement("div");
root.id = "root";
document.body.appendChild(root);
const rootDiv = createRoot(root);
rootDiv.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
);
