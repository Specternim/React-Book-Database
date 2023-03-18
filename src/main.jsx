import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "./contexts/books";
import App from "./App";

import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);
