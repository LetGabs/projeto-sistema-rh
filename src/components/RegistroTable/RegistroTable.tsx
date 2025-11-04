import React from "react";
import "./RegistroTable.css";

export interface Registro {
  id: number;
  nome: string;
  cargo: string;
  avatar: string;
  status: "Presente" | "Atraso" | "Ausente" | "Folga";
  entrada1: string;
  saida1: string;
  entrada2: string;
  saida2: string;
  horas: string;
}

interface RegistroTableProps {
  registros: Registro[];
}

const RegistroTable: React.FC<RegistroTableProps> = ({ registros }) => {
  return (
    <div className="registro-table-container">
      <div className="table-wrapper">
        <table className="registro-table">
          <thead>
            <tr>
              <th>Colaborador</th>
              <th>Status</th>
              <th>Entrada 1</th>
              <th>Saída 1</th>
              <th>Entrada 2</th>
              <th>Saída 2</th>
              <th>Horas Trab.</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {registros.map((r) => (
              <tr key={r.id}>
                <td>
                  <div className="colaborador-cell">
                    <img src={r.avatar} alt={`Avatar de ${r.nome}`} />
                    <div>
                      <div className="nome">{r.nome}</div>
                      <div className="cargo">{r.cargo}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className={`status ${r.status.toLowerCase()}`}>
                    {r.status}
                  </span>
                </td>
                <td>{r.entrada1}</td>
                <td>{r.saida1}</td>
                <td>{r.entrada2}</td>
                <td>{r.saida2}</td>
                <td className="horas">{r.horas}</td>
                <td className="acoes">
                  <button>
                    <span className="material-symbols-outlined">more_vert</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegistroTable;
