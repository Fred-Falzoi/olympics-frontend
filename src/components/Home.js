import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <h1>Bienvenue à la billetterie des Jeux Olympiques 2024</h1>
      <section>
        <p>
          Découvrez les meilleures offres pour les billets des Jeux Olympiques 2024. Profitez de nos offres duo et familiales pour assister aux événements de votre choix !
        </p>
        <img src={`${process.env.PUBLIC_URL}/images/olympic-banner.jpg`} alt="Jeux Olympiques 2024" />
      </section>
      <section>
        <h2>Pourquoi nous choisir ?</h2>
        <p>
          Nos billets électroniques sont sécurisés, simples à utiliser, et garantissent une expérience inoubliable pour tous les événements olympiques.
        </p>
        <Link to="/offers">
          <button>Voir les offres</button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
