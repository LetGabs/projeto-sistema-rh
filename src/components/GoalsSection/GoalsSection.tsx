import React from "react";
import "./GoalsSection.css";

const GoalsSection: React.FC = () => {
  return (
    <div className="goals-card">
      <h2>Conquistas da Equipe</h2>

      <div className="achievements">
        <div className="achievement amber">
          <span className="material-symbols-outlined">emoji_events</span>
          <div>
            <p className="title">Colaborador do Mês</p>
            <p className="subtitle">Parabéns, Sofia Lima!</p>
          </div>
        </div>

        <div className="achievement violet">
          <span className="material-symbols-outlined">rocket_launch</span>
          <div>
            <p className="title">Meta de Vendas Batida</p>
            <p className="subtitle">Equipe Comercial</p>
          </div>
        </div>
      </div>

      <h3>Progresso de Metas (Q3)</h3>
      <div className="progress-list">
        <div className="progress-item">
          <div className="progress-label">
            <span>Projetos Entregues</span>
            <span>85%</span>
          </div>
          <div className="progress-bar">
            <div className="fill" style={{ width: "85%" }}></div>
          </div>
        </div>

        <div className="progress-item">
          <div className="progress-label">
            <span>Satisfação do Cliente</span>
            <span>92%</span>
          </div>
          <div className="progress-bar">
            <div className="fill" style={{ width: "92%" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalsSection;
