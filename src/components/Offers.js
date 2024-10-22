const handleAddToCart = async () => {
  const selectedOfferDetails = offers.filter(offer => selectedOffers.includes(offer.id));
  
  try {
    for (const offer of selectedOfferDetails) {
      const response = await fetch('https://olympics-backend.onrender.com/api/tickets/buy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('authToken')}` // Ajouter le token JWT
        },
        body: JSON.stringify({ offerId: offer.id }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.message); // Message de succès pour chaque offre achetée
        addToCart(offer); // Ajouter l'offre au panier
      } else {
        console.error('Erreur lors de l\'achat du billet');
      }
    }
  } catch (error) {
    console.error('Erreur lors de l\'achat:', error);
  }
};
