import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-black text-white px-6 py-4 flex items-center justify-between  sticky top-0">
      <h1 className="text-xl font-bold">
        <Link to="/">Food Explorer</Link>
      </h1>
      <nav className="flex space-x-4">
        <Link
          to="/"
          className="hover:bg-orange-50 hover:text-black px-3 py-2 rounded transition duration-200"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="hover:bg-orange-50 hover:text-black px-3 py-2 rounded transition duration-200"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="hover:bg-orange-50 hover:text-black px-3 py-2 rounded transition duration-200"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
