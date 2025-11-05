import React from "react";
import "./ColaboradoresTable.css";

export interface Colaborador {
  id: number;
  nome: string;
  cargo: string;
  departamento: string;
  status: "Ativo" | "Inativo" | "Férias";
}

interface Props {
  colaboradores: Colaborador[];
  onAtualizar: (colaborador: Colaborador) => void;
  onRemover: (id: number) => void;
}

const ColaboradoresTable: React.FC<Props> = ({
  colaboradores,
  onAtualizar,
  onRemover,
}) => {
  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Cargo</th>
            <th>Departamento</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {colaboradores.map((colab) => (
            <tr key={colab.id}>
              <td>{colab.nome}</td>
              <td>{colab.cargo}</td>
              <td>{colab.departamento}</td>
              <td>
                <span className={`status ${colab.status.toLowerCase()}`}>
                  {colab.status}
                </span>
              </td>
              <td>
                <div className="action-buttons">
                  <button
                    className="btn-editar"
                    onClick={() => onAtualizar(colab)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn-remover"
                    onClick={() => onRemover(colab.id)}
                  >
                    Remover
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ColaboradoresTable;
