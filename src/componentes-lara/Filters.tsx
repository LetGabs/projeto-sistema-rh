import React from 'react'

const Filters: React.FC = () => {
  return (
    <div className="filters">
      <div className="filters-row">
        {/* Seletor de data */}
        <div className="date-picker">
          <span className="material-symbols-outlined">calendar_month</span>
          <span> 01/11/2023 - 30/11/2023 </span>
          <span className="material-symbols-outlined">expand_more</span>
        </div>

        {/* Campo de busca */}
        <div className="search">
          <input type="text" placeholder="Buscar por colaborador ou matrícula" />
        </div>

        {/* Botão de aplicar */}
        <button className="apply-button">Aplicar Filtros</button>
      </div>

      {/* Chips de categoria */}
      <div className="chips">
        {['Todos', 'Faltas', 'Atrasos', 'Horas Extras'].map((label, i) => (
          <button key={label} className={`chip ${i === 0 ? 'active' : ''}`}>
            {label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Filters
