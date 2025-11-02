import React, { useState } from 'react'
import PageLayout from './PageLayout'
import Sidebar from './Sidebar'
import Header from './Header'
import Filters from './Filters'
import InconsistenciesTable from './InconsistenciesTable'
import DetailsPanel from './DetailsPanel'
import AjudaModal from './AjudaModal'

export interface Funcionario {
  nome: string
  id: string
  data: string
  esperado: string
  registrado: string
  tipo: string
  foto: string
}

const AuditPage: React.FC = () => {
  const [selecionado, setSelecionado] = useState<Funcionario | null>(null)
  const [mostrarAjuda, setMostrarAjuda] = useState(false)

  return (
    <>
      <PageLayout sidebar={<Sidebar onAjudaClick={() => setMostrarAjuda(true)} />}>
        <Header />
        <Filters />
        <div className="audit-content">
          <InconsistenciesTable onSelect={setSelecionado} />
          {selecionado && <DetailsPanel funcionario={selecionado} />}
        </div>
      </PageLayout>

      {mostrarAjuda && <AjudaModal onClose={() => setMostrarAjuda(false)} />}
    </>
  )
}

export default AuditPage
