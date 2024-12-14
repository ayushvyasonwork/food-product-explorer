const BASE_URL = "https://world.openfoodfacts.org";

export const fetchProductsByCategory = async (category) => {
  const response = await fetch(`${BASE_URL}/category/${category}.json`);
  return response.json();
};

// In OpenFoodFactsAPI.js

export const fetchProductByBarcode = async (barcode) => {
  try {
    const response = await fetch(`${BASE_URL}/api/v0/product/${barcode}.json`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching product by barcode:", error);
    return { products: [] }; // Return empty array on error
  }
};

export const fetchCategories = async () => {
    const response = await fetch(`${BASE_URL}/categories.json`);
    return response.json();
  };
  // In OpenFoodFactsAPI.js

export const fetchProductById = async (productId) => {
  try {
    const response = await fetch(`https://world.openfoodfacts.org/api/v0/product/${productId}.json`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    return { product: null };  // Return null product if there's an error
  }
};
