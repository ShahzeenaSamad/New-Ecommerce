"use client"
import { useCart } from "./CartContext"; 
import { Link } from "react-router-dom";
import Image from "next/image";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";

const CartPage = () => {
  const { cart, removeFromCart, increment, decrement } = useCart();

  return (
    <div className="flex w-full h-screen justify-center p-10 bg-gray-100 mt-10">
      <div className="w-full max-w-[1200px] flex flex-col md:flex-row gap-6">
        {/* Left Side - Cart Items */}
        <div className="w-full md:w-[70%] bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-4xl font-bold mb-6">Your Cart</h1>

          {cart.length === 0 ? (
            <div className="text-center mt-10">
              <p>Your cart is empty.</p>
              <Link to="/" className="text-blue-500">Continue shopping</Link>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center mb-4 px-4 py-2 border-b">
                {/* Item Image */}
                <div className="w-[124px] h-[124px]">
                  <Image
                    src={item.image} // Ensure item.image is a valid path to the image
                    alt={item.title}
                    width={124}
                    height={124}
                  />
                </div>

                {/* Item Details */}
                <div className="flex flex-col justify-between w-[227px] ml-4">
                  <p className="font-bold text-lg">{item.title}</p>
                  <p className="text-sm">Size: {item.size}</p>
                  <p className="text-sm">Color: {item.color}</p>
                  <p className="font-bold text-2xl">${item.price}</p>
                </div>

                {/* Quantity and Remove Button */}
                <div className="flex items-center justify-center w-[150px]">
                  <RiDeleteBin6Fill
                    className="text-red-500 text-2xl cursor-pointer"
                    onClick={() => removeFromCart(item.id)}
                  />
                  <div className="flex items-center justify-center bg-gray-100 rounded-full h-8 mt-2 mx-4">
                    <button
                      className="text-sm font-medium text-gray-700"
                      onClick={() => decrement(item.id)}
                    >
                      <FiMinus className="cursor-pointer text-lg" />
                    </button>
                    <span className="mx-4">{item.quantity}</span>
                    <button
                      className="text-sm font-medium text-gray-700"
                      onClick={() => increment(item.id)}
                    >
                      <FaPlus className="cursor-pointer text-lg" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Right Side - Order Summary */}
        <div className="w-full md:w-[30%] bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>

          <div className="flex justify-between items-center mb-6">
            <p className="font-bold text-lg">Total Price</p>
            <p className="text-xl font-bold">
              ${cart.reduce((total, item) => total + item.price * item.quantity, 0)}
            </p>
          </div>

          {/* Proceed to Checkout Button */}
          <div className="flex justify-center">
            <Link to="/checkout">
              <button className="w-full py-2 px-4 bg-black text-white rounded-full text-lg">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;