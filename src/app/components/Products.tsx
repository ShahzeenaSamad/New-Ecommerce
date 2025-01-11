"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Skeleton from "react-loading-skeleton";
import Link from "next/link";

// Define the Product interface
interface Product {
  category: string;
  id: number;
  title: string;
  price: number;
  image: string;
}

const Products = () => {
  const [data, setData] = useState<Product[]>([]);
  const [filter, setFilter] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const componentMounted = useRef(true);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (componentMounted.current) {
          const products = await response.json();
          setData(products);
          setFilter(products);
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();

    return () => {
      componentMounted.current = false;
    };
  }, []);

  const Loading = () => (
    <>
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="text-center text-xl font-bold text-gray-600"
        >
          <Skeleton height={350} />
        </div>
      ))}
    </>
  );

  const filterProduct = (cat: string) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => (
    <>
      {/* Button Filters */}
      <div className="flex justify-center mb-5 pb-5 space-x-4">
        <button
          className="btn btn-outline-dark hover:bg-gray-700 hover:text-white py-2 px-4 rounded-lg transition-all"
          onClick={() => setFilter(data)} // Show all products
        >
          All
        </button>
        <button
          className="btn btn-outline-dark hover:bg-gray-700 hover:text-white py-2 px-4 rounded-lg transition-all"
          onClick={() => filterProduct("men's clothing")} // Filter by category
        >
          Men&apos;s Clothing
        </button>
        <button
          className="btn btn-outline-dark hover:bg-gray-700 hover:text-white py-2 px-4 rounded-lg transition-all"
          onClick={() => filterProduct("women's clothing")} // Filter by category
        >
          Women&apos;s Clothing
        </button>
        <button
          className="btn btn-outline-dark hover:bg-gray-700 hover:text-white py-2 px-4 rounded-lg transition-all"
          onClick={() => filterProduct("jewelery")} // Fix spelling
        >
          Jewelry
        </button>
        <button
          className="btn btn-outline-dark hover:bg-gray-700 hover:text-white py-2 px-4 rounded-lg transition-all"
          onClick={() => filterProduct("electronics")} // Filter by category
        >
          Electronics
        </button>
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filter.map((product) => (
          <div key={product.id} className="flex justify-center">
            <div className="card w-full max-w-xs bg-white rounded-lg shadow-md hover:shadow-xl transition-all">
              <Image
                src={product.image}
                alt={product.title}
                width={250}
                height={250}
                className="card-img-top w-full h-64 object-contain rounded-t-lg"
              />
              <div className="card-body p-4">
                <h5 className="card-title text-lg font-semibold truncate">
                  {product.title}
                </h5>
                <p className="card-text text-gray-600 font-bold text-xl">
                  ${product.price}
                </p>
                <Link
                  href={`/product/${product.id}`} // Use Next.js dynamic routing
                  className="btn bg-blue-500 text-white hover:bg-blue-700 py-2 px-4 rounded-lg mt-4 inline-block w-full text-center"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="container my-5 py-5 px-4">
        <div className="row">
          <div className="col-12 mb-5 text-center">
            <h1 className="text-4xl font-bold text-gray-800">Latest Products</h1>
            <hr className="my-4 border-t-2 border-gray-300" />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
