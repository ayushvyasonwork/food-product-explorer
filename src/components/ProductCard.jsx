import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="border border-gray-300 rounded p-4 flex flex-col justify-between bg-white shadow-md">
      <img
        src={product.image_url || "https://via.placeholder.com/150"}
        alt={product.product_name}
        className="w-full h-48 object-contain rounded"
      />
      <h2 className="text-lg font-bold mt-2">{product.product_name}</h2>
      <p className="text-sm text-gray-500">Category: {product.categories || "N/A"}</p>
      <p className="text-sm text-gray-500">Nutrition Grade: {product.nutrition_grade_fr || "N/A"}</p>
      <Link
  to={`/product/${product.id}`}
  className="text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200 ease-in-out px-4 py-2 rounded-md mt-3 inline-block text-center"
>
  View Details
</Link>

    </div>
  );
};

export default ProductCard;
