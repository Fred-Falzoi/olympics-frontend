import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  // Utilisation du contexte pour obtenir les éléments du panier
  const { cartItems } = useContext(CartContext);

  // Calcul du prix total des articles dans le panier
  const totalPrice = cartItems.reduce((total, offer) => total + offer.price, 0);

  return (
    <div className="container">
      <h1>Votre Panier</h1>
      {cartItems.length > 0 ? (
        <section>
          <ul>
            {cartItems.map((offer) => (
              <li key={offer.id}>
                {offer.name} - {offer.price}€ {/* Affichage du nom et du prix de chaque article */}
              </li>
            ))}
          </ul>
          <h3>Total: {totalPrice}€</h3> {/* Affichage du prix total */}
          
          {/* Lien vers la page de paiement */}
          <Link to="/payment">
            <button>Payer</button>
          </Link>
        </section>
      ) : (
        <p>Votre panier est vide.</p> // Message lorsque le panier est vide
      )}
      {/* Affichage d'une image liée au panier */}
      <img src={`${process.env.PUBLIC_URL}/images/cart-image.jpg`} alt="Mon Panier" />
    </div>
  );
};

export default Cart; // Exportation du composant Cart
