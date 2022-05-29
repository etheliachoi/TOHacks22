import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import Dashboard from './components/Dashboard';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<HeroSection />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
