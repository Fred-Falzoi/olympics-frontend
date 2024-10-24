import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <h1>Bienvenue aux Jeux Olympiques 2024</h1>
      <p>Découvrez les épreuves majeures des Jeux Olympiques à venir :</p>

      {/* Section affichant les épreuves majeures avec des liens vers les offres */}
      <div className="events">
        <div className="event">
          <Link to="/offers">
            <img src={`${process.env.PUBLIC_URL}/images/Athle.jpg`} alt="Athlétisme" /> {/* Image de l'athlétisme */}
            <h3>Athlétisme</h3>
          </Link>
        </div>

        <div className="event">
          <Link to="/offers">
            <img src={`${process.env.PUBLIC_URL}/images/natation.jpg`} alt="Natation" /> {/* Image de la natation */}
            <h3>Natation</h3>
          </Link>
        </div>

        <div className="event">
          <Link to="/offers">
            <img src={`${process.env.PUBLIC_URL}/images/gym.jpg`} alt="Gymnastique" /> {/* Image de la gymnastique */}
            <h3>Gymnastique</h3>
          </Link>
        </div>

        <div className="event">
          <Link to="/offers">
            <img src={`${process.env.PUBLIC_URL}/images/cyclism.jpg`} alt="Cyclisme" /> {/* Image du cyclisme */}
            <h3>Cyclisme</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home; // Exportation du composant Home
