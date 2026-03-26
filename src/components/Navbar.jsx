import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__logo">
        Suko<span>ya</span>
      </div>

      {/* <ul className="navbar__links">
        <li><span className="navbar__dropdown">Inside Sukoya ▾</span></li>
        <li><span className="navbar__dropdown">Partner Up ▾</span></li>
        <li><a href="#how">Marketplace</a></li>
        <li><span className="navbar__dropdown">Help Hub ▾</span></li>
      </ul> */}

      <a href="#survey" className="navbar__cta">
        Download App ↗
      </a>
    </nav>
  );
}
