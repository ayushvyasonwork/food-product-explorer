import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import SortOptions from "../components/SortOptions";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import { fetchProductsByCategory, fetchProductByBarcode } from "../services/OpenFoodFactsAPI";

const Homepage = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("snacks");
  const [query, setQuery] = useState("");
  const [barcode, setBarcode] = useState(""); // Add barcode state
  const [sortOption, setSortOption] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch products by category or barcode
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      if (barcode) {
        const productData = await fetchProductByBarcode(barcode); // Fetch product by barcode
        setProducts(productData.products || []); // Assuming API returns products in this structure
      } else {
        const data = await fetchProductsByCategory(category); // Fetch products by category
        setProducts(data.products || []);
      }

      setLoading(false);
    };

    fetchData();
  }, [category, barcode]);

  const filteredProducts = products
    .filter((product) =>
      query ? product.product_name?.toLowerCase().includes(query.toLowerCase()) : true
    )
    .sort((a, b) => {
      if (sortOption === "name-asc") return a.product_name.localeCompare(b.product_name);
      if (sortOption === "name-desc") return b.product_name.localeCompare(a.product_name);
      if (sortOption === "nutrition-asc") {
        // Sorting nutritional grades (A-E ascending)
        return (a.nutrition_grade_fr || "z").localeCompare(b.nutrition_grade_fr || "z");
      }
      if (sortOption === "nutrition-desc") {
        // Sorting nutritional grades (E-A descending)
        return (b.nutrition_grade_fr || "z").localeCompare(a.nutrition_grade_fr || "z");
      }
      return 0;
    });

  return (
    <div className="p-6 bg-orange-50 min-h-screen">
      {/* Search Bar Section */}
      <SearchBar
        onSearch={setQuery}
        onBarcodeSearch={setBarcode} // Pass barcode search function
      />
      
      {/* Filters and Sorting */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4">
        <div className="flex space-x-4 mb-4 sm:mb-0">
          <CategoryFilter selected={category} onChange={setCategory} />
          <SortOptions selected={sortOption} onChange={setSortOption} />
        </div>
      </div>

      {/* Loader */}
      {loading ? (
        <div className="flex justify-center items-center py-8">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="text-center text-gray-600 col-span-full">No products found</p>
          )}
        </div>
      )}

      {/* Pagination */}
      <Pagination />
    </div>
  );
};

export default Homepage;
