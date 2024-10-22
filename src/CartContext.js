import React, { createContext, useState } from 'react';

// Créer un contexte pour le panier
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (offer) => {
    setCartItems([...cartItems, offer]);
  };

  const removeFromCart = (offerId) => {
    setCartItems(cartItems.filter(item => item.id !== offerId));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
