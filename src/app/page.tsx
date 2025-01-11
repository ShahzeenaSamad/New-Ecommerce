"use client";
import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { CartProvider } from "./components/CartContext";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import CartPage from "./components/CartPage";


const Home = () => {
  return (
    <CartProvider>
      {/* Wrap the entire app with BrowserRouter */}
      <Router>
        <Navbar />
        <MainContent />
      </Router>
    </CartProvider>
  );
};

const MainContent = () => {
  // Get current path using useLocation
  const location = useLocation();

  return (
    <>
      {/* Render HeroSection only on the Home page */}
      {location.pathname === "/" && <HeroSection />}
      
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
};

export default Home;