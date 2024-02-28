import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Modal from "./components/modal/Modal";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const modal = ReactDOM.createRoot(document.getElementById("modal"));
modal.render(
  <React.StrictMode>
    <Modal />
  </React.StrictMode>
);
