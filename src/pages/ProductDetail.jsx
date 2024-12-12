import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductByBarcode } from "../services/OpenFoodFactsAPI";

const ProductDetail = () => {
  const { barcode } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProductByBarcode(barcode);
      setProduct(data.product || {});
    };
    fetchData();
  }, [barcode]);

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      {/* Product Name */}
      <h1 className="text-3xl font-bold text-gray-800 text-center">
        {product.product_name || "Product Name Unavailable"}
      </h1>

      {/* Product Image */}
      <div className="flex justify-center mt-6">
        <img
          src={product.image_url || "https://via.placeholder.com/300"}
          alt={product.product_name}
          className="w-full max-w-sm rounded-lg shadow-md"
        />
      </div>

      {/* Product Details */}
      <div className="mt-6 space-y-4">
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-700">Ingredients:</h2>
          <p className="text-gray-600 mt-2">
            {product.ingredients_text || "Ingredients information not available."}
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-700">Nutrition Grade:</h2>
          <p className="text-gray-600 mt-2">
            {product.nutrition_grade_fr || "Not Graded"}
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-700">Labels:</h2>
          <p className="text-gray-600 mt-2">
            {product.labels || "No labels available."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
