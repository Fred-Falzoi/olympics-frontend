import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/offers">Voir les Offres</Link></li>
          <li><Link to="/cart">Mon Panier</Link></li>
          <li><Link to="/auth">Connexion</Link></li>
          <li><Link to="/signup">Inscription</Link></li>
          <li><Link to="/admin">Admin</Link></li> {/* Lien vers Admin */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
