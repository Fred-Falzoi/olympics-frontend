import React, { useContext, useState } from 'react';
import { CartContext } from '../CartContext';
import { useNavigate } from 'react-router-dom'; // Importer useNavigate pour la redirection

const Offers = () => {
  const offers = [
    { id: 1, name: 'Offre Solo', price: 100 },
    { id: 2, name: 'Offre Duo', price: 180 },
    { id: 3, name: 'Offre Familiale', price: 320 }
  ];

  const { addToCart } = useContext(CartContext);
  const [selectedOffers, setSelectedOffers] = useState([]);
  const navigate = useNavigate(); // Initialiser la fonction de redirection

  const handleSelectOffer = (id) => {
    if (selectedOffers.includes(id)) {
      setSelectedOffers(selectedOffers.filter(offerId => offerId !== id));
    } else {
      setSelectedOffers([...selectedOffers, id]);
    }
  };

  const handleAddToCart = () => {
    const selectedOfferDetails = offers.filter(offer => selectedOffers.includes(offer.id));
    selectedOfferDetails.forEach(offer => addToCart(offer)); // Ajouter chaque offre sélectionnée au panier

    // Rediriger vers la page du panier après l'ajout au panier
    navigate('/cart');
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
        <img src={`${process.env.PUBLIC_URL}/images/ticket-offer.jpg`} alt="Offre de billets" />
        <div className="button-container">
          <button
            className="btn"
            disabled={selectedOffers.length === 0}
            onClick={handleAddToCart} // Appel de la fonction handleAddToCart pour ajouter et rediriger
          >
            Ajouter au Panier
          </button>
        </div>
      </section>
    </div>
  );
};

export default Offers;
