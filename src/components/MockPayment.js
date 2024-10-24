import React from 'react';

const MockPayment = () => {
  const handlePayment = () => {
    alert('Paiement simulé avec succès !');
  };

  return (
    <div className="payment-container"> {/* Remplace "container" par "payment-container" */}
      <h1>Simulation de Paiement</h1>
      <p>Veuillez cliquer sur le bouton ci-dessous pour simuler le paiement de votre commande.</p>
      <button onClick={handlePayment}>Simuler le Paiement</button>
    </div>
  );
};

export default MockPayment;
