import React from 'react'
import { Link, useLocation } from 'react-router-dom'

interface Props {
  onAjudaClick?: () => void
}

const Sidebar: React.FC<Props> = ({ onAjudaClick }) => {
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

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
          <Link to="#" className={`nav-link ${isActive('/colaboradores') ? 'active' : ''}`}>
            <span className="material-symbols-outlined">groups</span>
            Colaboradores
          </Link>
          <Link to="#" className={`nav-link ${isActive('/registro') ? 'active' : ''}`}>
            <span className="material-symbols-outlined">check_in_out</span>
            Registro de Ponto
          </Link>
          <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
            <span className="material-symbols-outlined">history</span>
            Auditoria de Ponto
          </Link>
          <Link to="#" className={`nav-link ${isActive('/relatorios') ? 'active' : ''}`}>
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
        <button className="nav-link-ajuda" onClick={onAjudaClick}>
          <span className="material-symbols-outlined">help</span>
          Ajuda
        </button>
        <button className="exit-button">
          <span className="material-symbols-outlined">logout</span>
          Sair
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
