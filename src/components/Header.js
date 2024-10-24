import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li> {/* Lien vers la page d'accueil */}
          <li><Link to="/offers">Voir les Offres</Link></li> {/* Lien vers la page des offres */}
          <li><Link to="/cart">Mon Panier</Link></li> {/* Lien vers la page du panier */}
          <li><Link to="/auth">Connexion</Link></li> {/* Lien vers la page de connexion */}
          <li><Link to="/signup">Inscription</Link></li> {/* Lien vers la page d'inscription */}
          <li><Link to="/admin">Admin</Link></li> {/* Lien vers la page d'administration */}
        </ul>
      </nav>
    </header>
  );
};

export default Header; // Exportation du composant Header
