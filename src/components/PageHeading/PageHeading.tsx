import React from "react";
import "./PageHeading.css";

interface PageHeadingProps {
  titulo: string;
  descricao: string;
  onExport?: () => void;
}

const PageHeading: React.FC<PageHeadingProps> = ({ titulo, descricao, onExport }) => {
  return (
    <div className="page-header">
      <div className="page-title">
        <h1>{titulo}</h1>
        <p>{descricao}</p>
      </div>
      <button className="export-button" onClick={onExport}>
        <span className="material-symbols-outlined">download</span>
        <span>Exportar Relatório</span>
      </button>
    </div>
  );
};

export default PageHeading;
