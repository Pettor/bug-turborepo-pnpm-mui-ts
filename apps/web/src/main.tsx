import { StrictMode } from "react";
import ReactDOMClient from "react-dom/client";
import App from "./App";

ReactDOMClient.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
