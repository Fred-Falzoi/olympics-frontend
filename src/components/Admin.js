import React, { useState } from 'react';

const Admin = () => {
  const [offers, setOffers] = useState([
    { id: 1, name: 'Offre Solo', price: 100 },
    { id: 2, name: 'Offre Duo', price: 180 },
    { id: 3, name: 'Offre Familiale', price: 320 }
  ]);

  const [newOffer, setNewOffer] = useState({ name: '', price: '' });

  // Ajouter une nouvelle offre
  const addOffer = () => {
    const newId = offers.length + 1;
    const newOfferWithId = { ...newOffer, id: newId };
    setOffers([...offers, newOfferWithId]);
    setNewOffer({ name: '', price: '' });
  };

  // Modifier une offre existante
  const updateOffer = (id, updatedOffer) => {
    setOffers(
      offers.map((offer) =>
        offer.id === id ? { ...offer, ...updatedOffer } : offer
      )
    );
  };

  // Supprimer une offre
  const deleteOffer = (id) => {
    setOffers(offers.filter((offer) => offer.id !== id));
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
        <button onClick={addOffer}>Ajouter l'offre</button>
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
                  updateOffer(offer.id, { name: e.target.value })
                }
              />
              <input
                type="number"
                value={offer.price}
                onChange={(e) =>
                  updateOffer(offer.id, { price: e.target.value })
                }
              />
              <button onClick={() => deleteOffer(offer.id)}>Supprimer</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Admin;
