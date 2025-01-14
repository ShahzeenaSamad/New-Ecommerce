"use client";
import { useState, useEffect } from "react";
import Link from "next/link"; // For linking to individual product detail page
import Image from "next/image";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string; // Added category field
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
      setFilteredProducts(data); // Initially, show all products

      // Extract unique categories from products
      const uniqueCategories = [
        ...new Set(data.map((product: Product) => product.category)),
      ] as string[]; // Explicitly cast to string[]
      setCategories(uniqueCategories);
    };

    fetchProducts();
  }, []);

  // Handle category filter
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredProducts(products); // Show all products
    } else {
      const filtered = products.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filtered); // Filter products by category
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Button Filters */}
      <div className="flex justify-center mb-5 pb-5 space-x-4">
        <button
          className="btn btn-outline-dark hover:bg-gray-700 hover:text-white py-2 px-4 rounded-lg transition-all"
          onClick={() => handleCategoryChange("All")} // Show all products
        >
          All
        </button>
        <button
          className="btn btn-outline-dark hover:bg-gray-700 hover:text-white py-2 px-4 rounded-lg transition-all"
          onClick={() => handleCategoryChange("men's clothing")} // Filter by Men's Clothing
        >
          Men's Clothing
        </button>
        <button
          className="btn btn-outline-dark hover:bg-gray-700 hover:text-white py-2 px-4 rounded-lg transition-all"
          onClick={() => handleCategoryChange("women's clothing")} // Filter by Women's Clothing
        >
          Women's Clothing
        </button>
        <button
          className="btn btn-outline-dark hover:bg-gray-700 hover:text-white py-2 px-4 rounded-lg transition-all"
          onClick={() => handleCategoryChange("jewelery")} // Filter by Jewelry
        >
          Jewelry
        </button>
        <button
          className="btn btn-outline-dark hover:bg-gray-700 hover:text-white py-2 px-4 rounded-lg transition-all"
          onClick={() => handleCategoryChange("electronics")} // Filter by Electronics
        >
          Electronics
        </button>
       
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="flex justify-center">
            <div className="card w-full max-w-xs bg-white rounded-lg shadow-md hover:shadow-xl transition-all">
              <Image
                src={product.image}
                alt={product.title}
                width={250}
                height={250}
                className="w-full h-64 object-contain rounded-t-lg"
              />
              <div className="card-body p-4">
                <h5 className="card-title text-lg font-semibold truncate">
                  {product.title}
                </h5>
                <p className="card-text text-gray-600 font-bold text-xl">
                  ${product.price}
                </p>
                <Link href={`/product/${product.id}`}>
                  <p className="btn bg-blue-500 text-white hover:bg-blue-700 py-2 px-4 rounded-lg mt-4 inline-block w-full text-center">
                    View Details
                  </p>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;