import React from "react";

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-blue-500 mb-4">About Food Explorer</h1>
      <p className="text-gray-700 text-lg">
        Welcome to Food Explorer, your go-to application for exploring food
        products from around the world. Using data from the OpenFoodFacts API,
        we bring you detailed insights into food items, including their
        nutritional values, ingredients, and much more.
      </p>
      <p className="text-gray-700 text-lg mt-4">
        Our mission is to empower users to make informed food choices by
        providing access to transparent and accurate product information. Enjoy
        exploring food categories, searching products by name or barcode, and
        discovering healthier options.
      </p>
    </div>
  );
};

export default AboutPage;
