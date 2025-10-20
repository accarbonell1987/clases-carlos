import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";

import PokeRoutes from "./Routes/Routes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PokeRoutes />
  </StrictMode>
);
