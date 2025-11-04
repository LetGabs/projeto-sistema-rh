<<<<<<< HEAD
import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Sidebar.css";
import AjudaModal from "./AjudaModal";
import SairModal from "./SairModal";

interface Props {
  onAjudaClick?: () => void;
}

const Sidebar: React.FC<Props> = ({ onAjudaClick }) => {
  const [showAjuda, setShowAjuda] = useState(false);
  const [showSairModal, setShowSairModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const handleConfirmExit = () => {
    setShowSairModal(false);
    navigate("/"); // Volta para a tela de login
  };

  return (
    <>
      <aside className="sidebar">
        <div>
          <div className="profile">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGQX0FMneZONJRTHEy4zgL5jE_HOVPDziVnp_-q_iVwS91Lb33GU6VfiBTj0f_Z7p0PM09sqA9SiHhbz4lJT2Oef8QpcOL-9GaO0OokO0RJCMR5tLHZ8xJb8LvjWE5xv7qMpmoZ19NhT0dQTdz18TL-cqIisNyqi9ezst9hmv1rCtjs96VNT8runIo4wRDgaW44uAdml7j1bdk-d8HS-G02wZDaEsLG3AUVm7m0rs0H476Ib_A4eZXTeb8PgQSdaf1VMGLtYb-0to"
              alt="Admin RH"
            />
            <div>
              <h1>Admin RH</h1>
              <p>admin@empresa.com</p>
            </div>
          </div>

          <nav>
            <Link to="/colaboradores" className={`nav-link ${isActive('/colaboradores') ? 'active' : ''}`}>
              <span className="material-symbols-outlined">groups</span>
              Colaboradores
            </Link>
            <Link to="/registro" className={`nav-link ${isActive('/registro') ? 'active' : ''}`}>
              <span className="material-symbols-outlined">check_in_out</span>
              Registro de Ponto
            </Link>
            <Link to="/auditoria" className={`nav-link ${isActive('/auditoria') ? 'active' : ''}`}>
              <span className="material-symbols-outlined">history</span>
              Auditoria de Ponto
            </Link>
            <Link to="/relatorios" className={`nav-link ${isActive('/relatorios') ? 'active' : ''}`}>
              <span className="material-symbols-outlined">bar_chart</span>
              Relatórios de Ponto
            </Link>
            <Link to="/configuracoes" className={`nav-link ${isActive('/configuracoes') ? 'active' : ''}`}>
              <span className="material-symbols-outlined">tune</span>
              Configurações
            </Link>
          </nav>
        </div>

        <div className="sidebar-footer">
          <button className="nav-link-ajuda" onClick={() => {
            setShowAjuda(true);
            onAjudaClick?.();
          }}>
            <span className="material-symbols-outlined">help</span>
            Ajuda
          </button>
          <button className="exit-button" onClick={() => setShowSairModal(true)}>
            <span className="material-symbols-outlined">logout</span>
            Sair
          </button>
        </div>
      </aside>

      {showAjuda && <AjudaModal onClose={() => setShowAjuda(false)} />}
      {showSairModal && (
        <SairModal
          onClose={() => setShowSairModal(false)}
          onConfirm={handleConfirmExit}
        />
      )}
    </>
  );
};

export default Sidebar;
=======
import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <div>
        <div className="profile">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGQX0FMneZONJRTHEy4zgL5jE_HOVPDziVnp_-q_iVwS91Lb33GU6VfiBTj0f_Z7p0PM09sqA9SiHhbz4lJT2Oef8QpcOL-9GaO0OokO0RJCMR5tLHZ8xJb8LvjWE5xv7qMpmoZ19NhT0dQTdz18TL-cqIisNyqi9ezst9hmv1rCtjs96VNT8runIo4wRDgaW44uAdml7j1bdk-d8HS-G02wZDaEsLG3AUVm7m0rs0H476Ib_A4eZXTeb8PgQSdaf1VMGLtYb-0to"
            alt="Admin RH"
          />
          <div>
            <h1>Admin RH</h1>
            <p>admin@empresa.com</p>
          </div>
        </div>

        <nav>
          <NavLink to="/colaboradores" className="nav-link">
            <span className="material-symbols-outlined">groups</span>
            Colaboradores
          </NavLink>
          <NavLink to="/controle-ponto" className="nav-link">
            <span className="material-symbols-outlined">check_in_out</span>
            Registro de Ponto
          </NavLink>
          <NavLink to="/auditoria" className="nav-link">
            <span className="material-symbols-outlined">history</span>
            Auditoria de Ponto
          </NavLink>
          <NavLink to="/relatorios" className="nav-link">
            <span className="material-symbols-outlined">bar_chart</span>
            Relatórios
          </NavLink>
          <NavLink to="/configuracoes" className="nav-link">
            <span className="material-symbols-outlined">tune</span>
            Configurações
          </NavLink>
        </nav>
      </div>

      <div className="sidebar-footer">
        <NavLink to="/ajuda" className="nav-link-ajuda">
          <span className="material-symbols-outlined">help</span>
          Ajuda
        </NavLink>
        <button className="exit-button">
          <span className="material-symbols-outlined">logout</span>
          Sair
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
>>>>>>> 5bc3cfb00f13230d406d1c57ebba92ecbf6c3d1d
