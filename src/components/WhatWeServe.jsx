import React from 'react';
import './WhatWeServe.css';

const cards = [
  {
    icon: '🌍',
    bg: 'card--orange',
    title: 'Your Ingredient, Found',
    desc: 'Stockfish, bitter leaf, jerk seasoning, pandan leaves — if your recipe calls for it, we track it down at Leicester\'s best markets. No substitutes without asking.',
  },
  {
    icon: '🎒',
    bg: 'card--navy',
    title: 'No Car? No Problem',
    desc: 'Built for students in halls and busy diaspora households. Order from your phone, skip the bus trip and the heavy haul — we deliver same day or next day.',
  },
  {
    icon: '✦',
    bg: 'card--white',
    title: 'Authentic, Always',
    desc: 'The right brand, the right variety, the fresh cut. We shop the way your mum would — because a substitute just isn\'t the same.',
  },
];

export default function WhatWeServe() {
  return (
    <section className="serve" id="how">
      <div className="serve__blob-l" /><div className="serve__blob-r" />

      <div className="serve__top">
        <h2 className="serve__h2">Made <span>For You</span></h2>
        <p className="serve__desc">
          Whether you’re a student far from home, part of the diaspora, or
          someone who simply refuses to compromise on flavour — Sokuya was
          built for your kitchen.
        </p>
      </div>

      <div className="serve__grid">
        {cards.map(c => (
          <div className={`scard ${c.bg}`} key={c.title}>
            <div className="scard__icon">{c.icon}</div>
            <h3 className="scard__title">{c.title}</h3>
            <p className="scard__desc">{c.desc}</p>
            <div className="scard__arrow">↗</div>
          </div>
        ))}
      </div>
    </section>
  );
}
