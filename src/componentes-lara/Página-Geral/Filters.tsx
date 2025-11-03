import React from 'react'

interface Props {
  busca: string
  setBusca: (valor: string) => void
  filtroTipo: string
  setFiltroTipo: (tipo: string) => void
  dataInicio: string
  setDataInicio: (valor: string) => void
  dataFim: string
  setDataFim: (valor: string) => void
}

const Filters: React.FC<Props> = ({
  busca,
  setBusca,
  filtroTipo,
  setFiltroTipo,
  dataInicio,
  setDataInicio,
  dataFim,
  setDataFim,
}) => {
  return (
    <div className="filters-container">
      <div className="date-range">
        <span className="material-symbols-outlined">calendar_month</span>
        <div className='calendar-visual'>
          <input
            type="date"
            value={dataInicio}
            onChange={(e) => setDataInicio(e.target.value)}
          />
          <span> - </span>
          <input
            type="date"
            value={dataFim}
            onChange={(e) => setDataFim(e.target.value)}
          />
        </div>
      </div>

      <input
        type="text"
        className="search-input"
        placeholder="Buscar por colaborador"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />

      <div className="filter-buttons">
        {['Todos', 'Faltas', 'Atrasos', 'Horas Extras'].map((tipo) => (
          <button
            key={tipo}
            className={`filter-button ${filtroTipo === tipo ? 'active' : ''}`}
            onClick={() => setFiltroTipo(tipo)}
          >
            {tipo}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Filters
