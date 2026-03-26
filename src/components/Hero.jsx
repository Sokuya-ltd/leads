import React from 'react';
import './Hero.css';

function FloatCard({ emoji, name, price, stars, className }) {
  return (
    <div className={`float-card ${className}`}>
      <div className="float-card__img">{emoji}</div>
      <div className="float-card__info">
        <div className="float-card__name">{name}</div>
        <div className="float-card__stars">{'★'.repeat(stars)}{'☆'.repeat(5 - stars)}</div>
        <div className="float-card__price">£{price}</div>
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

        <h1 className="hero__title">
          Craving the<br />
          <span className="hero__title--orange">Taste of Home?</span><br />
          We Deliver It to<br />
          Your Door.
        </h1>

        <p className="hero__sub">
          From jollof to jerk, basmati to bitter leaf — we source the
          ingredients your corner shop doesn't stock and deliver them
          straight to your door. No car. No heavy bags. No compromise.
        </p>

        <div className="hero__actions">
          <a href="#survey" className="btn-orange">
            Download App
            <span className="btn-orange__arrow">↗</span>
          </a>
          <a href="#how" className="btn-outline">Get Started</a>
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

        <div className="courier-card">
          <div className="courier-card__avatar">
            RW
            <span className="courier-card__status" />
          </div>
          <div className="courier-card__info">
            <span className="courier-card__name">Richard Watson</span>
            <span className="courier-card__role">Food Courier</span>
          </div>
          <div className="courier-card__call">📞</div>
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
        <div className="hero__blob" />

        <div className="hero__deco-clock">🕐</div>
        <div className="hero__deco-fire">🔥</div>

        {/* <div className="hero__food-circle" /> */}

        <FloatCard
          emoji="🐟"
          name="Dry Fish"
          price="7.49"
          stars={5}
          className="float-card--top"
        />
        <FloatCard
          emoji="🍠"
          name="Yam"
          price="12.60"
          stars={4}
          className="float-card--bottom"
        />
      </div>
    </section>
  );
}
