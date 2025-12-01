import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import api from "../../services/api"; // certifique-se que está importando corretamente
import "./Sidebar.css";
import AjudaModal from "./AjudaModal";
import SairModal from "./SairModal";

interface Props {
  onAjudaClick?: () => void;
}

const Sidebar: React.FC<Props> = ({ onAjudaClick }) => {
  const [showAjuda, setShowAjuda] = useState(false);
  const [showSairModal, setShowSairModal] = useState(false);
  const [fotoPerfil, setFotoPerfil] = useState<string>("/default-profile.png");

  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const handleConfirmExit = () => {
    setShowSairModal(false);
    navigate("/");
  };

  // 👉 Buscar foto do backend
  useEffect(() => {
    const fetchFoto = async () => {
      try {
        const response = await api.get("/config/foto-perfil");
        if (response.data.foto_url) {
          setFotoPerfil(response.data.foto_url);
        }
      } catch (error) {
        console.error("Erro ao buscar foto de perfil:", error);
      }
    };

    fetchFoto();
  }, []);

  return (
    <>
      <aside className="sidebar">
        <div>
          <div className="profile">
            <img src={fotoPerfil} alt="Admin RH" />
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
            <Link to="/controlePonto" className={`nav-link ${isActive('/controlePonto') ? 'active' : ''}`}>
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
