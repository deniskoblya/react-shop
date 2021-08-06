import React from "react"; // в переменной React хранится весь реакт
import ReactDOM from "react-dom"; // преобразует js в браузерный HTML
import "./index.css";
import App from "./App"; // в App будет храниться App.js

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
