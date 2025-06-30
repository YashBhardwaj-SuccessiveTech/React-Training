// 11.Build a shopping cart application using the useContext hook.
// Set up a context to manage the state of the shopping cart.
// Create components to display products and a shopping cart.
// Use the useContext hook to access the cart state and update it.
// Allow users to add and remove items from the cart.
// Display the total price of items in the cart.


"use client";
import { createContext, useState } from "react";
import { ProductList, ShoppingCart } from "@/Components/Assignment2Components/ShoppingCart";

const CartContext = createContext();
export default function CartProvider() {
  const [cartItems, setCartItems] = useState([]);

  const addItems = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeItems = (id) => {
    setCartItems(cartItems.filter((ele) => ele.id !== id));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <CartContext.Provider value={{ cartItems, addItems, removeItems, total }}>
      <h1>Shopping Cart</h1>
      <div>
        <ProductList />
        <ShoppingCart />
      </div>
    </CartContext.Provider>
  );
}

export { CartContext };
