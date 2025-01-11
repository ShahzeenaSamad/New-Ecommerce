"use client"
// CartContext.tsx
import React, { createContext, useState, useContext, ReactNode } from "react";

// Define the structure of the Cart Item
interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image:string;
  size:number;
  color:string;
}

// Define the structure of the Cart Context
interface CartContextType {
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (id: number) => void;
  increment: (id: number) => void;
  decrement: (id: number) => void;
  clearCart: () => void;
  getCartItemCount: () => number; // Function to get the total count of items
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: CartItem) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex((item) => item.id === product.id);
      if (existingProductIndex !== -1) {
        // If the product already exists, increase its quantity
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += 1;
        return updatedCart;
      }
      // If it's a new product, add it to the cart
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };
  const increment = (id: number) => {
    setCart((prevCart) => {
      return prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
    });
  };

  const decrement = (id: number) => {
    setCart((prevCart) => {
      return prevCart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    });
  };


  // Function to get total item count in the cart
  const getCartItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider
    value={{
      cart,
      addToCart,
      removeFromCart,
      increment,
      decrement,
      clearCart,
      getCartItemCount,
    }}
  >
    {children}
    </CartContext.Provider>
  );
};
   


// Custom hook to use cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};