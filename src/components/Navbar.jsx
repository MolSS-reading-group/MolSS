import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import AnimatedLogo from './AnimatedLogo';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="glass-nav navbar">
      <div className="container navbar-container">
        {/* Math: Internal canvas empty space is 27.5% per side. On a 52px canvas, that's exactly 14.3px empty space on the left.
            Applying a -14px left margin perfectly snaps the actual visual graphic flush with the container alignments below it! */}
        <NavLink to="/" className="navbar-logo" onClick={closeMenu} style={{ marginLeft: '-14px' }}>
          <AnimatedLogo size={52} />
          <span className="logo-text text-gradient" style={{ fontSize: '24px', fontWeight: '500', transform: 'translateY(2px)', lineHeight: 1 }}>MolSS</span>
        </NavLink>
        
        {/* Desktop Links */}
        <div className="navbar-links desktop-only">
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

        {/* Mobile Hamburger Button */}
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Modal Dropdown */}
      {isOpen && (
        <div className="mobile-dropdown">
          <NavLink to="/schedule" onClick={closeMenu} className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
            <span>Schedule</span>
          </NavLink>
          <NavLink to="/people" onClick={closeMenu} className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
            <span>People</span>
          </NavLink>
          <a href="https://www.youtube.com/@molss.ml4molecule" target="_blank" rel="noopener noreferrer" onClick={closeMenu} className="nav-link external">
            <span>Recording</span>
          </a>
        </div>
      )}
    </nav>
  );
}
