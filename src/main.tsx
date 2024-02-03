import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "@/providers/index.tsx";

import routeRoot from "./Root";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider>{routeRoot}</Provider>
  </React.StrictMode>,
);
