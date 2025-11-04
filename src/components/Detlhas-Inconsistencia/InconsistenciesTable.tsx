import React, { useState } from "react";
import type { Funcionario } from "../../components/Página-Geral/AuditPage";

interface Props {
  onSelect: (f: Funcionario) => void;
  filtro: string;
  tipo: string;
  dataInicio: string;
  dataFim: string;
}

const InconsistenciesTable: React.FC<Props> = ({
  onSelect,
  filtro,
  tipo,
  dataInicio,
  dataFim,
}) => {
  const [dados, setDados] = useState<Funcionario[]>([
    {
      nome: "Beatriz Costa",
      id: "#1024",
      data: "2023-11-15",
      esperado: "09:00",
      registrado: "09:22",
      tipo: "Atraso (22 min)",
      foto: "https://randomuser.me/api/portraits/women/44.jpg",
      status: "Pendente",
    },
    {
      nome: "Carlos Pereira",
      id: "#1025",
      data: "2023-11-14",
      esperado: "09:00",
      registrado: "---",
      tipo: "Falta",
      foto: "https://randomuser.me/api/portraits/men/32.jpg",
      status: "Resolvido",
    },
    {
      nome: "Daniel Almeida",
      id: "#1026",
      data: "2023-11-13",
      esperado: "18:00",
      registrado: "18:45",
      tipo: "Hora Extra (45 min)",
      foto: "https://randomuser.me/api/portraits/men/45.jpg",
      status: "Em análise",
    },
    {
      nome: "Mariana Lima",
      id: "#1027",
      data: "2023-11-12",
      esperado: "09:00",
      registrado: "09:10",
      tipo: "Atraso (10 min)",
      foto: "https://randomuser.me/api/portraits/women/65.jpg",
      status: "Pendente",
    },
  ]);

  const atualizarStatus = (index: number, novoStatus: string) => {
    const atualizados = [...dados];
    atualizados[index].status = novoStatus;
    setDados(atualizados);
  };

  const dadosFiltrados = dados.filter((f) => {
    const nomeMatch = f.nome.toLowerCase().includes(filtro.toLowerCase());
    const tipoMatch =
      tipo === "Todos" ||
      (tipo === "Faltas" && f.tipo.toLowerCase().includes("falta")) ||
      (tipo === "Atrasos" && f.tipo.toLowerCase().includes("atraso")) ||
      (tipo === "Horas Extras" && f.tipo.toLowerCase().includes("hora extra"));

    const dataMatch = f.data >= dataInicio && f.data <= dataFim;

    return nomeMatch && tipoMatch && dataMatch;
  });

  return (
    <div className="table-container">
      <div className="table-header">
        <h2>Inconsistências Encontradas</h2>
        <p>{dadosFiltrados.length} inconsistências encontradas</p>
        <p className="detalhes-cola">
          Selecione o Colaborador para mais detalhes.
        </p>
      </div>
      <table>
        <thead>
          <tr>
            <th>Colaborador</th>
            <th>Data</th>
            <th>Inconsistência</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {dadosFiltrados.map((f, i) => (
            <tr key={i} onClick={() => onSelect(f)} className="clickable-row">
              <td>{f.nome}</td>
              <td>{f.data.split("-").reverse().join("/")}</td>
              <td>{f.tipo}</td>
              <td>
                <select
                  value={f.status}
                  onChange={(e) => atualizarStatus(i, e.target.value)}
                  className={`status-select ${f.status.toLowerCase()}`}
                >
                  <option value="Pendente">Pendente</option>
                  <option value="Resolvido">Resolvido</option>
                  <option value="Em análise">Em análise</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InconsistenciesTable;
