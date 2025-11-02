import React, { useState } from 'react'
import PageLayout from './PageLayout'
import Sidebar from './Sidebar'
import Header from './Header'
import Filters from './Filters'
import InconsistenciesTable from './InconsistenciesTable'
import DetailsPanel from './DetailsPanel'

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

  return (
    <PageLayout sidebar={<Sidebar />}>
      <Header />
      <Filters />
      <div className="audit-content">
        <InconsistenciesTable onSelect={setSelecionado} />
        {selecionado && <DetailsPanel funcionario={selecionado} />}
      </div>
    </PageLayout>
  )
}

export default AuditPage
