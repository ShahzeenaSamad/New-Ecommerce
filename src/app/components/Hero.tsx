


"use client";

import { useState, useEffect } from "react";

const HeroSection = () => {
  const images = [
    "/images/OIP (9).jpeg",
    "/images/tank-top-maldives-packing-list-735x478.jpeg",
    "/images/OIP (1).jpeg",
    "/images/p0fcp0s5.jpg.webp",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change the image every 5 seconds (5000ms)

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, [images.length]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Smooth Sliding Effect */}
      <div
        className="absolute top-0 left-0 w-full h-full transition-all duration-1500 ease-in-out"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)), url('${images[currentImageIndex]}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Hero Content */}
      <div className="text-center text-white px-4 max-w-3xl z-10">
        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-wide mb-4">
          Find Your Style
        </h1>
        <p className="text-lg md:text-xl mb-8 leading-relaxed">
          Discover the latest trends and exclusive collections designed just for you. 
          Shop now to elevate your fashion game.
        </p>

        {/* Call-to-action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-6">
          <a 
            href="#shop-now"
            className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg shadow-lg text-lg transition-transform transform hover:scale-105"
          >
            Shop Now
          </a>
          <a 
            href="#collections"
            className="px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-lg shadow-lg text-lg transition-transform transform hover:scale-105"
          >
            View Collections
          </a>
        </div>

        {/* Search Bar */}
        <div className="flex justify-center items-center gap-2">
          <input 
            type="text" 
            placeholder="Search for products..." 
            className="px-4 py-2 w-64 md:w-96 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button 
            className="px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            Search
          </button>
        </div>
      </div>
      
    </section>
  );
};

export default HeroSection;

