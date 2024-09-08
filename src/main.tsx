import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import Navbar from "./Navbar";

import "./index.css";
import { RecoilRoot } from "recoil";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Navbar />
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </StrictMode>
);
