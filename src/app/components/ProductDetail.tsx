"use client";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useCart } from "./CartContext";
import Image from "next/image";

interface Product {
  category: string;
  description: string;
  id: number;
  title: string;
  price: number;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const ProductDetail = () => {
  const { id } = useParams(); // Get the id from the URL
  const { addToCart } = useCart(); // Accessing the addToCart method from the context
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);

      const data = await response.json();
      setProduct(data);
      setLoading(false);
    };

    getProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  // Render star rating
  const renderRating = (rate: number) => {
    const filledStars = Array(Math.floor(rate)).fill("★");
    const emptyStars = Array(5 - Math.floor(rate)).fill("☆");
    return [...filledStars, ...emptyStars].join(" ");
  };
  // Add to cart handler
  const handleAddToCart = () => {
    if (product) {
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: 1,
        image: product.image,
        size: 0,
        color: "",
      });
    }
  };

  return (
    <div className="container my-5 py-5 px-4">
      {product && (
        <div className="flex justify-center">
          {/* Product Image */}
          <div className="w-1/2 p-4">
            <Image
              src={product.image}
              alt={product.title}
              className="w-full h-80 object-contain mx-auto"
            />
          </div>

          {/* Product Details */}
          <div className="w-1/2 p-4">
            {/* Category Text (Positioned at the Top) */}
            <p className="text-sm text-gray-600 font-semibold mb-2">
              {product.category}
            </p>

            {/* Product Title */}
            <h1 className="text-4xl font-bold mb-4">{product.title}</h1>

            {/* Product Price */}
            <p className="text-xl font-bold text-gray-600 mb-4">
              $ {product.price}
            </p>

            {/* Rating */}
            <div className="mb-4">
              <span className="text-yellow-500 font-bold">
                {renderRating(product.rating.rate)}
              </span>
              <span className="ml-2 text-gray-500">
                ({product.rating.count} reviews)
              </span>
            </div>

            {/* Product Description */}
            <p className="text-md text-gray-700 mb-6">{product.description}</p>

            {/* Buttons: Add to Cart & Go to Cart */}
            <div className="flex space-x-4">
              {/* Add to Cart Button */}
            
              <button
                className="btn bg-blue-500 text-white hover:bg-blue-700 py-2 px-4 rounded-lg mt-4"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>

              {/* Go to Cart Button */}
              <Link
                to="/cart"
                className="btn bg-green-500 text-white hover:bg-green-700 py-2 px-4 rounded-lg mt-4"
              >
                Go to Cart
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
