import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Reports from "./pages/Reports/Reports";
import "./style/index.css";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/relatorios" element={<Reports />} />
      </Routes>
    </Router>
  );
};

export default App;
