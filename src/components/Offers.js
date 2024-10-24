import React, { useContext, useState } from 'react';
import { CartContext } from '../CartContext';
import { Link } from 'react-router-dom';

const Offers = () => {
  // Liste des offres disponibles
  const offers = [
    { id: 1, name: 'Offre Solo', price: 100 },
    { id: 2, name: 'Offre Duo', price: 180 },
    { id: 3, name: 'Offre Familiale', price: 320 }
  ];

  // Utilisation du contexte pour ajouter des éléments au panier
  const { addToCart } = useContext(CartContext);
  const [selectedOffers, setSelectedOffers] = useState([]); // État pour gérer les offres sélectionnées

  // Fonction pour sélectionner ou désélectionner une offre
  const handleSelectOffer = (id) => {
    if (selectedOffers.includes(id)) {
      setSelectedOffers(selectedOffers.filter(offerId => offerId !== id)); // Supprime l'offre si déjà sélectionnée
    } else {
      setSelectedOffers([...selectedOffers, id]); // Ajoute l'offre à la sélection
    }
  };

  // Fonction pour ajouter les offres sélectionnées au panier
  const handleAddToCart = () => {
    const selectedOfferDetails = offers.filter(offer => selectedOffers.includes(offer.id));
    selectedOfferDetails.forEach(offer => addToCart(offer)); // Ajoute chaque offre sélectionnée au panier
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
                checked={selectedOffers.includes(offer.id)} // Vérifie si l'offre est sélectionnée
                onChange={() => handleSelectOffer(offer.id)} // Gère la sélection de l'offre
              />
              <label htmlFor={`offer-${offer.id}`}>
                {offer.name} - {offer.price}€ {/* Affiche le nom et le prix de l'offre */}
              </label>
            </li>
          ))}
        </ul>
        <div className="button-container">
          <button
            className="btn"
            disabled={selectedOffers.length === 0} // Désactive le bouton si aucune offre n'est sélectionnée
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

export default Offers; // Exportation du composant Offers
