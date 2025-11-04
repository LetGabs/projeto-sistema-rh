import React, { useState } from "react";
import "./Colaboradores.css";
import ColaboradoresTable from "../../components/ColaboradoresTable/ColaboradoresTable";
import type { Colaborador } from "../../components/ColaboradoresTable/ColaboradoresTable";
import Pagination from "../../components/Pagination/Pagination";
import Modal from "../../components/ModalColaborador/Modal";

const Colaboradores: React.FC = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [colaboradores, setColaboradores] = useState<Colaborador[]>([
    {
      id: 1,
      nome: "Ana Silva",
      cargo: "Designer de Produto",
      departamento: "Tecnologia",
      status: "Ativo",
    },
    {
      id: 2,
      nome: "Bruno Costa",
      cargo: "Engenheiro de Software",
      departamento: "Tecnologia",
      status: "Ativo",
    },
    {
      id: 3,
      nome: "Carla Dias",
      cargo: "Analista de RH",
      departamento: "Recursos Humanos",
      status: "Inativo",
    },
    {
      id: 4,
      nome: "Daniel Martins",
      cargo: "Gerente de Marketing",
      departamento: "Marketing",
      status: "Ativo",
    },
    {
      id: 5,
      nome: "Eduarda Lima",
      cargo: "Analista Financeiro",
      departamento: "Financeiro",
      status: "Férias",
    },
  ]);

  const itemsPerPage = 3;

  const filtered = colaboradores.filter(
    (c) =>
      c.nome.toLowerCase().includes(search.toLowerCase()) ||
      c.id.toString().includes(search)
  );

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginated = filtered.slice(startIndex, startIndex + itemsPerPage);

  // Função para adicionar colaborador
  const handleAddColaborador = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const novo: Colaborador = {
      id: colaboradores.length + 1,
      nome: data.get("nome") as string,
      cargo: data.get("cargo") as string,
      departamento: data.get("departamento") as string,
      status: data.get("status") as "Ativo" | "Inativo" | "Férias",
    };

    setColaboradores([...colaboradores, novo]);
    setIsModalOpen(false);
    form.reset();
  };

  return (
    <main className="main-content">
      <div className="gestao-card">
        {/* Cabeçalho */}
        <div className="page-header">
          <div className="page-title">
            <h1>Gestão de Colaboradores</h1>
            <p>Adicione, edite e visualize os registros dos colaboradores.</p>
          </div>
          <button className="add-button" onClick={() => setIsModalOpen(true)}>
            <span className="material-symbols-outlined">add</span>
            <span>Adicionar Colaborador</span>
          </button>
        </div>

        {/* Barra de pesquisa */}
        <div className="search-bar">
          <span className="material-symbols-outlined search-icon">search</span>
          <input
            type="text"
            placeholder="Pesquisar por nome ou ID..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Filtros */}
        <div className="filters">
          <button className="filter-button">
            <p>Departamento</p>
            <span className="material-symbols-outlined">expand_more</span>
          </button>
          <button className="filter-button">
            <p>Status</p>
            <span className="material-symbols-outlined">expand_more</span>
          </button>
        </div>

        {/* Tabela */}
        <ColaboradoresTable colaboradores={paginated} />

        {/* Paginação */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>Adicionar Colaborador</h2>
        <form className="form-colaborador" onSubmit={handleAddColaborador}>
          <div className="form-group">
            <label>Nome</label>
            <input
              type="text"
              name="nome"
              required
              placeholder="Digite o nome"
            />
          </div>
          <div className="form-group">
            <label>Cargo</label>
            <input
              type="text"
              name="cargo"
              required
              placeholder="Digite o cargo"
            />
          </div>
          <div className="form-group">
            <label>Departamento</label>
            <input
              type="text"
              name="departamento"
              required
              placeholder="Digite o departamento"
            />
          </div>
          <div className="form-group">
            <label>Status</label>
            <select name="status" required>
              <option value="Ativo">Ativo</option>
              <option value="Inativo">Inativo</option>
              <option value="Férias">Férias</option>
            </select>
          </div>
          <button type="submit" className="add-button">
            Salvar
          </button>
        </form>
      </Modal>
    </main>
  );
};

export default Colaboradores;
