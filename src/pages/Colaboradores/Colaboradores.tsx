import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import ColaboradoresTable from "../../components/ColaboradoresTable/ColaboradoresTable";
import Pagination from "../../components/Pagination/Pagination";
import Modal from "../../components/ModalColaborador/Modal";
import colaboradoresRequests from "../../requests/colaboradores";
import cargosRequests from "../../requests/cargos";
import departamentosRequests from "../../requests/departamentos";
import "./Colaboradores.css";

export interface Colaborador {
  id: number;
  nome: string;
  cargo: string;
  cargo_id: number;
  departamento: string;
  departamento_id: number;
  status: "Ativo" | "Inativo" | "Férias";
}

export interface Cargo {
  id: number;
  nome: string;
}

export interface Departamento {
  id: number;
  nome: string;
}

function Colaboradores() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [colaboradores, setColaboradores] = useState<Colaborador[]>([]);
  const [editando, setEditando] = useState<Colaborador | null>(null);
  const [cargos, setCargos] = useState<Cargo[]>([]);
  const [departamentos, setDepartamentos] = useState<Departamento[]>([]);

  async function carregarColaboradores() {
    try {
      const data = await colaboradoresRequests.getAll();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const formatado = data.map((c:any) => ({
        id: c.id,
        nome: c.nome,
        cargo: c.cargo?.nome || "",
        cargo_id: c.cargo_id,
        departamento: c.departamento?.nome || "",
        departamento_id: c.departamento_id,
        status: c.status,
      }));
      setColaboradores(formatado);
    } catch (error) {
      console.error("Erro ao carregar colaboradores:", error);
    }
  }

  async function carregarCargosEDepartamentos() {
    try {
      const cargosData = await cargosRequests.getAll();
      const departamentosData = await departamentosRequests.getAll();
      setCargos(cargosData);
      setDepartamentos(departamentosData);
    } catch (error) {
      console.error("Erro ao carregar cargos/departamentos:", error);
    }
  }

  useEffect(() => {
    carregarColaboradores();
    carregarCargosEDepartamentos();
  }, []);

  const itemsPerPage = 5;
  const filtered = colaboradores.filter(
    (c) =>
      c.nome.toLowerCase().includes(search.toLowerCase()) ||
      c.id.toString().includes(search)
  );
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginated = filtered.slice(startIndex, startIndex + itemsPerPage);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const novoColaborador = {
      nome: String(data.get("nome")),
      cargo_id: Number(data.get("cargo_id")),
      departamento_id: Number(data.get("departamento_id")),
      status: String(data.get("status")),
    };

    try {
      if (editando) {
        await colaboradoresRequests.update(editando.id, novoColaborador);
      } else {
        await colaboradoresRequests.create(novoColaborador);
      }

      form.reset();
      setIsModalOpen(false);
      setEditando(null);
      carregarColaboradores();
    } catch (err) {
      console.error("Erro ao salvar colaborador:", err);
    }
  }

  async function deletarColaborador(id: number) {
    if (confirm("Tem certeza que deseja excluir?")) {
      await colaboradoresRequests.delete(id);
      carregarColaboradores();
    }
  }

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main className="main-content">
        <div className="gestao-card">
          <div className="page-header">
            <div className="page-title">
              <h1>Gestão de Colaboradores</h1>
              <p>Adicione, edite e visualize os registros dos colaboradores.</p>
            </div>
            <button
              className="add-button"
              onClick={() => {
                setEditando(null);
                setIsModalOpen(true);
              }}
            >
              <span className="material-symbols-outlined">add</span>
              <span>Adicionar Colaborador</span>
            </button>
          </div>

          <div className="search-bar">
            <span className="material-symbols-outlined search-icon">search</span>
            <input
              type="text"
              placeholder="Pesquisar por nome ou ID..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <ColaboradoresTable
            colaboradores={paginated}
            onEdit={(c) => {
              setEditando(colaboradores.find((col) => col.id === c.id) || null);
              setIsModalOpen(true);
            }}
            onDelete={deletarColaborador}
          />

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h2>{editando ? "Editar Colaborador" : "Adicionar Colaborador"}</h2>
          <form className="form-colaborador" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Nome</label>
              <input
                type="text"
                name="nome"
                required
                defaultValue={editando?.nome || ""}
              />
            </div>

            <div className="form-group">
              <label>Cargo</label>
              <select
                name="cargo_id"
                required
                defaultValue={editando?.cargo_id || ""}
              >
                <option value="">Selecione...</option>
                <option value="Designer de Produto">Designer de Produto</option>
                <option value="Engenheiro de Software">Engenheiro de Software</option>
                <option value="Aanlista de RH">Aanlista de RH</option>
                
            
                {cargos.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.nome}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Departamento</label>
              <select
                name="departamento_id"
                required
                defaultValue={editando?.departamento_id || ""}
              >
                <option value="">Selecione...</option>
                <option value="1">Tecnologia</option>
                <option value="2">Recursos Humanos</option>
                {departamentos.map((d) => (
                  <option key={d.id} value={d.id

                  }>
                    {d.nome}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Status</label>
              <select
                name="status"
                required
                defaultValue={editando?.status || "Ativo"}
              >
                <option value="Ativo">Ativo</option>
                <option value="Inativo">Inativo</option>
                <option value="Férias">Férias</option>
              </select>
            </div>

            <button type="submit" className="btn-salvar">
              Salvar
            </button>
          </form>
        </Modal>
      </main>
    </div>
  );
}

export default Colaboradores;
