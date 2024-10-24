import React from 'react';

const MockPayment = () => {
  // Fonction pour simuler le paiement
  const handlePayment = () => {
    alert('Paiement simulé avec succès !'); // Alerte indiquant que le paiement a été simulé
  };

  return (
    <div className="payment-container">
      <h1>Simulation de Paiement</h1>
      <p>Veuillez cliquer sur le bouton ci-dessous pour simuler le paiement de votre commande.</p>
      <button onClick={handlePayment}>Simuler le Paiement</button> {/* Bouton pour simuler le paiement */}
    </div>
  );
};

export default MockPayment; // Exportation du composant MockPayment
