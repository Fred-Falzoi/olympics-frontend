import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home'; // Importation du composant Home
import Offers from './components/Offers'; // Importation du composant Offers
import Cart from './components/Cart'; // Importation du composant Cart
import Auth from './components/Auth'; // Importation du composant Auth
import Signup from './components/Signup'; // Importation du composant Signup
import Header from './components/Header'; // Importation du composant Header
import Admin from './components/Admin'; // Importation du composant Admin
import MockPayment from './components/MockPayment'; // Importation du composant MockPayment
import './App.css'; // Importation du fichier CSS
import { CartProvider } from './CartContext'; // Importation du CartProvider pour gérer le contexte du panier

function App() {
  return (
    // Envelopper l'application dans le CartProvider pour fournir le contexte du panier
    <CartProvider>
      <Router>
        <div className="App">
          <Header /> {/* Le Header sera visible sur toutes les pages */}
          <Routes>
            <Route path="/" element={<Home />} /> {/* Route pour la page d'accueil */}
            <Route path="/offers" element={<Offers />} /> {/* Route pour la page des offres */}
            <Route path="/cart" element={<Cart />} /> {/* Route pour la page du panier */}
            <Route path="/auth" element={<Auth />} /> {/* Route pour la page d'authentification */}
            <Route path="/signup" element={<Signup />} /> {/* Route pour la page d'inscription */}
            <Route path="/admin" element={<Admin />} /> {/* Route pour la page d'administration */}
            <Route path="/payment" element={<MockPayment />} /> {/* Route pour la simulation de paiement */}
            <Route path="*" element={<Navigate to="/" />} /> {/* Redirige vers la page d'accueil pour les routes non définies */}
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App; // Exportation du composant App
