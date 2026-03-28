import React from 'react';
import './Footer.css';
import logo from '../logo.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__brand">
        <img src={logo} alt="Sokuya" className="footer__logo" />
      </div>
      <p className="footer__mid">Launching in Leicester · For students, diaspora &amp; everyone craving the taste of home</p>
      <p className="footer__copy">© 2026 Sokuya. All rights reserved.</p>
    </footer>
  );
}
