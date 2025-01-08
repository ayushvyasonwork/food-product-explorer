import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/Homepage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProductDetailPage from "./pages/ProductDetailPage"; // Import ProductDetailPage

const App = () => {
  return (
    <Router>
      <div className="App flex flex-col min-h-screen">
        {/* Header */}
        <Header />
        {/* new code  */}
        {/* this is part of new branch */}
        {/* Main Content */}
        <main className="flex-grow bg-orange-50 py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/product/:productId" element={<ProductDetailPage />} />
            </Routes>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-black text-white py-4">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm md:text-base">
              © {new Date().getFullYear()} Food Explorer. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
