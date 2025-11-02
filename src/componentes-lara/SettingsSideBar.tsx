import React from 'react'
import { Link } from 'react-router-dom'

const SettingsSidebar: React.FC = () => {
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
          <Link to="/configuracoes" className="nav-link active">
            <span className="material-symbols-outlined fill">tune</span>
            Preferências
          </Link>
          <Link to="#" className="nav-link">
            <span className="material-symbols-outlined">notifications</span>
            Notificações
          </Link>
          <Link to="#" className="nav-link">
            <span className="material-symbols-outlined">integration_instructions</span>
            Integrações
          </Link>
          <Link to="#" className="nav-link">
            <span className="material-symbols-outlined">shield</span>
            Segurança
          </Link>
          <Link to="/" className="nav-link">
            <span className="material-symbols-outlined">schedule</span>
            Auditoria de Ponto
          </Link>
        </nav>
      </div>

      <div>
        <Link to="#" className="nav-link">
          <span className="material-symbols-outlined">help</span>
          Ajuda
        </Link>
        <button className="exit-button">
          <span>Sair</span>
        </button>
      </div>
    </aside>
  )
}

export default SettingsSidebar
