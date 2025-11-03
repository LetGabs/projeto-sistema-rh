import React from "react";
import type { Funcionario } from "../Página-Geral/AuditPage";

interface Props {
  funcionario: Funcionario;
  onClose: () => void;
}

const DetailsPanel: React.FC<Props> = ({ funcionario, onClose }) => {
  return (
    <aside className="details-panel">
      <div className="panel-header">
        <h3>Detalhes da Ocorrência</h3>
        <button className="fechar-btn" onClick={onClose}>
          ✕
        </button>
      </div>

      <div className="detalhes-container">
        <div className="perfil">
          <img src={funcionario.foto} alt={funcionario.nome} />
          <div className="info-basica">
            <h2>{funcionario.nome}</h2>
            <p>{funcionario.id}</p>
          </div>
        </div>

        <div className="info-ocorrencia">
          <p>
            <strong>Data:</strong> {funcionario.data}
          </p>
          <p>
            <strong>Horário Esperado:</strong> {funcionario.esperado}
          </p>
          <p>
            <strong>Horário Registrado:</strong> {funcionario.registrado}
          </p>
          <p>
            <strong>Inconsistência:</strong> {funcionario.tipo}
          </p>

          <label>
            <strong>Ação a ser tomada:</strong>
            <select>
              <option>Abonar Atraso</option>
              <option>Descontar</option>
              <option>Solicitar Justificativa</option>
              <option>Adicionar a Lista de Pendências</option>
            </select>
          </label>

          <label>
            <strong>Justificativa / Observações:</strong>
            <textarea placeholder="Ex: Atestado médico, problema no transporte..." />
          </label>

          <div className="botoes">
            <button className="salvar">Salvar</button>
            <button className="cancelar">Cancelar</button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default DetailsPanel;
