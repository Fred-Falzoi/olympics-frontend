import React, { createContext, useState } from 'react';

// Créer un contexte pour le panier
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (offer) => {
    // Vérification si l'offre existe déjà dans le panier
    if (!cartItems.some(item => item.id === offer.id)) {
      setCartItems([...cartItems, offer]);
      console.log('Offre ajoutée au panier:', offer); // Debug: pour vérifier que l'offre est bien ajoutée
    } else {
      console.log('Offre déjà dans le panier:', offer); // Debug: Si l'offre est déjà dans le panier
    }
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
