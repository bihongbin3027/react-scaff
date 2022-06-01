import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "@/store";
import App from "@/app";
import React from "react";

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
  );
}
