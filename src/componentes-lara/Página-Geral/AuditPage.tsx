import React, { useState } from "react";
import PageLayout from "./PageLayout";
import Sidebar from "../Sidebar/Sidebar";
import Header from "./Header";
import Filters from "./Filters";
import InconsistenciesTable from "../Detlhas-Inconsistencia/InconsistenciesTable";
import DetailsPanel from "../Detlhas-Inconsistencia/DetailsPanel";
import AjudaModal from "../Sidebar/AjudaModal";

export interface Funcionario {
  nome: string;
  id: string;
  data: string;
  esperado: string;
  registrado: string;
  tipo: string;
  foto: string;
  status: string;
}

const AuditPage: React.FC = () => {
  const [selecionado, setSelecionado] = useState<Funcionario | null>(null);
  const [mostrarAjuda, setMostrarAjuda] = useState(false);
  const [busca, setBusca] = useState("");
  const [filtroTipo, setFiltroTipo] = useState("Todos");
  const [dataInicio, setDataInicio] = useState("2023-11-01");
  const [dataFim, setDataFim] = useState("2023-11-30");

  return (
    <>
      <PageLayout
        sidebar={<Sidebar onAjudaClick={() => setMostrarAjuda(true)} />}
      >
        <Header />
        <Filters
          busca={busca}
          setBusca={setBusca}
          filtroTipo={filtroTipo}
          setFiltroTipo={setFiltroTipo}
          dataInicio={dataInicio}
          setDataInicio={setDataInicio}
          dataFim={dataFim}
          setDataFim={setDataFim}
        />
        <div className="audit-content">
          <InconsistenciesTable
            onSelect={setSelecionado}
            filtro={busca}
            tipo={filtroTipo}
            dataInicio={dataInicio}
            dataFim={dataFim}
          />
          {selecionado && (
            <DetailsPanel
              funcionario={selecionado}
              onClose={() => setSelecionado(null)}
            />
          )}
        </div>
      </PageLayout>

      {mostrarAjuda && <AjudaModal onClose={() => setMostrarAjuda(false)} />}
    </>
  );
};

export default AuditPage;
