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
  const [barcode, setBarcode] = useState(""); // Barcode state
  const [sortOption, setSortOption] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1); // Page tracking
  const [hasMore, setHasMore] = useState(true); // Load more flag

  // Fetch products by category or barcode
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      if (barcode) {
        const productData = await fetchProductByBarcode(barcode); // Fetch product by barcode
        setProducts(productData.products || []); // Assuming API returns products in this structure
        setHasMore(false); // Disable "Load More" if searching by barcode
      } else {
        const data = await fetchProductsByCategory(category, 1); // Fetch products for the first page
        setProducts(data.products || []);
        setHasMore(data.products && data.products.length > 0); // Check if more products exist
      }

      setCurrentPage(1); // Reset to the first page on category/barcode change
      setLoading(false);
    };

    fetchData();
  }, [category, barcode]);

  // Fetch more products for pagination
  const fetchMoreProducts = async () => {
    setLoading(true);

    const data = await fetchProductsByCategory(category, currentPage + 1); // Fetch next page
    if (data.products && data.products.length > 0) {
      setProducts((prev) => [...prev, ...data.products]); // Append new products
      setCurrentPage((prev) => prev + 1); // Increment page count
    } else {
      setHasMore(false); // No more products to load
    }

    setLoading(false);
  };

  // Filter and sort products
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
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4 space-y-4 sm:space-y-0">
        <div className="flex flex-wrap space-x-4">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
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
      <Pagination onLoadMore={fetchMoreProducts} hasMore={hasMore} />
    </div>
  );
};

export default Homepage;
