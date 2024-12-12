import React from "react";

const SortOptions = ({ selected, onChange }) => {
  return (
    <select
      value={selected}
      onChange={(e) => onChange(e.target.value)}
      className="border border-gray-300 rounded p-2"
    >
      <option value="">Sort By</option>
      <option value="name-asc">Name (A-Z)</option>
      <option value="name-desc">Name (Z-A)</option>
      <option value="nutrition-asc">Nutrition Grade (A-E)</option>
      <option value="nutrition-desc">Nutrition Grade (E-A)</option>
    </select>
  );
};

export default SortOptions;
