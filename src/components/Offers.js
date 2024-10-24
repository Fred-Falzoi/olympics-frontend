import React, { useContext, useState } from 'react';
import { CartContext } from '../CartContext';
import { Link } from 'react-router-dom';

const Offers = () => {
  const offers = [
    { id: 1, name: 'Offre Solo', price: 100 },
    { id: 2, name: 'Offre Duo', price: 180 },
    { id: 3, name: 'Offre Familiale', price: 320 }
  ];

  const { addToCart } = useContext(CartContext);
  const [selectedOffers, setSelectedOffers] = useState([]);

  const handleSelectOffer = (id) => {
    if (selectedOffers.includes(id)) {
      setSelectedOffers(selectedOffers.filter(offerId => offerId !== id));
    } else {
      setSelectedOffers([...selectedOffers, id]);
    }
  };

  const handleAddToCart = () => {
    const selectedOfferDetails = offers.filter(offer => selectedOffers.includes(offer.id));
    selectedOfferDetails.forEach(offer => addToCart(offer));
  };

  return (
    <div className="container">
      <h1>Nos Offres de Billets</h1>
      <section>
        <p>Profitez de nos meilleures offres pour les Jeux Olympiques :</p>
        <ul>
          {offers.map((offer) => (
            <li key={offer.id}>
              <input
                type="checkbox"
                id={`offer-${offer.id}`}
                checked={selectedOffers.includes(offer.id)}
                onChange={() => handleSelectOffer(offer.id)}
              />
              <label htmlFor={`offer-${offer.id}`}>
                {offer.name} - {offer.price}€
              </label>
            </li>
          ))}
        </ul>
        <div className="button-container">
          <button
            className="btn"
            disabled={selectedOffers.length === 0}
            onClick={handleAddToCart}
          >
            Ajouter au Panier
          </button>
        </div>
        
        {/* Lien texte vers la page du panier */}
        <div className="link-container">
          <p>
            <Link to="/cart" style={{ textDecoration: 'underline', color: 'blue' }}>
              Allez au Panier
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Offers;
