import React from "react";
import ReactDOM from "react-dom/client";
import Options from "./components/Options/Options";

const root = document.createElement("div");
root.id = "root-options";
document.body.appendChild(root);
const rootDiv = ReactDOM.createRoot(root);
rootDiv.render(
  <React.StrictMode>
    <Options />
  </React.StrictMode>
);
