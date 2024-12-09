import { createRoot } from "react-dom/client";
import React from "react";
import "./options.css";

const Options = () => {
  return (
    <div className="options-content">
      <h1>Options Page</h1>
      <label htmlFor="theme">Choose a FAKE theme: </label>
      <select id="theme">
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      <p>**The theme is not functional it just for demonstration</p>
    </div>
  );
};

const root = document.createElement("div");
root.id = "root";

document.body.appendChild(root);
const rootDiv = createRoot(root);

rootDiv.render(<Options />);
