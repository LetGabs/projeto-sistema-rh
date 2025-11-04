import React, { useState } from "react";
import "./Filters.css";

const Filters: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState("Agosto 2025");
  const [selectedDepartment, setSelectedDepartment] = useState("Todos");

  // Exportar CSV
  const handleExportCSV = () => {
    const data = [
      ["Nome", "Cargo", "Horas Trabalhadas"],
      ["Ana Souza", "Desenvolvedora", "160"],
      ["Bruno Lima", "Designer", "155"],
    ];

    const csvContent =
      "data:text/csv;charset=utf-8," +
      data.map((row) => row.join(";")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "relatorio_ponto.csv");
    document.body.appendChild(link);
    link.click();
    link.remove();

    console.log("✅ CSV exportado com sucesso!");
  };

  // Gerar relatório
  const handleGenerateReport = () => {
    console.log(`📄 Gerando relatório de ${selectedMonth} - ${selectedDepartment}`);
    alert(`Relatório gerado para ${selectedDepartment} (${selectedMonth})!`);
  };

  return (
    <div className="filters">
      <div className="filters-left">
        <label>
          Mês:
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          >
            <option>Outubro 2025</option>
            <option>Setembro 2025</option>
            <option>Agosto 2025</option>
          </select>
        </label>

        <label>
          Departamento:
          <select
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
          >
            <option>Todos</option>
            <option>Financeiro</option>
            <option>RH</option>
            <option>TI</option>
            <option>Marketing</option>
          </select>
        </label>
      </div>

      <div className="filters-right">
        <button className="btn exportar" onClick={handleExportCSV}>
          Exportar CSV
        </button>
        <button className="btn gerar" onClick={handleGenerateReport}>
          Gerar Relatório
        </button>
      </div>
    </div>
  );
};

export default Filters;
