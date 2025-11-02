import React from "react";
import "./StatsCards.css";

const StatsCards: React.FC = () => {
  return (
    <section className="stats-cards">
      <div className="card">
        <h3>Total de Colaboradores</h3>
        <p className="number">128</p>
      </div>
      <div className="card">
        <h3>Horas Trabalhadas</h3>
        <p className="number">19.243h</p>
      </div>
      <div className="card">
        <h3>Atrasos</h3>
        <p className="number">83</p>
      </div>
      <div className="card">
        <h3>Horas Extras</h3>
        <p className="number">512h</p>
      </div>
    </section>
  );
};

export default StatsCards;
