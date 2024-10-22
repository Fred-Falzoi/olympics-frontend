import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Auth = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Authentification réussie avec:', formData);
    navigate('/');
  };

  return (
    <div className="container">
      <h1>Connexion</h1>
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

      {/* Ajout de l'image de connexion */}
      <img src={`${process.env.PUBLIC_URL}/images/auth-image.jpg`} alt="Connexion" />
    </div>
  );
};

export default Auth;
