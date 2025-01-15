

"use client";
import { useEffect, useState } from "react";
import { useParams } from 'next/navigation';
import { useCart } from '../../components/CartContext'; // Import useCart hook
import Image from "next/image";
import Link from "next/link"; // Import Link for navigation

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
}

const ProductDetailPage = () => {
  const { id } = useParams();  // Get the product ID from the URL
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  // Get the addToCart function from the CartContext
  const { addToCart } = useCart(); 

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
        setLoading(false);
      };

      fetchProduct();
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  // Render rating stars based on the rating value
  const renderRating = (rating: number) => {
    const stars = Math.round(rating);
    return "★".repeat(stars) + "☆".repeat(5 - stars); // Render stars
  };

  const handleAddToCart = () => {
    if (product) {
      const cartItem = {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity: 1,   // You can customize this, maybe based on user input
        size: 0,       // Here, size is a number (set it to a default number, like 0)
        color: "",     // You can set default color or let user choose
      };

      addToCart(cartItem);  // Add the new cart item with the required fields
    }
  };

  return (
    <div className="container my-5 py-5 px-4">
      {product && (
        <div className="flex justify-center">
          <div className="w-1/2 p-4">
            <Image
              src={product.image}
              alt={product.title}
              width={250}
              height={250}
              className="w-full h-80 object-contain mx-auto"
            />
          </div>

          <div className="w-1/2 p-4">
            {/* Product Category */}
            <p className="text-sm text-gray-600 font-semibold mb-2">{product.category}</p>

            {/* Product Title */}
            <h1 className="text-4xl font-bold mb-4">{product.title}</h1>

            {/* Product Price */}
            <p className="text-xl font-bold text-gray-600 mb-4">${product.price}</p>

            {/* Product Rating */}
            <div className="mb-4">
              <span className="text-yellow-500 font-bold">
                {renderRating(product.rating.rate)}
              </span>
              <span className="ml-2 text-gray-500">({product.rating.count} reviews)</span>
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
                href="/cart"
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

export default ProductDetailPage;