import React from 'react'
import type { Funcionario } from './AuditPage'

interface Props {
  funcionario: Funcionario
}

const DetailsPanel: React.FC<Props> = ({ funcionario }) => {
  return (
    <aside className="details-panel">
      <div className="panel-header">
        <h3>Detalhes da Ocorrência</h3>
        <button>
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>

      <div className="panel-content">
        <div className="profile">
          <img
            src={funcionario.foto}
          />
          <div>
            <p>{funcionario.nome}</p>
            <p>{funcionario.id}</p>
          </div>
        </div>

        <div className="details">
          <p><strong>Data:</strong> {funcionario.data}</p>
          <p><strong>Horário Esperado:</strong> {funcionario.esperado}</p>
          <p><strong>Horário Registrado:</strong> {funcionario.registrado}</p>
          <p><strong>Inconsistência:</strong> {funcionario.tipo}</p>
        </div>

        <div className="form">
          <label htmlFor="action-select">Ação a ser tomada</label>
          <select id="action-select">
            <option>Abonar Atraso</option>
            <option>Justificar Falta</option>
            <option>Aprovar Hora Extra</option>
            <option>Reprovar</option>
          </select>

          <label htmlFor="justification">Justificativa / Observações</label>
          <textarea
            id="justification"
            rows={4}
            placeholder="Ex: Atestado médico, problema no transporte..."
          />
        </div>

        <div className="form-actions">
          <button className="cancel">Cancelar</button>
          <button className="save">Salvar Alterações</button>
        </div>
      </div>
    </aside>
  )
}

export default DetailsPanel
