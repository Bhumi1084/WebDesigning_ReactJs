import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <nav>
            <Link to="/">Home</Link> | <Link to="/about">About</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
