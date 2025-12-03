import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage"; 
import Reports from "./pages/Reports/Reports";
import AuditPage from "./components/Página-Geral/AuditPage";
import SettingsPage from "./components/Configurações/SettingsPage";
import Colaboradores from "./pages/Colaboradores/Colaboradores";
import ControlePonto from "./pages/ControlePonto/ControlePonto";
import "./index.css";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route path="/colaboradores" element={<Colaboradores />} />
      <Route path="/relatorios" element={<Reports />} />
      <Route path="/auditoria" element={<AuditPage />} />
      <Route path="/configuracoes" element={<SettingsPage />} />
      <Route path="/controlePonto" element={<ControlePonto />} />
    </Routes>
  );
};

export default App;
