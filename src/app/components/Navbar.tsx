
"use client";

"use client";
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext"; // Import useCart to access cart data
import { FaShoppingCart } from "react-icons/fa"; // Import the cart icon

const Navbar = () => {
  const { getCartItemCount } = useCart(); // Access the method to get cart item count

  return (
    <nav className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 shadow-md fixed top-0 left-0 w-full z-50">
    <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-white text-3xl font-bold tracking-wide">
        <Link to="/" className="hover:text-gray-200 transition-colors">
          <span className="text-yellow-400">Shop</span>Style
        </Link>
      </div>

        {/* Navbar Links */}
        <div className="flex space-x-6 ml-auto">
          <Link to="/" className="text-lg hover:text-yellow-400 font-bold transition-all duration-300">Home</Link>
          <Link to="/products" className="text-lg hover:text-yellow-400 font-bold transition-all duration-300">Products</Link>
          <Link to="/contact" className="text-lg hover:text-yellow-400 font-bold transition-all duration-300">Contact</Link>
           
           {/* Search Bar */}
        <div className="relative hidden md:flex">
          <input
            type="text"
            placeholder="Search for products..."
            className="px-4 py-2 rounded-lg w-72 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-yellow-400">
            🔍
          </button>
        </div>

          {/* Cart Link with cart icon and item count */}
          <Link to="/cart" className="relative flex items-center">
            <FaShoppingCart className="text-2xl mr-2 hover:text-yellow-400 transition-all duration-300" />
            {/* Cart item count */}
            <span
              className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 text-xs font-bold"
              style={{ display: getCartItemCount() > 0 ? 'block' : 'none' }}
            >
              {getCartItemCount()}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

