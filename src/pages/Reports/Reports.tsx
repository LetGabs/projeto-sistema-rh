import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import StatsCards from "../../components/StatsCards/StatsCards";
import Filters from "../../components/Filters/Filters";
import Table from "../../components/Table/Table";
import Pagination from "../../components/Pagination/Pagination";

import "./Reports.css";

const Reports: React.FC = () => {
  return (
    <div className="reports-page">
      <Sidebar />

      <main className="reports-main">
        <div className="reports-container">
          <header className="reports-header">
            <h1>Relatórios de Ponto</h1>
            <p>
              Gere relatórios, exporte dados e realize o fechamento da folha de
              ponto mensal.
            </p>
          </header>

          <StatsCards />
          <Filters />
          <Table />
          <Pagination />
        </div>
      </main>
    </div>
  );
};

export default Reports;
