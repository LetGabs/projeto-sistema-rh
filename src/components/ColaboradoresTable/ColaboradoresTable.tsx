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
}

const ColaboradoresTable: React.FC<Props> = ({ colaboradores }) => {
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
                <button className="action-button">
                  <span className="material-symbols-outlined">more_vert</span>
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
