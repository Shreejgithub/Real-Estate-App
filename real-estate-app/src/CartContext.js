import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (itemToRemove) => {
    const updatedCart = cartItems.filter(item => item !== itemToRemove);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update local storage
  };

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) {
      setCartItems(storedCart); // Restore cart items from local storage
    }
  }, []);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};