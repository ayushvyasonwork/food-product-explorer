import React, { useState } from "react";

const SearchBar = ({ onSearch, onBarcodeSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [barcode, setBarcode] = useState(""); // Barcode state

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value); // Pass the query to parent
  };

  const handleBarcodeChange = (e) => {
    setBarcode(e.target.value);
    onBarcodeSearch(e.target.value); // Pass barcode to parent
  };

  return (
    <div className="flex justify-between items-center mb-6 ">
      <input
        type="text"
        placeholder="Search by product name"
        value={searchTerm}
        onChange={handleSearchChange}
        className="p-2 border rounded w-full sm:w-64 shadow-sm"
      />
      <input
        type="text"
        placeholder="Search by barcode"
        value={barcode}
        onChange={handleBarcodeChange}
        className="p-2 border rounded w-full sm:w-64 mt-4 sm:mt-0 sm:ml-4 shadow-sm"
      />
    </div>
  );
};

export default SearchBar;
