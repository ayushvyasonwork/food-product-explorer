import React, { useState } from "react";

const SearchBar = ({ onSearch, onBarcodeSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [barcode, setBarcode] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value); // Pass the query to the parent
  };

  const handleBarcodeChange = (e) => {
    setBarcode(e.target.value);
    onBarcodeSearch(e.target.value); // Pass barcode to the parent
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
      <input
        type="text"
        placeholder="Search by product name"
        value={searchTerm}
        onChange={handleSearchChange}
        className="p-2 border rounded w-full sm:w-1/2 shadow-sm"
      />
      <input
        type="text"
        placeholder="Search by barcode"
        value={barcode}
        onChange={handleBarcodeChange}
        className="p-2 border rounded w-full sm:w-1/2 shadow-sm"
      />
    </div>
  );
};

export default SearchBar;
