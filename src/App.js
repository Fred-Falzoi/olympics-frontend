import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Offers from './components/Offers';
import Cart from './components/Cart';
import Auth from './components/Auth';
import Header from './components/Header';
import Signup from './components/Signup';
import './App.css';
import { CartProvider } from './CartContext'; // Importer le CartProvider

function App() {
  return (
    // Envelopper toute l'application dans le CartProvider
    <CartProvider>
      <Router>
        <div className="App">
          <Header /> {/* Le Header sera visible sur toutes les pages */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="*" element={<Navigate to="/" />} /> {/* Redirige vers la page d'accueil */}
			<Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;

