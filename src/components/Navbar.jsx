import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../logo.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__brand">
        <img src={logo} alt="Sokuya" className="nav__logo" />
      </div>

      {/* <ul className="nav__links">
        <li><span className="nav__drop">Inside Sokuya ▾</span></li>
        <li><span className="nav__drop">Partner Up ▾</span></li>
        <li><a href="#how">Marketplace</a></li>
        <li><span className="nav__drop">Help Hub ▾</span></li>
      </ul>

      <a href="#survey" className="nav__cta">Download App ↗</a> */}
    </nav>
  );
}
