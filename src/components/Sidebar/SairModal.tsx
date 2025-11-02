import React from "react";
import "./SairModal.css";

interface SairModalProps {
  onClose: () => void;
  onConfirm: () => void;
}

const SairModal: React.FC<SairModalProps> = ({ onClose, onConfirm }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2>Confirmar Saída</h2>
        <p>Tem certeza de que deseja sair do sistema?</p>

        <div className="modal-buttons">
          <button className="btn-cancel" onClick={onClose}>
            Cancelar
          </button>
          <button className="btn-confirm" onClick={onConfirm}>
            Sair
          </button>
        </div>
      </div>
    </div>
  );
};

export default SairModal;
