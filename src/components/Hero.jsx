import React from 'react';
import './Hero.css';
import logo from '../logo.png';
import blobBg from '../hero_icon-wrap.jpg';

function FloatCard({ emoji, name, price, stars, className }) {
  return (
    <div className={`fcard ${className}`}>
      <div className="fcard__img">{emoji}</div>
      <div className="fcard__body">
        <p className="fcard__name">{name}</p>
        <p className="fcard__stars">{'★'.repeat(stars)}{'☆'.repeat(5 - stars)}</p>
        <p className="fcard__price">£{price}</p>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero">
      {/* LEFT */}
      <div className="hero__left">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          🌍 Made for students &amp; the diaspora · Leicester
        </div>

        <h1 className="hero__h1">
          Craving the<br/>
          <span className="hero__h1--orange">Taste of Home?</span><br/>
          We Deliver It to<br/>Your Door.
        </h1>

        <p className="hero__sub">
          From jollof to jerk, basmati to bitter leaf — we source the
          ingredients your corner shop doesn't stock and deliver them
          straight to your door. No car. No heavy bags. No compromise.
        </p>

        <div className="hero__btns">
          {/* <a href="#survey" className="hero__btn-primary">
            Download App
            <span className="hero__btn-arrow">↗</span>
          </a> */}
          <a href="#how" className="hero__btn-secondary">Get Started</a>
        </div>

        <div className="hero__how">
          <div className="hero__how-step">
            <span className="hero__how-num">1</span>
            <span className="hero__how-icon">📋</span>
            <span className="hero__how-text">Tell us<br/>your list</span>
          </div>
          <span className="hero__how-arr">→</span>
          <div className="hero__how-step">
            <span className="hero__how-num">2</span>
            <span className="hero__how-icon">🛒</span>
            <span className="hero__how-text">We shop<br/>it fresh</span>
          </div>
          <span className="hero__how-arr">→</span>
          <div className="hero__how-step">
            <span className="hero__how-num">3</span>
            <span className="hero__how-icon">🚴</span>
            <span className="hero__how-text">At your door<br/>same day</span>
          </div>
        </div>

        {/* Courier pill */}
        <div className="courier">
          <div className="courier__avatar">
            RW<span className="courier__dot"/>
          </div>
          <div className="courier__info">
            <span className="courier__name">Richard Watson</span>
            <span className="courier__role">Food Courier</span>
          </div>
          <div className="courier__call">📞</div>
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-num">50+</span>
            <span className="hero__stat-label">Ingredients</span>
          </div>
          <div className="hero__stat-sep" />
          <div className="hero__stat">
            <span className="hero__stat-num">⚡</span>
            <span className="hero__stat-label">Same Day</span>
          </div>
          <div className="hero__stat-sep" />
          <div className="hero__stat">
            <span className="hero__stat-num">8+</span>
            <span className="hero__stat-label">Cuisines</span>
          </div>
        </div>

        <div className="hero__communities">
          <span className="hero__communities-label">Serving</span>
          <div className="hero__communities-flags">
            🇳🇬 🇬🇭 🇯🇲 🇮🇳 🇵🇰 🇨🇳 🇵🇭 🇸🇳
          </div>
          <span className="hero__communities-label">&amp; growing</span>
        </div>
      </div>

      {/* RIGHT */}
      <div className="hero__right">
        <div className="hero__blob" style={{ backgroundImage: `url(${blobBg})` }}/>
        <div className="hero__icon-wrap">
          <img src={logo} alt="Sokuya" className="hero__icon-logo" />
        </div>
        <div className="hero__deco-clock">🕐</div>
        <div className="hero__deco-fire">🔥</div>
        <FloatCard emoji="🐟" name="Dry Fish"  price="7.49"  stars={5} className="fcard--a"/>
        <FloatCard emoji="🍠" name="Yam"       price="12.60" stars={4} className="fcard--b"/>
      </div>
    </section>
  );
}
