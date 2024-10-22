import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Auth = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Envoyer une requête de connexion à l' API
      const response = await fetch('https://olympics-backend.onrender.com/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Authentification réussie:', data);
        // Sauvegarder le token JWT dans le localStorage
        localStorage.setItem('authToken', data.token);
        // Rediriger l'utilisateur après la connexion
        navigate('/');
      } else {
        // Gestion des erreurs
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
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
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

      <p>Pas encore de compte ? <Link to="/signup">S'inscrire</Link></p>

      <img src={`${process.env.PUBLIC_URL}/images/auth-image.jpg`} alt="Connexion" />
    </div>
  );
};

export default Auth;
