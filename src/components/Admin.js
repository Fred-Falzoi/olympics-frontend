import React, { useState } from 'react';

const Admin = () => {
  // Initialisation de l'état avec une liste d'offres par défaut
  const [offers, setOffers] = useState([
    { id: 1, name: 'Offre Solo', price: 100 },
    { id: 2, name: 'Offre Duo', price: 180 },
    { id: 3, name: 'Offre Familiale', price: 320 }
  ]);

  // État pour la nouvelle offre à ajouter
  const [newOffer, setNewOffer] = useState({ name: '', price: '' });

  // Fonction pour ajouter une nouvelle offre
  const addOffer = () => {
    const newId = offers.length + 1; // Génère un nouvel ID basé sur la longueur de la liste
    const newOfferWithId = { ...newOffer, id: newId }; // Associe l'ID à la nouvelle offre
    setOffers([...offers, newOfferWithId]); // Ajoute la nouvelle offre à la liste
    setNewOffer({ name: '', price: '' }); // Réinitialise le formulaire
  };

  // Fonction pour modifier une offre existante
  const updateOffer = (id, updatedOffer) => {
    setOffers(
      offers.map((offer) =>
        offer.id === id ? { ...offer, ...updatedOffer } : offer // Met à jour l'offre correspondante par ID
      )
    );
  };

  // Fonction pour supprimer une offre
  const deleteOffer = (id) => {
    setOffers(offers.filter((offer) => offer.id !== id)); // Supprime l'offre correspondant à l'ID
  };

  return (
    <div className="container">
      <h1>Espace Administrateur</h1>

      {/* Formulaire pour ajouter une nouvelle offre */}
      <div>
        <h2>Ajouter une nouvelle offre</h2>
        <input
          type="text"
          placeholder="Nom de l'offre"
          value={newOffer.name}
          onChange={(e) => setNewOffer({ ...newOffer, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Prix"
          value={newOffer.price}
          onChange={(e) => setNewOffer({ ...newOffer, price: e.target.value })}
        />
        <button onClick={addOffer}>Ajouter l'offre</button> {/* Bouton pour ajouter l'offre */}
      </div>

      {/* Liste des offres existantes */}
      <div>
        <h2>Offres existantes</h2>
        <ul>
          {offers.map((offer) => (
            <li key={offer.id}>
              <input
                type="text"
                value={offer.name}
                onChange={(e) =>
                  updateOffer(offer.id, { name: e.target.value }) // Modifie le nom de l'offre
                }
              />
              <input
                type="number"
                value={offer.price}
                onChange={(e) =>
                  updateOffer(offer.id, { price: e.target.value }) // Modifie le prix de l'offre
                }
              />
              <button onClick={() => deleteOffer(offer.id)}>Supprimer</button> {/* Bouton pour supprimer l'offre */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Admin; // Exportation du composant Admin
