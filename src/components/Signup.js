import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  // Initialisation de l'état pour les données du formulaire
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  // Initialisation de l'état pour les messages d'erreur
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Hook pour la navigation

  // Fonction pour gérer les changements dans les champs du formulaire
  const handleChange = (e) => {
    setFormData({
      ...formData, // Conserve les autres valeurs du formulaire
      [e.target.name]: e.target.value, // Met à jour la valeur modifiée
    });
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche le comportement par défaut de soumission du formulaire

    try {
      // Envoyer une requête POST à l'API pour l'inscription
      const response = await fetch('https://olympics-backend.onrender.com/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Envoyer les données du formulaire au format JSON
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Inscription réussie:', data);
        // Rediriger l'utilisateur vers la page de connexion après l'inscription réussie
        navigate('/auth');
      } else {
        // Gestion des erreurs renvoyées par l'API
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Erreur lors de l\'inscription');
      }
    } catch (error) {
      console.error('Erreur:', error);
      setErrorMessage('Impossible de contacter le serveur.');
    }
  };

  return (
    <div className="container">
      <h1>Inscription</h1>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} {/* Affiche le message d'erreur si présent */}
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Nom"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Mot de passe"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn">S'inscrire</button> {/* Bouton de soumission du formulaire */}
      </form>
    </div>
  );
};

export default Signup; // Exportation du composant Signup
