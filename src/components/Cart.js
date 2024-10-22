import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  const totalPrice = cartItems.reduce((total, offer) => total + offer.price, 0);

  return (
    <div className="container">
      <h1>Votre Panier</h1>
      {cartItems.length > 0 ? (
        <section>
          <ul>
            {cartItems.map((offer) => (
              <li key={offer.id}>
                {offer.name} - {offer.price}€
              </li>
            ))}
          </ul>
          <h3>Total: {totalPrice}€</h3>
          <button>Payer</button>
        </section>
      ) : (
        <p>Votre panier est vide.</p>
      )}
      <img src={`${process.env.PUBLIC_URL}/images/cart-image.jpg`} alt="Mon Panier" />
    </div>
  );
};

export default Cart;
