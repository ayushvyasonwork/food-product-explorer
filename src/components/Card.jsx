import React from "react";

const Card = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-200 ease-in-out overflow-hidden flex flex-col p-4">
      {/* Product Image */}
      <img
        src={product.image_url || "https://via.placeholder.com/150"}
        alt={product.product_name || "No Name"}
        className="w-full h-40 object-contain rounded-t-lg"
      />

      {/* Product Info */}
      <div className="p-4">
        {/* Product Title */}
        <h2 className="text-lg font-semibold text-gray-800 truncate">
          {product.product_name || "Unknown Product"}
        </h2>

        {/* Category */}
        <p className="text-sm text-gray-600 mt-1 truncate">
          {product.categories || "Unknown Category"}
        </p>

        {/* Nutrition Grade */}
        <p className="text-sm text-gray-600 mt-2">
          Nutrition Grade:{" "}
          <span
            className={`font-bold ${
              product.nutrition_grades === "a"
                ? "text-green-500"
                : product.nutrition_grades === "b"
                ? "text-yellow-500"
                : product.nutrition_grades === "c"
                ? "text-orange-500"
                : product.nutrition_grades === "d"
                ? "text-red-500"
                : "text-gray-500"
            }`}
          >
            {product.nutrition_grades?.toUpperCase() || "N/A"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Card;
