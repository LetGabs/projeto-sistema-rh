import React, { useState } from "react";
import "./Paginations.css";

interface PaginationProps {
  totalPages?: number; // ← Tornamos opcional
}

const Pagination: React.FC<PaginationProps> = ({ totalPages = 1 }) => { // ← Valor padrão
  const [currentPage, setCurrentPage] = useState(1);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div className="pagination">
      <button
        className="btn-page"
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        Anterior
      </button>

      <span className="pages">
        Página <strong>{currentPage}</strong> de <strong>{totalPages}</strong>
      </span>

      <button
        className="btn-page"
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        Próxima
      </button>
    </div>
  );
};

export default Pagination;
