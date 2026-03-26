import React from 'react';
import './WhatWeServe.css';

const cards = [
  {
    icon: '🌍',
    iconClass: 'icon--orange',
    title: 'Your Ingredient, Found',
    desc: 'Stockfish, bitter leaf, jerk seasoning, pandan leaves — if your recipe calls for it, we track it down at Leicester\'s best markets. No substitutes without asking.',
  },
  {
    icon: '🎒',
    iconClass: 'icon--green',
    title: 'No Car? No Problem',
    desc: 'Built for students in halls and busy diaspora households. Order from your phone, skip the bus trip and the heavy haul — we deliver same day or next day.',
  },
  {
    icon: '✦',
    iconClass: 'icon--gold',
    title: 'Authentic, Always',
    desc: 'The right brand, the right variety, the fresh cut. We shop the way your mum would — because a substitute just isn\'t the same.',
  },
];

export default function WhatWeServe() {
  return (
    <section className="serve" id="how">
      <div className="serve__blob-left" />
      <div className="serve__blob-right" />

      <div className="serve__top">
        <h2 className="serve__heading">
          Made <span>For You</span>
        </h2>
        <p className="serve__desc">
          Whether you're a student far from home, part of the diaspora, or
          someone who simply refuses to compromise on flavour — Sukoya was
          built for your kitchen.
        </p>
      </div>

      <div className="serve__cards">
        {cards.map((card) => (
          <div className="serve-card" key={card.title}>
            <div className={`serve-card__icon ${card.iconClass}`}>
              {card.icon}
            </div>
            <h3 className="serve-card__title">{card.title}</h3>
            <p className="serve-card__desc">{card.desc}</p>
            <div className="serve-card__arrow">↗</div>
          </div>
        ))}
      </div>
    </section>
  );
}
