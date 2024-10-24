import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Offers from './components/Offers';
import Cart from './components/Cart';
import Auth from './components/Auth';
import Signup from './components/Signup';
import Header from './components/Header';
import Admin from './components/Admin';
import MockPayment from './components/MockPayment';
import './App.css';
import { CartProvider } from './CartContext'; // Importer le CartProvider

function App() {
  return (
    <CartProvider> {/* Assure-toi que tout est bien enveloppé par CartProvider */}
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/payment" element={<MockPayment />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
