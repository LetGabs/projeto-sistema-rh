<<<<<<< HEAD
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
=======
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AuditPage from './componentes-lara/Página-Geral/AuditPage'
import SettingsPage from './componentes-lara/Configurações/SettingsPage'

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AuditPage />} />
      <Route path="/configuracoes" element={<SettingsPage />} />
    </Routes>
  )
}
>>>>>>> páginas-lara

export default App;
