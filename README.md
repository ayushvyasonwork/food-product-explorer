Internship Assignment

A React-based web application that allows users to search for food products using a category, name, or barcode. Users can view detailed information about individual products, including images, ingredients, nutritional values, and labels.

Features

1]Category-Based Search: Browse products by selecting categories (e.g., snacks, beverages).

2]Search by Name: Filter products by name using a search bar.

3]Barcode Search: Look up specific products by entering their barcode.

4]Sorting Options: Sort products alphabetically or by nutritional grade.

5]Product Details Page: View in-depth product details, including:

    1]Product image
    2]Full list of ingredients
    3]Nutritional values (energy, fat, carbs, proteins, etc.)
    4]Labels (vegan, gluten-free, etc.)
    5]Responsive Design: Mobile-friendly user interface built with Tailwind CSS.
    6]Loading Indicator: Displays a spinner while fetching data from the API.

    
Technologies Used:

1]Frontend: React, React Router

2]Styling: Tailwind CSS

3]API: OpenFoodFacts API

4]State Management: React hooks (useState, useEffect)


Setup Instructions

Prerequisites:

Node.js and npm installed on your machine

A text editor or IDE (e.g., Visual Studio Code)

Installation

1]Clone the repository:

git clone https://github.com/your-username/food-product-explorer.git

cd food-product-explorer

2]Install dependencies:

npm install

then,

npm run dev

API Integration

Fetch Products by Category

GET https://world.openfoodfacts.org/category/{category}.json

Fetch Product by Barcode

GET https://world.openfoodfacts.org/api/v0/product/{barcode}.json

Contributions

Contributions are welcome! If you’d like to contribute:

i]Fork the repository.

ii]Create a new feature branch:

git checkout -b feature-name

iii]Commit your changes and push to your branch:

git push origin feature-name

iv]Open a pull request.

License

This project is licensed under the MIT License.

Contact

For any questions or suggestions, feel free to reach out:

GitHub: ayushvyasonwork

Email: work.ayushvyas17@gmail.com
