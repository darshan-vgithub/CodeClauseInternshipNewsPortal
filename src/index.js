import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { NewsContextProvider } from "./NextContext";

createRoot(document.getElementById("root")).render(
  <NewsContextProvider>
    <App />
  </NewsContextProvider>
);
