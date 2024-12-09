import React from "react";
import { createRoot } from "react-dom/client";
import "./popup.css";

const Popup = () => {
  return (
    <div className="popup-content">
      <h3>Welcome to Your Chrome Extension</h3>
      <p>This is where you can display information or interact with the user.</p>
      <p>React & TS</p>
      <img src="icon.png" alt="react" width={300} />
    </div>
  );
};

const root = document.createElement("div");
root.id = "root";

document.body.appendChild(root);
const rootDiv = createRoot(root);

rootDiv.render(<Popup />);
