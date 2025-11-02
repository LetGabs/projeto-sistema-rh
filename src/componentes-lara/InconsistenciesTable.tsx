import React from 'react'
import type { Funcionario } from './AuditPage'

interface Props {
  onSelect: (f: Funcionario) => void
}

const InconsistenciesTable: React.FC<Props> = ({ onSelect }) => {
  const dados: Funcionario[] = [
  {
    nome: 'Beatriz Costa',
    id: '#1024',
    data: '15/11/2023',
    esperado: '09:00',
    registrado: '09:22',
    tipo: 'Atraso (22 min)',
    foto: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    nome: 'Carlos Pereira',
    id: '#1025',
    data: '14/11/2023',
    esperado: '09:00',
    registrado: '---',
    tipo: 'Falta',
    foto: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    nome: 'Daniel Almeida',
    id: '#1026',
    data: '13/11/2023',
    esperado: '18:00',
    registrado: '18:45',
    tipo: 'Hora Extra (45 min)',
    foto: 'https://randomuser.me/api/portraits/men/45.jpg',
  },
  {
    nome: 'Mariana Lima',
    id: '#1027',
    data: '12/11/2023',
    esperado: '09:00',
    registrado: '09:10',
    tipo: 'Atraso (10 min)',
    foto: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
]


  return (
    <div className="table-container">
      <div className="table-header">
        <h2>Inconsistências Encontradas</h2>
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
          {dados.map((f, i) => (
            <tr key={i} onClick={() => onSelect(f)} className="clickable-row">
              <td>{f.nome}</td>
              <td>{f.data}</td>
              <td>{f.tipo}</td>
              <td><span className="status pendente">Pendente</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default InconsistenciesTable
