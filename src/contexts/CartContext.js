import React, { createContext, useState } from 'react';

// Créer un contexte pour le panier
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Initialisation de l'état pour les articles du panier
  const [cartItems, setCartItems] = useState([]);

  // Fonction pour ajouter un article au panier
  const addToCart = (offer) => {
    setCartItems([...cartItems, offer]); // Ajoute l'article au panier tout en conservant les articles existants
  };

  // Fonction pour retirer un article du panier
  const removeFromCart = (offerId) => {
    setCartItems(cartItems.filter(item => item.id !== offerId)); // Retire l'article correspondant à l'ID donné
  };

  return (
    // Fournir le contexte du panier avec les fonctions addToCart et removeFromCart
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children} {/* Rend tous les enfants passés en paramètres */}
    </CartContext.Provider>
  );
};
