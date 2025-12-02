import React from "react";
import "./ColaboradoresTable.css";
export interface Colaborador {
  id: number;
  nome: string;
  cargo_id: number;
  departamento_id: number;
  cargo: string;
  departamento: string;
  status: "Ativo" | "Inativo" | "Férias";
}

interface Props {
  colaboradores: Colaborador[];
  onEdit: (c: Colaborador) => void;
  onDelete: (id: number) => void;
}

const ColaboradoresTable: React.FC<Props> = ({
  colaboradores,
  onEdit,
  onDelete,
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
              <td>{colab.cargo_id }</td>
              <td>{colab.departamento_id}</td>
              <td>
                <span className={`status ${colab.status.toLowerCase()}`}>
                  {colab.status}
                </span>
              </td>
              <td>
                <button onClick={() => onEdit(colab)} className="action-button">
                  ✏️
                </button>

                <button
                  onClick={() => onDelete(colab.id)}
                  className="action-button delete"
                >
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ColaboradoresTable;
