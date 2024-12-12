import React, { useEffect, useState } from "react";
import { fetchCategories } from "../services/OpenFoodFactsAPI";

const CategoryFilter = ({ selected, onChange }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCategories();
      setCategories(data.tags || []);
    };
    fetchData();
  }, []);

  return (
    <select
      value={selected}
      onChange={(e) => onChange(e.target.value)}
      className="border border-gray-300 rounded p-2"
    >
      <option value="">Select Category</option>
      {categories.map((category) => (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      ))}
    </select>
  );
};

export default CategoryFilter;
