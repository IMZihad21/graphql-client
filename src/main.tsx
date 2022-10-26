import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ThemeLayout from "./Layouts/ThemeLayout";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeLayout>
      <App />
    </ThemeLayout>
  </React.StrictMode>
);
