import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../services/OpenFoodFactsAPI";  // Assuming you have a service to fetch product by ID

const ProductDetailPage = () => {
  const { productId } = useParams(); // Get productId from URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductDetails = async () => {
      setLoading(true);
      const data = await fetchProductById(productId);  // Fetch product details by ID
      setProduct(data.product);
      setLoading(false);
    };

    fetchProductDetails();
  }, [productId]);

  if (loading) {
    return <div>Loading...</div>;  // Add a loading spinner or text
  }

  if (!product) {
    return <div>Product not found</div>;  // Handle case where product is not found
  }

  return (
    <div className="p-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="h-48 w-56">
            <img
            src={product.image_url}
            alt={product.product_name}
            className="w-full object-contain h-48 mb-6"
            />
        </div>
        <h2 className="text-2xl font-bold mb-4">{product.product_name}</h2>

        {/* Ingredients */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold">Ingredients:</h3>
          <p>{product.ingredients_text}</p>
        </div>

        {/* Nutritional Values */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold">Nutritional Values:</h3>
          <ul>
            <li>Energy: {product.nutriments?.energy} kcal</li>
            <li>Fat: {product.nutriments?.fat} g</li>
            <li>Carbs: {product.nutriments?.carbohydrates} g</li>
            <li>Proteins: {product.nutriments?.proteins} g</li>
          </ul>
        </div>

        {/* Labels */}
        <div>
          <h3 className="text-xl font-semibold">Labels:</h3>
          <ul className="flex flex-wrap gap-2">
            {/* Check if labels exist and is an array */}
            {Array.isArray(product.labels) && product.labels.length > 0 ? (
              product.labels.map((label, index) => (
                <li key={index} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                  {label}
                </li>
              ))
            ) : (
              <p>No labels available</p>  // If no labels are found, show this message
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
