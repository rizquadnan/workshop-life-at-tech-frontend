import "@mantine/core/styles.css";

import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "@/providers/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider />
  </React.StrictMode>,
);
