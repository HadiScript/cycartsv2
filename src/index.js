import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <div className="bg-cy-dark h-[100vh]"> */}
    <div style={{ backgroundColor: "#090d1c" }} className="h-[100vh]">
      <App />
    </div>
  </React.StrictMode>
);
