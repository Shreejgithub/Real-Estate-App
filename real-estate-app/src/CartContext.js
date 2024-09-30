// import { createContext, useEffect, useState } from 'react';

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (item) => {
//     setCartItems((prevItems) => [...prevItems, item]);
//   };

//   const removeFromCart = (itemToRemove) => {
//     const updatedCart = cartItems.filter(item => item !== itemToRemove);
//     setCartItems(updatedCart);
//     localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update local storage
//   };

//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem('cart'));
//     if (storedCart) {
//       setCartItems(storedCart); // Restore cart items from local storage
//     }
//   }, []);

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, setCartItems }}>
//       {children}
//     </CartContext.Provider>
//   );
// };


import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0); // State to track cart count

  const addToCart = (item) => {
    const updatedCart = [...cartItems, item];
    setCartItems(updatedCart);
    setCartCount(updatedCart.length); // Update cart count
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update localStorage
  };

  const removeFromCart = (itemToRemove) => {
    const updatedCart = cartItems.filter(item => item !== itemToRemove);
    setCartItems(updatedCart);
    setCartCount(updatedCart.length); // Update cart count
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update localStorage
  };

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) {
      setCartItems(storedCart); // Restore cart items from localStorage
      setCartCount(storedCart.length); // Set cart count based on restored items
    }
  }, []);

  return (
    <CartContext.Provider value={{ cartItems, cartCount, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
