import React from 'react';
import { NavLink } from 'react-router-dom';
import AnimatedLogo from './AnimatedLogo';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="glass-nav navbar">
      <div className="container navbar-container">
        <NavLink to="/" className="navbar-logo">
          <AnimatedLogo size={52} />
          <span className="logo-text text-gradient" style={{ fontSize: '24px', fontWeight: '500', transform: 'translateY(2px)', lineHeight: 1 }}>MolSS</span>
        </NavLink>
        
        <div className="navbar-links">
          <NavLink to="/schedule" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
            <span>Schedule</span>
          </NavLink>
          <NavLink to="/people" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
            <span>People</span>
          </NavLink>
          <a href="https://www.youtube.com/@molss.ml4molecule" target="_blank" rel="noopener noreferrer" className="nav-link external">
            <span>Recording</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
