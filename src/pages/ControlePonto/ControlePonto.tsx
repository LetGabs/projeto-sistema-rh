import React, { useState } from "react";
import "./ControlePonto.css";

import PageHeading from "../../components/PageHeading/PageHeading";
import ToolbarChips from "../../components/ToolbarChips/ToolbarChips";
import RegistroTable, { type Registro } from "../../components/RegistroTable/RegistroTable";
import GoalsSection from "../../components/GoalsSection/GoalsSection";
import RecognitionSection from "../../components/RecognitionSection/RecognitionSection";

const ControlePonto: React.FC = () => {
  const [search, setSearch] = useState("");
  const [filtro, setFiltro] = useState("Todos");

  const registros: Registro[] = [
    {
      id: 1,
      nome: "Carlos Pereira",
      cargo: "Desenvolvedor",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD90fyNo9vwHj3UehkML-zp1BhC2FJ7GKr5krDLM39MPW9LL8FcibtiKij4ix4Kp7cgi0bWa2_OaN7dP_5hmh6sRyMmCuTTspWQ3X-0wf1ZlJS7uKSYzncxA7x1dJM0lRNcnt89_MdacCBomM0Ev-Sh2I1ayknIfVEL3cfHAkk8MlYiPlK0hnpE54YzrXSkgbiNV6cHjc4VaXmskhxCLyjd6JmO-Xbe9lWO28lX7JaUhiynweODW82_hAbIk5HTcRTaRmGjs5YedcQ",
      status: "Presente",
      entrada1: "09:01",
      saida1: "12:05",
      entrada2: "13:03",
      saida2: "18:02",
      horas: "08:03",
    },
    {
      id: 2,
      nome: "Sofia Lima",
      cargo: "Designer UX/UI",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBCn6yAr5q43D5-dkacrMYO3vDoHzahvH4K31Ga0YQ-4aGHAXxWJ_954th74y5lBMYeUF0am1-LaYIBCSMHUO87Harp9BGA8O_Cmb9Piwomq8S_D_b4MsM3zp9SQ3HmSpjnm8j590lKUWC1qKVMF1TZO3RTfDVrRzKN_pJOn0FBSSwF1a-vc3igqrszSqP4o5uKCXMr10JP-d_KY-2Qwek9qKYB_JJLG3vm1uZ-oLjwMf-ca4XT9llpC0XaXMPkFNuBjIZ_CSIw3Zo",
      status: "Atraso",
      entrada1: "09:15",
      saida1: "12:00",
      entrada2: "13:01",
      saida2: "18:05",
      horas: "07:49",
    },
    {
      id: 3,
      nome: "Ricardo Alves",
      cargo: "Gerente de Projetos",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAzy0_Af5K42CpNmY6KrZXhfji0U7NI5PQbCEBzXexqnV3hchQPtRV1kPYBIBFWWzp-Entljpef4Q2O_jBwFdXBng86VX9RCHninWtasdyOsm758k_xF-mtVuATOxN0R8bBqey_XCZaTYTdRcmHi7VBVCQ8C-jPgppULRR2uAJiT8N6h_UlY1jb19DEQRMSzGgbnvv97Ee32hIE1sYjUwMYtF5gMxjzd_nfi_G0vFGtHD9lmLWVOvl8XUzjxybSi4uttJVYm8EjYl0",
      status: "Ausente",
      entrada1: "-",
      saida1: "-",
      entrada2: "-",
      saida2: "-",
      horas: "00:00",
    },
    {
      id: 4,
      nome: "Juliana Costa",
      cargo: "Analista de Marketing",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCxO3jGmVvZAycJr-M40C1ot0yL0Gmozei98b_eU30o6XzkiAsG6BLvIAwxUwTVvt16cmzF4xSFRoJ1FTk0_EOQP56n433F5SJsZfyKWv16Rh8l8EB-22v-sb7nn9Rs5HHD4RY89j9xL9Q0hDCz9AhjTMYObD1-KMwAezZiMrA0uuLMBmeBt7EdeDYdi-5-iJzA0fD3B8ugC_qB9ed0ib69NH28rwQu_H5T4DRKrZecefnLqqDI4ErfOHMHOTVHHOvUy7bb9S6G37M",
      status: "Folga",
      entrada1: "-",
      saida1: "-",
      entrada2: "-",
      saida2: "-",
      horas: "00:00",
    },
  ];

  // Filtragem simples
  const registrosFiltrados = registros.filter((r) => {
    const matchSearch =
      r.nome.toLowerCase().includes(search.toLowerCase()) ||
      r.cargo.toLowerCase().includes(search.toLowerCase());
    const matchFiltro = filtro === "Todos" || r.status === filtro;
    return matchSearch && matchFiltro;
  });

  return (
    <main className="controle-ponto">
      <div className="grid grid-cols-3 gap-8">
        {/* Coluna principal */}
        <div className="col-span-3 lg:col-span-2 space-y-6">
          <PageHeading
            titulo="Registro de Ponto Diário"
            descricao="Acompanhe a jornada de trabalho da sua equipe em tempo real."
            onExport={() => console.log("Exportar relatório")}
          />

          <ToolbarChips
            onSearch={(value) => setSearch(value)}
            onFilterChange={(filter) => setFiltro(filter)}
          />

          <RegistroTable registros={registrosFiltrados} />
        </div>

        {/* Coluna lateral */}
        <aside className="col-span-3 lg:col-span-1 space-y-6">
          <GoalsSection />
          <RecognitionSection />
        </aside>
      </div>
    </main>
  );
};

export default ControlePonto;
