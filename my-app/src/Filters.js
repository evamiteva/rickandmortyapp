// src/Filters.js
import React from 'react';

function Filters({ statusFilter, speciesFilter, onStatusChange, onSpeciesChange }) {
  return (
    <div className="filters">
      <div className="filter">
        <label>Status:</label>
        <select value={statusFilter} onChange={onStatusChange}>
          <option value="">All</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>

      <div className="filter">
        <label>Species:</label>
        <select value={speciesFilter} onChange={onSpeciesChange}>
          <option value="">All</option>
          <option value="Human">Human</option>
          <option value="Alien">Alien</option>
          <option value="Robot">Robot</option>
          <option value="Cronenberg">Cronenberg</option>
        </select>
      </div>
    </div>
  );
}

export default Filters;
