

import React from 'react'

interface Props {
  onClose: () => void
}

const AjudaModal: React.FC<Props> = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Central de Ajuda <span className="material-symbols-outlined">help</span></h2>
        <p>Se você tiver dúvidas sobre o sistema, entre em contato com o suporte pelo E-MAIL:</p>
        <p><strong>suporte@empresa.com</strong></p>
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  )
}

export default AjudaModal
