import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <nav style={{ padding: '1rem', background: '#333', color: '#fff' }}>
          <Link to="/" style={{ marginRight: '1rem', color: 'white', textDecoration: 'none' }}>Home</Link>
          <Link to="/about" style={{ marginRight: '1rem', color: 'white', textDecoration: 'none' }}>About</Link>
          <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
