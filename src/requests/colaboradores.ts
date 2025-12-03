import api from "../services/api";

export interface ColaboradorData {
  id?: number; // importante para quando vier do backend
  nome: string;
  cargo_id: number;
  cargo ?: string;
  departamento ?: string;
  departamento_id: number;
  status: string;
}


const colaboradoresRequests = {
  async getAll(): Promise<ColaboradorData[]> {
    const response = await api.get("/colaboradores");
    return response.data;
  },

  async create(data: ColaboradorData): Promise<ColaboradorData> {
    const response = await api.post("/colaboradores", data);
    return response.data;
  },

  async update(id: number, data: ColaboradorData): Promise<ColaboradorData> {
    const response = await api.put(`/colaboradores/${id}`, data);
    return response.data;
  },

  async delete(id: number): Promise<{ message: string }> {
    const response = await api.delete(`/colaboradores/${id}`);
    return response.data;
  },
};



export default colaboradoresRequests;
