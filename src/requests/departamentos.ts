import api from "../services/api";

export interface DepartamentoData {
  id: number;
  nome: string;
}

const departamentosRequests = {
  async getAll(): Promise<DepartamentoData[]> {
    const response = await api.get("/departamentos");
    return response.data;
  }
};

export default departamentosRequests;
