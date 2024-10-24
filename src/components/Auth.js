import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Auth = () => {
  // Initialisation de l'état pour les données du formulaire
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // Initialisation de l'état pour les messages d'erreur
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Hook pour la navigation après l'authentification

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
      // Envoyer une requête POST à l'API pour l'authentification
      const response = await fetch('https://olympics-backend.onrender.com/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Envoyer les données du formulaire au format JSON
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Authentification réussie:', data);
        // Sauvegarder le token JWT dans le localStorage
        localStorage.setItem('authToken', data.token);
        // Rediriger l'utilisateur vers la page d'accueil après la connexion réussie
        navigate('/');
      } else {
        // Gestion des erreurs renvoyées par l'API
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Erreur lors de la connexion');
      }
    } catch (error) {
      console.error('Erreur:', error);
      setErrorMessage('Impossible de contacter le serveur.');
    }
  };

  return (
    <div className="container">
      <h1>Connexion</h1>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} {/* Affiche le message d'erreur si présent */}
      <form onSubmit={handleSubmit}>
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
        <button type="submit" className="btn">Se connecter</button>
      </form>

      <p>Pas encore de compte ? <Link to="/signup">S'inscrire</Link></p> {/* Lien vers la page d'inscription */}

      {/* Affichage d'une image liée au processus d'authentification */}
      <img src={`${process.env.PUBLIC_URL}/images/auth-image.jpg`} alt="Connexion" />
    </div>
  );
};

export default Auth; // Exportation du composant Auth
