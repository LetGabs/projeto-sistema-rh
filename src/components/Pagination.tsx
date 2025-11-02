import React from "react";
import "./Pagination.css";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="pagination">
      <div className="pagination-side">
        <button
          className="pagination-link"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <span className="material-symbols-outlined">arrow_back</span>
          Anterior
        </button>
      </div>

      <div className="pagination-center">
        {pages.map((page) => (
          <button
            key={page}
            className={`pagination-link ${page === currentPage ? "active" : ""}`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>

      <div className="pagination-side">
        <button
          className="pagination-link"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Próximo
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </nav>
  );
};

export default Pagination;
