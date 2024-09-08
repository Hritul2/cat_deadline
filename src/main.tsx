// index.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import "./index.css";
import { RecoilRoot } from "recoil";
import Navbar from "./components/Navbar.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <RecoilRoot>
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </RecoilRoot>
    </Router>
  </StrictMode>
);
