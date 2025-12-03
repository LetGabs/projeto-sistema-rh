import api from "../services/api";

export interface CargoData {
  id: number;
  nome: string;
}

const cargosRequests = {
  async getAll(): Promise<CargoData[]> {
    const response = await api.get("/cargos");
    return response.data;
  }
};

export default cargosRequests;
