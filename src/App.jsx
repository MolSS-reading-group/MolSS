import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import People from './pages/People';
import MouseParticles from './components/MouseParticles';

function App() {
  return (
    <Router>
      <div className="app-wrapper" style={{ position: 'relative', minHeight: '100vh' }}>
        <MouseParticles />
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/people" element={<People />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
