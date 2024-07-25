// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Adjust path as needed
import Footer from './components/Footer'; // Adjust path as needed
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Gallery from './pages/Gallery'; // Ensure the path is correct


const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="/gallery" element={<Gallery />} /> {}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
