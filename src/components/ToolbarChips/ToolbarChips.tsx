import React, { useState } from "react";
import "./ToolbarChips.css";

interface ToolbarChipsProps {
  onSearch: (value: string) => void;
  onFilterChange: (filter: string) => void;
}

const ToolbarChips: React.FC<ToolbarChipsProps> = ({ onSearch, onFilterChange }) => {
  const [search, setSearch] = useState("");
  const [activeChip, setActiveChip] = useState("Todos");

  const chips = ["Todos", "Presente", "Ausente", "Atraso", "Folga"];

  const handleChipClick = (chip: string) => {
    setActiveChip(chip);
    onFilterChange(chip);
  };

  return (
    <div className="toolbar-container">
      {/* Barra de busca */}
      <div className="toolbar-top">
        <div className="search-wrapper">
          <span className="material-symbols-outlined search-icon">search</span>
          <input
            type="text"
            placeholder="Buscar por colaborador..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              onSearch(e.target.value);
            }}
          />
        </div>
      </div>

      {/* Chips */}
      <div className="chips-row">
        {chips.map((chip) => (
          <button
            key={chip}
            className={`chip ${activeChip === chip ? "active" : ""}`}
            onClick={() => handleChipClick(chip)}
          >
            {chip}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ToolbarChips;
